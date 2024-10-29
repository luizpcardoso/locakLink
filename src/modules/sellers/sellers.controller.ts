import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateUserDto } from 'src/dtos/create-user.dto';
import { SellersService } from './sellers.service';


@Controller('posts')
export class SellersController {
  constructor(private readonly sellersService: SellersService) {}

  @Post()
  async get(): Promise<string> {
   
    return 'Get seller!';
  }
}
