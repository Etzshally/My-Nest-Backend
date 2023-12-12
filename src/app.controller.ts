import { Controller, Get,HttpCode,HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/hello")  // http://localhost:3000/hello using `GET`
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getHello() {
    return this.appService.getHello();
  }
}
