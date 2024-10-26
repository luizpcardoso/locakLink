import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    CreatedAt,
  } from 'sequelize-typescript';
  
  @Table
  export class Category extends Model<Category> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;
  
    @Column
    name!: string;
  
    @ForeignKey(() => Category)
    @Column
    parentId!: number;
  
    @CreatedAt
    @Column
    createdAt!: Date;
  }
  