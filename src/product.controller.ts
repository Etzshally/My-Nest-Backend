import { Controller, Get,HttpCode,HttpStatus } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller("/products")  // http://localhost:3000/products using `GET`
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getProducts() {
    return this.productService.getProducts();
  }
}
