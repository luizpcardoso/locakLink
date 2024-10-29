import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/database/models';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User) private readonly userModel: typeof User) {}


  async register(registerDto: CreateUserDto): Promise<User> {
    const { name, email, password } = registerDto;

  
    const existingUser = await this.userModel.findOne({ where: { email } });
    if (existingUser) {
      throw new BadRequestException('Email já está em uso.');
    }

  
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}
