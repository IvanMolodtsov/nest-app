import { IsEnum, IsNumber } from 'class-validator';
import { Environment } from './env.enum';

export class AppEnv {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsNumber()
  PORT: number;
}
