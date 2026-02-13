import { AsyncLocalStorage } from 'node:async_hooks';

export type ContextType = Map<string, any>;
export type ContextLike = ContextType | undefined;
export type LikeValue<V> = V | undefined;

export class RequestScope {
  private static readonly als = new AsyncLocalStorage<ContextType>();

  static register(callback: () => any) {
    this.als.run(new Map(), callback);
  }

  static getValue<V>(key: string): LikeValue<V> {
    return this.als.getStore()?.get(key) as LikeValue<V>;
  }

  static setValue<V>(key: string, value: LikeValue<V>) {
    const store = this.als.getStore();
    store?.set(key, value);
  }
}
