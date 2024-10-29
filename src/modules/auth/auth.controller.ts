import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateUserDto } from 'src/dtos/create-user.dto';
import { AuthService } from './auth.service';
import { User } from 'src/database/models';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  async get(): Promise<string> {
   
    return 'get auth!';
  }

  @Post('register')
  async register(@Body() registerDto: CreateUserDto): Promise<User> {
    return this.authService.register(registerDto);
  }
}
