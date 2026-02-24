import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RequestScopeModule } from '../../src';

@Module({
  imports: [RequestScopeModule.forFeature()],
  controllers: [AppController],
})
export class AppModule {}
