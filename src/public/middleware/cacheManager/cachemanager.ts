export class CacheManager {
  private cache: Map<string, {value: any; timestamp: number}> = new Map();
  private expirationTime: number;

  constructor(expirationTime: number = 100 * 1000) {
    this.expirationTime = expirationTime;
  }

  get<T>(key: string): T | undefined {
    const cachedItem = this.cache.get(key);
    if (cachedItem) {
      if (Date.now() - cachedItem.timestamp > this.expirationTime) {
        this.cache.delete(key);
        return undefined;
      }
      return cachedItem.value as T;
    }
    return undefined;
  }

  set<T>(key: string, value: T): void {
    this.cache.set(key, {value, timestamp: Date.now()});
  }

  has(key: string): boolean {
    const cachedItem = this.cache.get(key);
    if (cachedItem) {
      return Date.now() - cachedItem.timestamp <= this.expirationTime;
    }
    return false;
  }

  clearExpiredCache() {
    for (const [key, cachedItem] of this.cache) {
      if (Date.now() - cachedItem.timestamp > this.expirationTime) {
        this.cache.delete(key);
      }
    }
  }
}
