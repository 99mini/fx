export function* map<T, U>(fn: (item: T) => U, iter: Iterable<T>): Generator<U> {
  for (const item of iter) {
    yield fn(item);
  }
}
