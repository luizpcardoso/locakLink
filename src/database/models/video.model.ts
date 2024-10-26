import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    CreatedAt,
  } from 'sequelize-typescript';
  import { Seller } from './seller.model';
  
  @Table
  export class Video extends Model<Video> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;
  
    @ForeignKey(() => Seller)
    @Column
    sellerId!: number;
  
    @Column
    url!: string;
  
    @Column
    description!: string;
  
    @CreatedAt
    @Column
    createdAt!: Date;
  }
  