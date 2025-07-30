// create-user.dto.ts
import { IsString, IsEmail, IsInt, Max, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'John', description: 'First name of the user' })
  @IsString()
  firstname: string;

  @ApiProperty({ example: 'Doe', description: 'Last name of the user' })
  @IsString()
  lastname: string;

  @ApiProperty({ example: 'john.doe@example.com', description: 'User email address' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 25, description: 'User age (must be < 100)' })
  @IsInt()
  @Max(99, { message: 'Age must be less than 100' })
  age: number;

  @ApiProperty({ example: 'https://example.com/profile.jpg', description: 'Profile image URL' })
  @IsUrl({}, { message: 'Profile URL must be a valid URL' })
  profileUrl: string;
}
