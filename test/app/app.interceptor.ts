import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { RequestScopeService } from '../../src';

const requestId = 'requestId';

@Injectable()
export class AppInterceptor implements NestInterceptor {
  constructor(private readonly requestScope: RequestScopeService) {}
  private static id = 0;

  intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
    AppInterceptor.id++;
    this.requestScope.set(requestId, AppInterceptor.id.toString());
    return next.handle();
  }
}
