import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ValidateConfig } from './config/validate.config';
import { getEnvFile } from './config/config.utils';
import * as ormconfig from './config/ormconfig';
import { DatabaseConfig } from './config/database.env';
import { AppConfig } from './config/app.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: getEnvFile(),
      validate: ValidateConfig([AppConfig, DatabaseConfig]),
    }),
    TypeOrmModule.forRoot({
      ...ormconfig,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
