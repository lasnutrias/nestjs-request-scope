import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { RequestScope } from '../src';

@Injectable()
export class AppInterceptor implements NestInterceptor {
  private static id = 0;

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    AppInterceptor.id++;
    RequestScope.setValue('requestId', AppInterceptor.id.toString());
    return next.handle();
  }
}
