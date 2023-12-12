import { Injectable, Inject } from '@nestjs/common';
import * as Knex from 'knex';

@Injectable()
export class ProductService {
  constructor(@Inject('KnexConnection') private readonly knex) {}

  async getProducts(): Promise<any> {
    // Use Knex methods here
    const result = await this.knex.select().from('products');
    return result;
  }
}