// src/s3/s3.config.ts
import { S3Client } from "@aws-sdk/client-s3";

export const s3 = new S3Client({
  endpoint: "http://localhost:9000", // URL do MinIO
  region: "us-east-1", // Região fictícia para compatibilidade
  credentials: {
    accessKeyId: "admin", // Usuário do MinIO
    secretAccessKey: "admin123", // Senha do MinIO
  },
  forcePathStyle: true, // Necessário para MinIO
});
