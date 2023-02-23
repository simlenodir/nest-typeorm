import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ParseUUIDPipe } from '@nestjs/common/pipes';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { ApiForbiddenResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiUnprocessableEntityResponse } from '@nestjs/swagger/dist';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse() 
  @ApiNotFoundResponse()
  @ApiUnprocessableEntityResponse()
  @ApiForbiddenResponse()
  @Post('/create')
  async create(@Body() createBookDto: CreateBookDto): Promise<void> {
     this.booksService.create(createBookDto);
  }

  @Get('/allBooks')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiUnprocessableEntityResponse()
  @ApiForbiddenResponse()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiUnprocessableEntityResponse()
  @ApiForbiddenResponse()
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse() 
  @ApiNotFoundResponse()
  @ApiUnprocessableEntityResponse()
  @ApiForbiddenResponse()
  @Patch('/update/:id')
  async update( @Param('id', new ParseUUIDPipe({version: '4'})) id: string, @Body() body: any): Promise<void> {
     this.booksService.update(id, body);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse() 
  @ApiNotFoundResponse()
  @ApiUnprocessableEntityResponse()
  @ApiForbiddenResponse()
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
}
