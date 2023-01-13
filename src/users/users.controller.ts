import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Get()
  async getUsers(): Promise<string> {
    return this.UsersService.getUsers();
  }

  // @Post()
  // post(): string {
  //   return this.UsersService.getHello();
  // }
}
