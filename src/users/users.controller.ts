import { Controller, Get, Param } from '@nestjs/common';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}
  @Get()
  async getUsers(): Promise<User[]> {
    return this.UsersService.getUsers();
  }

  @Get(':id')
  async getOneUser(@Param('id') id: number): Promise<User> {
    return this.UsersService.getOneUser(id);
  }

  // @Post()
  // post(): string {
  //   return this.UsersService.getHello();
  // }
}
