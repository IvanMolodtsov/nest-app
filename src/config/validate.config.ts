import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { validationErrors } from './config.utils';

export function ValidateConfig(
  envs: ClassConstructor<any>[],
): (config: Record<string, unknown>) => any {
  return (config: Record<string, unknown>) => {
    let tempConfig = config;
    for (const env of envs) {
      tempConfig = plainToInstance(env, tempConfig, {
        enableImplicitConversion: true,
      });
      const errors = validateSync(tempConfig, {
        skipMissingProperties: false,
      });
      validationErrors(errors);
    }
    return tempConfig;
  };
}
