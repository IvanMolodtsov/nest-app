import { IsEnum } from 'class-validator';
import { Environment } from './env.enum';

export class AppEnv {
  @IsEnum(Environment)
  NODE_ENV: Environment;
}
