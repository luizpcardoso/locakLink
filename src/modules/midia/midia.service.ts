import { Injectable } from '@nestjs/common';
import { S3Service } from '../shared/s3.service';

@Injectable()
export class MidiaService {
  constructor(private readonly s3Service: S3Service) {}
  getHello(): string {
    return 'Hello World!';
  }

  async uploadImage(file: Express.Multer.File): Promise<string> {
    const bucketName = 's3-test'
    const fileKey = `uploads/${Date.now()}-${file.originalname}`;
    await this.s3Service.uploadFile(bucketName, fileKey, file.buffer, file.mimetype);
    return fileKey;
  }
}
