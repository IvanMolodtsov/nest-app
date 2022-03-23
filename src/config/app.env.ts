import { Expose } from 'class-transformer';
import { IsEnum, IsNumber } from 'class-validator';
import { Environment } from './env.enum';

export class AppConfig {
  @Expose()
  TZ: string;

  @IsEnum(Environment)
  @Expose({ name: 'NODE_ENV' })
  node: Environment;

  @IsNumber()
  @Expose({ name: 'PORT' })
  app: number;
}
