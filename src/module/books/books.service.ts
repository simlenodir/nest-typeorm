import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Books } from 'src/entities/book.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Books)
    private readonly typeorm: Repository<Books>
  ){}
  async create(createBookDto: CreateBookDto): Promise<void> {
    await this.typeorm.createQueryBuilder()
      .insert()
      .into(Books)
      .values({title: createBookDto.title})
      .returning(['*'])
      .execute()
  }

  async findAll(): Promise<Books[]> {
    return await this.typeorm.find()
  }

  async findOne(id: string): Promise<Books> {
    return await this.typeorm.findOne({where: {id}})
  }

  async update(id: string, updateBookDto: UpdateBookDto): Promise<void> {
      const foundBook = await this.typeorm.findOne({
        where: {id}
      })

      if (!foundBook) {
        throw new NotFoundException()
      }

      await this.typeorm.update(id, updateBookDto)

  }

  async remove(id: string): Promise<void> {
    const foundBook = await this.typeorm.findOne({
      where: {id}
    })

    if (!foundBook) {
      throw new NotFoundException()
    }

    await this.typeorm.createQueryBuilder()
      .delete()
      .from(Books)
      .where({id})
      .execute()

  }
}
