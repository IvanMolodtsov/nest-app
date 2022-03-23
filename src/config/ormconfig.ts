import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { getEnvFile } from './config.utils';
import { ValidateConfig } from './validate.service';
import { DatabaseConfig } from './database.env';
const envFile = getEnvFile();
const data: DatabaseConfig = ValidateConfig([DatabaseConfig])(
  dotenv.parse(fs.readFileSync(envFile)),
);

const isProduction = process.env.NODE_ENV === 'prod';
const rootUrl = isProduction ? 'dist' : 'src';
const config: ConnectionOptions = {
  ...data.database,
  name: 'default',
  type: 'postgres',
  entities: [rootUrl + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrationsRun: true,
  logging: true,
  logger: 'file',
  migrations: [rootUrl + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};
export = config;
