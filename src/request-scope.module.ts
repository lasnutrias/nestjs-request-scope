import {
  DynamicModule,
  MiddlewareConsumer,
  Module,
  NestModule,
  Provider,
} from '@nestjs/common';
import { RequestScopeMiddleware } from './request-scope.middleware';
import { RequestScopeService } from './request-scope.service';

@Module({
  providers: [RequestScopeMiddleware],
})
class RequestScopeCoreModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestScopeMiddleware).forRoutes('*');
  }
}

@Module({})
export class RequestScopeModule {
  /**
   * forRoot: Configuración global de la infraestructura.
   * @param options Objeto de configuración (opcional).
   */
  static forRoot(options?: { isGlobal?: boolean }): DynamicModule {
    const global = options?.isGlobal ?? false;
    const providers: Provider[] = [];
    const exports: Provider[] = [];
    if (global) {
      providers.push(RequestScopeService);
      exports.push(RequestScopeService);
    }
    return {
      module: RequestScopeModule,
      global,
      imports: [RequestScopeCoreModule],
      providers,
      exports,
    };
  }

  static forFeature(): DynamicModule {
    return {
      module: RequestScopeModule,
      providers: [RequestScopeService],
      exports: [RequestScopeService],
    };
  }
}
