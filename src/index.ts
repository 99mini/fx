import { map, filter, take, toArray } from "./array";

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

  [Symbol.iterator](): Iterator<T> {
    return this.iterable[Symbol.iterator]();
  }
}
