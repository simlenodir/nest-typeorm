import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator/';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @ApiProperty({name: 'title', type: 'string', example:'Paxtazor'})
    @IsString()
    readonly title?: string
}
