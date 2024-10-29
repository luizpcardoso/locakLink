import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { models } from './database/models/index'; 
import { ConfigModule } from '@nestjs/config';
import { UserController } from './modules/users/user.controller';
import { UserService } from './modules/users/user.service';
import { UserModule } from './modules/users/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { PostModule } from './modules/posts/posts.module';
import { MidiaModule } from './modules/midia/midia.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql', 
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: models, 
      autoLoadModels: true,
     
    }),

    UserModule,
    AuthModule,
    PostModule,
    MidiaModule
    

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
