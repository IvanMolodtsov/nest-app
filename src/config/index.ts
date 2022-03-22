import { plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';
import { AppEnv } from './app.env';
import { validationErrors } from './config.utils';

export function AppConfig(config: Record<string, unknown>): AppEnv {
  console.log(config['NODE_ENV']);
  const validatedConfig = plainToClass(AppEnv, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  validationErrors(errors);
  return validatedConfig;
}
