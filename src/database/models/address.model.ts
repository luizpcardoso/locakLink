import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    CreatedAt,
    UpdatedAt,
  } from 'sequelize-typescript';
  
  @Table
  export class Address extends Model<Address> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;
  
    @Column
    street!: string;
  
    @Column
    city!: string;
  
    @Column
    state!: string;
  
    @Column
    country!: string;
  
    @Column
    postalCode!: string;
  
    @CreatedAt
    @Column
    createdAt!: Date;
  
    @UpdatedAt
    @Column
    updatedAt!: Date;
  }
  