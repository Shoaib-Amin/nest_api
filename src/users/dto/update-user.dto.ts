import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsUrl, Max } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
      @ApiProperty({ example: 'John', description: 'First name of the user' })
      @IsString()
      firstname?: string;
    
      @ApiProperty({ example: 'Doe', description: 'Last name of the user' })
      @IsString()
      lastname?: string;
    
      @ApiProperty({ example: 25, description: 'User age (must be < 100)' })
      @IsInt()
      @Max(99, { message: 'Age must be less than 100' })
      age?: number;
    
      @ApiProperty({ example: 'https://example.com/profile.jpg', description: 'Profile image URL' })
      @IsUrl({}, { message: 'Profile URL must be a valid URL' })
      profileUrl?: string;
}
