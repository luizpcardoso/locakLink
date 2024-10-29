import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';

import { CreateUserDto } from 'src/dtos/create-user.dto';
import { MidiaService } from './midia.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3Service } from '../shared/s3.service';


@Controller('midia')
export class MidiaController {
  constructor(private readonly midiaService: MidiaService)
  
  {}

  @Get()
  async get(): Promise<string> {
   
    return 'get midia!';
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file: Express.Multer.File): Promise<string> {
  
    const result = await this.midiaService.uploadImage(file);
    return `Imagem enviada com sucesso: ${result}`;
  }
}
