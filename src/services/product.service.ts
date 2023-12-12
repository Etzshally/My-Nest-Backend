import { Injectable, Inject, Res } from '@nestjs/common';
import * as Knex from 'knex';
import { ProductDTO } from 'src/DTO/Product';

@Injectable()
export class ProductService {
    constructor(@Inject('KnexConnection') private readonly knex) { }

    async getProducts() {
        const result = await this.knex.select().from('products');
        return result;
    }

    async getProductById(id: string) {
        const result = await this.knex.select().from('products').where({ "id": id });
        return result;
    }

    async deleteProductById(id: string) {
        const result = await this.knex('products').where({ id }).del();
        return result;
    }

    async createProduct(productData: ProductDTO) {
        const [id] = await this.knex('products').insert(productData);
        return { message: `Product with id: ${id} created` }
    }
}