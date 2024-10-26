import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    CreatedAt,
    UpdatedAt,
    Unique,
  } from 'sequelize-typescript';
  
  @Table
  export class User extends Model<User> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;
  
    @Column
    name!: string;
  
    @Unique
    @Column
    email!: string;
  
    @Column
    password!: string;
  
    @CreatedAt
    @Column
    createdAt!: Date;
  
    @UpdatedAt
    @Column
    updatedAt!: Date;
  }
  