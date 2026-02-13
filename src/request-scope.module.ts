import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RequestScopeMiddleware } from './request-scope.middleware';

@Module({
  providers: [RequestScopeMiddleware],
  exports: [RequestScopeMiddleware],
})
export class RequestScopeModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestScopeMiddleware).forRoutes('*');
  }
}
