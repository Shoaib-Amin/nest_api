import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ example: 1, description: 'Unique ID of the user' })
  id: number;

  @ApiProperty({ example: 'John' })
  firstname: string;

  @ApiProperty({ example: 'Doe' })
  lastname: string;

  @ApiProperty({ example: 'john.doe@example.com' })
  email: string;

  @ApiProperty({ example: 25 })
  age: number;

  @ApiProperty({ example: 'https://example.com/profile.jpg' })
  profileUrl: string;

  @ApiProperty({ example: '2025-07-17T18:25:43.511Z' })
  createdAt: Date;

  @ApiProperty({ example: '2025-07-17T18:25:43.511Z' })
  updatedAt: Date;
}
