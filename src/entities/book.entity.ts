import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
    name: 'books'
})
export class Books {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'title',
    type: 'character varying',
    length: 64
  })
  readonly title: string
}
