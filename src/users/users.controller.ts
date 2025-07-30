import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user', description: 'This endpoint creates a user with basic profile info' })
  @ApiResponse({ status: 201, type: UserDto })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users list', description: 'This endpoint will return a list of users' })
  @ApiResponse({ status: 200, type: UserDto, isArray: true })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by id', description: 'This endpoint will return a user by ID' })
  @ApiResponse({ status: 200, type: UserDto })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a user by ID' , description: "This endpoint update a user data by ID"})
  @ApiResponse({ status: 200, description: 'User updated successfully', type: UserDto })
  @ApiBody({type: UpdateUserDto})
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user by ID' , description: "This endpoint delete a user by ID"})
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
