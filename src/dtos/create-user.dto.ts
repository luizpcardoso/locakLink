// create-user.dto.ts
import { IsString, IsEmail, MinLength, Matches } from 'class-validator';
import { Match } from 'src/decorators/match.decorator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;

  @IsString()
  @MinLength(6)
  @Match('password', { message: 'Passwords do not match' })
  confirmPassword: string;
}
