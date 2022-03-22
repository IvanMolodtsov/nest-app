import { plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';
import { AppEnv } from './app.env';

export function AppConfig(config: Record<string, unknown>): AppEnv {
  const validatedConfig = plainToClass(AppEnv, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
