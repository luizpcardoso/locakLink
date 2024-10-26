import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    CreatedAt,
    UpdatedAt,
  } from 'sequelize-typescript';
  import { Seller } from './seller.model';
  
  @Table
  export class Post extends Model<Post> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;
  
    @ForeignKey(() => Seller)
    @Column
    sellerId!: number;
  
    @Column
    title!: string;
  
    @Column
    description!: string;
  
    @CreatedAt
    @Column
    createdAt!: Date;
  
    @UpdatedAt
    @Column
    updatedAt!: Date;
  }
  