// global-federated.module.ts
import { DynamicModule, Global, Module, Type } from '@nestjs/common';

@Global()
@Module({})
export class GlobalFederatedModule {
  /**
   * Warps an external module as a global module.
   * @param externalModule the third party module
   */
  static forRoot(externalModule: Type<any> | DynamicModule): DynamicModule {
    return {
      module: GlobalFederatedModule,
      imports: [externalModule],
      exports: [externalModule],
    };
  }
}
