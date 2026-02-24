import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppInterceptor } from './app.interceptor';
import { ScopedValue } from '../../src';

@Controller()
export class AppController {
  @Get()
  @UseInterceptors(AppInterceptor)
  hello(@ScopedValue('requestId') requestId: string) {
    return 'hello ' + requestId;
  }
}
