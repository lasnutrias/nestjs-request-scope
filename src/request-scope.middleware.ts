import { NestMiddleware } from '@nestjs/common';
import { RequestScope } from './request-scope.model';

export class RequestScopeMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    RequestScope.register(next);
  }
}
