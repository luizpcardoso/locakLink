import { Injectable } from '@nestjs/common';

@Injectable()
export class SellersService {
  getHello(): string {
    return 'Hello World!';
  }
}
