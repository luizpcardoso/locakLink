// src/s3/s3.service.ts
import { Injectable } from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { s3 } from '../../s3/s3.config';

@Injectable()
export class S3Service {
  private s3Client: S3Client = s3;

  async uploadFile(bucketName: string, fileKey: string, fileBuffer: Buffer, contentType: string) {
    const uploadParams = {
      Bucket: bucketName,
      Key: fileKey,
      Body: fileBuffer,
      ContentType: contentType,
    };
    const command = new PutObjectCommand(uploadParams);
    await this.s3Client.send(command);
  }
}
