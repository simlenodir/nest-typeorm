import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Books } from 'src/entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Books])],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
