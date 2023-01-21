import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}
  async getUsers(): Promise<User[]> {
    const qb = this.usersRepository.createQueryBuilder('user');
    qb.select(['user.firstName']);

    return qb.getMany();
  }

  async getOneUser(id: number): Promise<User> {
    const qb = this.usersRepository.createQueryBuilder('user');
    qb.andWhere('user.id = :id', {
      id,
    });
    qb.select(['user.id', 'user.firstName', 'user.lastName']);

    return qb.getOne();
  }
}
