import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './users.dtos';
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

  @Post()
  async CreateUser(@Body() user: CreateUserDto): Promise<any> {
    return this.UsersService.CreateOneUser(user);
  }
}
