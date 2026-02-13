import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppInterceptor } from './app.interceptor';
import { RequestScope } from '../src';

@Controller()
export class AppController {
  @Get()
  @UseInterceptors(AppInterceptor)
  hello() {
    return 'hello ' + RequestScope.getValue<string>('requestId');
  }
}
