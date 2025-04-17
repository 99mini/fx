import { chunk, filter, flatMap, group, map, reduce, take, toArray, zip, scan } from "./array";

export class Fx<T> implements Iterable<T> {
  private iterable: Iterable<T>;

  constructor(iterable: Iterable<T>) {
    this.iterable = iterable;
  }

  static of<T>(iterable: Iterable<T>): Fx<T> {
    return new Fx(iterable);
  }

  private cloneWith<U>(iter: Iterable<U>): Fx<U> {
    return new Fx(iter);
  }

  map<U>(fn: (item: T) => U): Fx<U> {
    return this.cloneWith(map(this.iterable, fn));
  }

  filter(fn: (item: T) => boolean): Fx<T> {
    return this.cloneWith(filter(this.iterable, fn));
  }

  take(n: number): Fx<T> {
    return this.cloneWith(take(this.iterable, n));
  }

  toArray(): T[] {
    return toArray(this.iterable);
  }

  group<K>(keyFn: (item: T) => K): Map<K, T[]> {
    return group(this.iterable, keyFn);
  }

  flatMap<U>(fn: (item: T) => Iterable<U>): Fx<U> {
    return this.cloneWith(flatMap(this.iterable, fn));
  }

  zip<U>(...others: Iterable<U>[]): Fx<(T | U)[]> {
    return this.cloneWith(zip<T | U>(this.iterable, ...others));
  }

  chunk(size: number): Fx<T[]> {
    return this.cloneWith(chunk(this.iterable, size));
  }

  reduce<U>(fn: (acc: U, cur: T) => U, initial: U): U {
    return reduce(this.iterable, fn, initial);
  }

  scan<U>(fn: (acc: U, cur: T) => U, initial: U): Fx<U> {
    return this.cloneWith(scan(this.iterable, fn, initial));
  }

  [Symbol.iterator](): Iterator<T> {
    return this.iterable[Symbol.iterator]();
  }

  get length(): number {
    return this.toArray().length;
  }
}
