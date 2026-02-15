import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RequestScopeMiddleware } from './request-scope.middleware';
import { RequestScopeService } from './request-scope.service';

@Module({
  providers: [RequestScopeMiddleware, RequestScopeService],
  exports: [RequestScopeMiddleware, RequestScopeService],
})
export class RequestScopeModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestScopeMiddleware).forRoutes('*');
  }
}
