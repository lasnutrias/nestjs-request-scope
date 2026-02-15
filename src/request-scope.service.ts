import { Injectable } from '@nestjs/common';
import { LikeValue, RequestScope } from './request-scope.model';

/**
 * Injectable service to wrap around the RequestScore and allow integration into nestjs injection system.
 */
@Injectable()
export class RequestScopeService {
  /**
   * Gets a value from the scope
   * @param key type of the value, defaults to unknown
   * @returns the value stored or undefined
   */
  get<V = unknown>(key: string): LikeValue<V> {
    return RequestScope.getValue<V>(key);
  }
  set<V = unknown>(key: string, value: V) {
    RequestScope.setValue(key, value);
  }
}
