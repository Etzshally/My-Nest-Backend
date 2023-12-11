import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/hello")  // http://localhost:3000/hello using `GET`
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
