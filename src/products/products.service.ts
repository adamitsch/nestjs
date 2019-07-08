import { Injectable, Inject } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_MODEL') private readonly productModel: Model<Product>,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getProduct(id: string): Promise<Product> {
    return this.productModel.findById(Types.ObjectId(id)).exec();
  }

  async addProduct(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async removeProduct(id: string): Promise<Product> {
    return this.productModel.findByIdAndDelete(Types.ObjectId(id)).exec();
  }

  async editProduct(
    id: string,
    createProductDto: CreateProductDto,
  ): Promise<Product> {
    return this.productModel
      .findByIdAndUpdate(Types.ObjectId(id), createProductDto)
      .exec();
  }
}
