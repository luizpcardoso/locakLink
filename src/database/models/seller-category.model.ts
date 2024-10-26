import {
    Table,
    ForeignKey,
    Column,
    Model,
  } from 'sequelize-typescript';
  import { Seller } from './seller.model';
  import { Category } from './category.model';
  
  @Table({ tableName: 'seller_categories', timestamps: false })
  export class SellerCategory extends Model<SellerCategory> {
    @ForeignKey(() => Seller)
    @Column
    sellerId!: number;
  
    @ForeignKey(() => Category)
    @Column
    categoryId!: number;
  }
  