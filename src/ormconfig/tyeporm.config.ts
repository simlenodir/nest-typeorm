import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {ConfigService} from '@nestjs/config'
import * as dotenv from 'dotenv';
dotenv.config();

const config = new  ConfigService()

export const TypormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST ? String(process.env.DB_HOST) : undefined,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT): undefined,
  username: process.env.DB_USERNAME ? String(process.env.DB_USERNAME) : undefined,
  password: process.env.DB_PASSWORD ? String(process.env.DB_PASSWORD) : undefined,
  database: process.env.DB_DATABASE ? String(process.env.DB_DATABASE) : undefined,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../migrations/*.{js,ts}'],
  synchronize: true,
  logging: true,
  autoLoadEntities: true,
//   cli: {
//     mifrationsDir: __dirname + '/../migrations'
//   }
};
