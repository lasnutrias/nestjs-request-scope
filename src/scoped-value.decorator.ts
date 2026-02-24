import { createParamDecorator } from '@nestjs/common';
import { RequestScope } from './request-scope.model';

export const ScopedValue = createParamDecorator((key: string) => {
  if (!key) {
    return undefined;
  }
  const value = RequestScope.getValue(key);
  return value;
});
