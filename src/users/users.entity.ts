import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from './users.interface';

@Entity('user')
export class User implements IUser {
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
