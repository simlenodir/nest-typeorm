import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNumber } from "class-validator"

export class CreateBookDto {
    @ApiProperty({name: 'name', type: 'string', required: true, example:'Nodir'})
    @IsString()
    readonly title: string
}
