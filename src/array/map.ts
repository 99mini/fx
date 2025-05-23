export function* map<T, U>(iter: Iterable<T>, fn: (item: T) => U): Generator<U> {
  for (const item of iter) {
    yield fn(item);
  }
}
