import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Res,
  HttpStatus,
  Query,
  NotFoundException,
  Body,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('products')
  async getAllProducts(): Promise<Product[]> {
    return await this.productsService.getAllProducts();
  }

  @Get('product/:id')
  async getProduct(@Param('id') id): Promise<Product> {
    return await this.productsService.getProduct(id);
    //return res.status(HttpStatus.OK).json(product);
  }

  @Post('product')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  async addProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    return await this.productsService.addProduct(createProductDto);
  }

  @Delete('product/:id')
  async removeProduct(@Param('id') id): Promise<any> {
    return await this.productsService.removeProduct(id);
  }

  @Put('product')
  async editProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    const { id, name, price, available } = createProductDto;
    return await this.productsService.editProduct(id, createProductDto);
  }
}
