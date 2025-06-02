import { chunk, filter, flatMap, groupBy, map, partition, pluck, scan, sortBy, uniq, zip } from "./lazy";
import { take, toArray, reduce } from "./evaluate";

export class Fx<T> implements Iterable<T> {
  private iterable: Iterable<T>;

  constructor(iterable: Iterable<T>) {
    this.iterable = iterable;
  }

  /**
   * @description creates a new Fx instance from an iterable
   */
  static of<T>(iterable: Iterable<T>): Fx<T> {
    return new Fx(iterable);
  }

  map<U>(fn: (item: T) => U): Fx<U> {
    return Fx.of(map(fn, this.iterable));
  }

  filter(fn: (item: T) => boolean): Fx<T> {
    return Fx.of(filter(fn, this.iterable));
  }

  /**
   * @description evaluates the iterable and returns the first n elements (O(n))
   */
  take(n: number): Fx<T> {
    return Fx.of(take(n, this.iterable));
  }

  /**
   * @description evaluates the iterable and returns the array (O(n))
   */
  toArray(): T[] {
    return toArray(this.iterable);
  }

  groupBy<K>(keyFn: (item: T) => K): Map<K, T[]> {
    return groupBy(keyFn, this.iterable);
  }

  flatMap<U>(fn: (item: T) => Iterable<U>): Fx<U> {
    return Fx.of(flatMap(fn, this.iterable));
  }

  zip<U>(...others: Iterable<U>[]): Fx<(T | U)[]> {
    return Fx.of(zip<T | U>(this.iterable, ...others));
  }

  chunk(size: number): Fx<T[]> {
    return Fx.of(chunk(size, this.iterable));
  }

  /**
   * @description evaluate
   */
  reduce<U>(fn: (acc: U, cur: T) => U, initial: U): U {
    return reduce(fn, initial, this.iterable);
  }

  scan<U>(fn: (acc: U, cur: T) => U, initial: U): Fx<U> {
    return Fx.of(scan(fn, initial, this.iterable));
  }

  pluck<K extends keyof T & string>(key: K): Fx<T[K]> {
    return Fx.of(pluck(key, this.iterable));
  }

  sort(compareFn?: (itemA: T, itemB: T) => number): Fx<T> {
    return Fx.of(sortBy(compareFn, this.iterable));
  }

  uniq(): Fx<T> {
    return Fx.of(uniq(this.iterable));
  }

  partition(predicate: (item: T) => boolean): [Fx<T>, Fx<T>] {
    const [truthy, falsy] = partition(predicate, this.iterable);
    return [Fx.of(truthy), Fx.of(falsy)];
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
