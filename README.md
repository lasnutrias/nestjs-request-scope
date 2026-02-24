# NestJS Request Scope
A lightweight and powerful request-scoping utility for NestJS that allows you to store and retrieve values within the lifecycle of a single HTTP request using asynchronous local storage.
## Installation
```bash
pnpm add @lasnutrias/nestjs-request-scope
```
## Features
* **Request Isolation**: Store data that is only accessible during the current request.
* **Easy Integration**: Global or feature-based registration.
* **Type Safety**: Full TypeScript support for stored values.
* **Middleware Powered**: Automatically handles the scope lifecycle.
---
## Usage
### 1. Root Registration (`forRoot`)
Register the module in your `AppModule`. This will automatically set up the internal middleware to manage the scope for all routes.
#### Standard Registration
In this mode, you need to import `RequestScopeModule.forFeature()` in other modules to access the service.
```typescript
import { RequestScopeModule } from 'nestjs-request-scope';

@Module({
  imports: [
    RequestScopeModule.forRoot(),
  ],
})
export class AppModule {}
```
#### Global Registration
By setting `isGlobal: true`, the `RequestScopeService` becomes available throughout your entire application without needing to import it in other modules.
```typescript
@Module({
  imports: [
    RequestScopeModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
```
---
### 2. Feature Registration (`forFeature`)
If you didn't register the module as global, use `forFeature()` in any module where you need to inject the service. This ensures the service is available without re-configuring the middleware.
```typescript
@Module({
  imports: [RequestScopeModule.forFeature()],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
```
---
### 3. Injecting and Using the Service
You can inject the `RequestScopeService` into your controllers, services, or guards to store and retrieve request-specific data.
```javascript
import { Injectable, Controller, Get } from '@nestjs/common';
import { RequestScopeService } from '@lasnutrias/nestjs-request-scope';

@Injectable()
export class UserService {
  constructor(private readonly requestScope: RequestScopeService) {}

  async processUserData() {
    // Reading from the scope
    const correlationId = this.requestScope.get<string>('correlation-id');
    
    // ... logic ...
    
    return { id: '123', trace: correlationId };
  }
}

@Controller('users')
export class UserController {
  constructor(private readonly requestScope: RequestScopeService) {}

  @Get()
  getUsers() {
    // Writing to the scope
    this.requestScope.set('correlation-id', 'abc-123-unique-id');
    
    return this.userService.processUserData();
  }
}
```
---
### 4. Parameter Decorator (@ScopedValue)
A convenient way to extract values from the scope directly in your controllers.
```javascript
@Get('profile')
getProfile(@ScopedValue('tenant-id') tenantId: string) {
  return { tenantId };
}
```
---
## API Reference
### `RequestScopeService`
| Method | Description |
| --- | --- |
| `get<V>(key: string): V | undefined` | Retrieves a value from the current request scope. |
| `set<V>(key: string, value: V): void` | Stores a value in the current request scope. |
---

## License

Apache-2.0