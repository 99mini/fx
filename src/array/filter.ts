export function* filter<T>(iter: Iterable<T>, fn: (item: T) => boolean): Generator<T> {
  for (const item of iter) {
    if (fn(item)) yield item;
  }
}
