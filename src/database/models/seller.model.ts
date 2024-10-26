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
  import { User } from './user.model';
  import { Address } from './address.model';
  
  @Table
  export class Seller extends Model<Seller> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;
  
    @ForeignKey(() => User)
    @Column
    userId!: number;
  
    @ForeignKey(() => Address)
    @Column
    addressId!: number;
  
    @Column
    email!: string;
  
    @Column
    cellphone!: string;
  
    @Column
    primaryColor!: string;
  
    @Column
    secondaryColor!: string;
  
    @Column
    coverPhotoUrl!: string;
  
    @Column
    profilePhotoUrl!: string;
  
    @CreatedAt
    @Column
    createdAt!: Date;
  
    @UpdatedAt
    @Column
    updatedAt!: Date;
  }
  