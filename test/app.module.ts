import { Module } from '@nestjs/common';
import { RequestScopeModule } from '../src';
import { AppController } from './app.controller';

@Module({
  imports: [RequestScopeModule],
  controllers: [AppController],
})
export class AppModule {}
