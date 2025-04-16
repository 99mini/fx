export class Fx<T> implements Iterable<T> {
  private iterable: Iterable<T>;

  constructor(iterable: Iterable<T>) {
    this.iterable = iterable;
  }

  static of<T>(iterable: Iterable<T>): Fx<T> {
    return new Fx(iterable);
  }

  map<U>(fn: (item: T) => U): Fx<U> {
    const self = this;
    function* generator() {
      for (const item of self.iterable) {
        yield fn(item);
      }
    }
    return new Fx(generator());
  }

  filter(fn: (item: T) => boolean): Fx<T> {
    const self = this;
    function* generator() {
      for (const item of self.iterable) {
        if (fn(item)) yield item;
      }
    }
    return new Fx(generator());
  }

  take(n: number): Fx<T> {
    const self = this;
    function* generator() {
      let i = 0;
      for (const item of self.iterable) {
        if (i++ >= n) break;
        yield item;
      }
    }
    return new Fx(generator());
  }

  toArray(): T[] {
    return [...this.iterable];
  }

  [Symbol.iterator](): Iterator<T> {
    return this.iterable[Symbol.iterator]();
  }
}
