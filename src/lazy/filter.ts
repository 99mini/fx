export function* filter<T>(fn: (item: T) => boolean, iter: Iterable<T>): Generator<T> {
  for (const item of iter) {
    if (fn(item)) yield item;
  }
}
