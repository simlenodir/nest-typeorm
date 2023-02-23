import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config';
import { BooksModule } from './module/books/books.module';
import { TypormConfig } from './ormconfig/tyeporm.config';

@Module({
  imports: [
    ConfigModule.forRoot(config),
    TypeOrmModule.forRoot(TypormConfig),
    BooksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
