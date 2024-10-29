import { Module } from '@nestjs/common';
import { MidiaController } from './midia.controller';
import { MidiaService } from './midia.service';
import { SharedModule } from '../shared/shared.module';



@Module({
  imports: [SharedModule],
  controllers: [MidiaController],
  providers: [MidiaService],
})
export class MidiaModule {}
