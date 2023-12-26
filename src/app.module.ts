import { Module } from '@nestjs/common';
import { databaseProvider } from './dbservice/knex.service';
import { ProductService } from './services/product.service';
import {ProductController} from './controllers/product.controller'

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService,databaseProvider],
  exports:['KnexConnection']
})
export class AppModule {}
