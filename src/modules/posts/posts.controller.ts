import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateUserDto } from 'src/dtos/create-user.dto';
import { PostService } from './posts.service';


@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async get(): Promise<string> {
   
    return 'Get post!';
  }
}
