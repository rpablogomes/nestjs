import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService extends Repository<User> {
  async getUsers(): Promise<any> {
    // const qb = this.createQueryBuilder('user');
    // qb.select(['user.id', 'user.firstName', 'user.lastName']);

    // console.log(qb);

    // return qb.getMany();
    return 'ok';
  }
}
