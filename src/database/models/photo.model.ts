import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    CreatedAt,
  } from 'sequelize-typescript';
  import { Post } from './post.model';
  
  @Table
  export class Photo extends Model<Photo> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;
  
    @ForeignKey(() => Post)
    @Column
    postId!: number;
  
    @Column
    url!: string;
  
    @CreatedAt
    @Column
    createdAt!: Date;
  }
  