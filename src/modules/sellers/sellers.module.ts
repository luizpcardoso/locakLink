import { Module } from '@nestjs/common';
import {  SellersController } from './sellers.controller';
import {  SellersService } from './sellers.service';



@Module({
  imports: [],
  controllers: [SellersController],
  providers: [SellersService],
})
export class SellerModule {}
