import { IsString, IsNumber } from 'class-validator';

export class ProductDTO {
  @IsString()
  name: string;

  @IsString()
  description?: string;

  @IsNumber()
  price: number;

  @IsString()
  category?: string;

  @IsString()
  brand?: string;

  @IsString()
  color?: string;

  @IsString()
  availability?: string;

  @IsNumber()
  rating: number;
}
