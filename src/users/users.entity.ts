import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'nest', schema: 'dbo' })
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  firstName: string;

  @Column({
    nullable: false,
    default: '',
  })
  lastName: string;
}
