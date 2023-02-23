import { ConfigModuleOptions } from '@nestjs/config';
import { AppConfig } from './app';
import { DatabaseConfig } from './database';

export const config: ConfigModuleOptions = {
  load: [AppConfig, DatabaseConfig],
  cache: true,
  isGlobal: true,
};
