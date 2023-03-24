import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  findAll(): string {
    return 'This action returns all user';
  }

  @Post()
  create(@Body() user: any): string {
    return `This action adds a new user: ${user}`;
  }

  @Put()
  update(@Body() user: any): string {
    return `This action updates an user: ${user}`;
  }

  @Delete()
  delete(@Body() user: any): string {
    return `This action deletes an user: ${user}`;
  }
}
