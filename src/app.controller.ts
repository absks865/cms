import { Controller, Get } from '@nestjs/common';

@Controller('api') // <- Add a route prefix
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
