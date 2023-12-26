import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Res, Param, Post, ValidationPipe } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { ProductDTO } from 'src/DTO/Product';
import { Response } from 'express';

@Controller('/product')  // http://localhost:3000/product using `GET`
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get('/all')
  @HttpCode(HttpStatus.OK)
  getProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  createProduct(@Body(ValidationPipe) productData: ProductDTO) {
    return this.productService.createProduct(productData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteProduct(@Param('id') id: string, @Res() res: Response) {
    try {
      const result = await this.productService.deleteProductById(id);
      if (result === 1) {
        res.status(200).json({ message: 'Product Deleted.' });
      } else {
        res.status(404).json({ message: 'Product Not Found.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error.' });
    }
  }
}
