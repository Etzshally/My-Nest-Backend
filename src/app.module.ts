import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProvider } from './dbservice/knex.service';
import { ProductService } from './services/product.service';
import {ProductController} from './controllers/product.controller'

@Module({
  imports: [],
  controllers: [AppController,ProductController],
  providers: [AppService,ProductService,databaseProvider],
  exports:['KnexConnection']
})
export class AppModule {}
