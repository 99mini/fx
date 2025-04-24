import { chunk, filter, flatMap, groupBy, map, partition, pluck, reduce, scan, sortBy, take, toArray, uniq, zip } from "./array";

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

  groupBy<K>(keyFn: (item: T) => K): Map<K, T[]> {
    return groupBy(this.iterable, keyFn);
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

  pluck<K extends keyof T & string>(key: K): Fx<T[K]> {
    return this.cloneWith(pluck(this.iterable as Iterable<Record<string, any>>, key));
  }

  sortBy(compareFn?: (itemA: T, itemB: T) => number): Fx<T> {
    return this.cloneWith(sortBy(this.iterable, compareFn));
  }

  uniq(): Fx<T> {
    return this.cloneWith(uniq(this.iterable));
  }

  partition(predicate: (item: T) => boolean): [Fx<T>, Fx<T>] {
    const [truthy, falsy] = partition(this.iterable, predicate);
    return [new Fx(truthy), new Fx(falsy)];
  }

  [Symbol.iterator](): Iterator<T> {
    return this.iterable[Symbol.iterator]();
  }

  /**
   * @description evaluates the iterable and returns the length of the array (O(n))
   * @returns {number} the length of the array
   */
  get length(): number {
    return this.toArray().length;
  }
}
