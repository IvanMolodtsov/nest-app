import { Expose } from 'class-transformer';
import {
  IsNotEmptyObject,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ExposeKeys } from '../common/decorators/expose-keys.decorator';

export class DatabaseEnv {
  @IsString()
  @Expose({ name: 'DB_HOST' })
  host: string;

  @IsString()
  @Expose({ name: 'DB_USERNAME' })
  username: string;

  @IsString()
  @Expose({ name: 'DB_PASSWORD' })
  password: string;

  @IsString()
  @Expose({ name: 'DB_DATABASE' })
  database: string;

  @IsNumber()
  @Expose({ name: 'DB_PORT' })
  port: number;
}

export class DatabaseConfig {
  @ExposeKeys(DatabaseEnv)
  @ValidateNested()
  @Expose()
  @IsNotEmptyObject()
  database: DatabaseEnv;
}
