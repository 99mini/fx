export function* pluck<T, K extends keyof T>(key: K, iter: Iterable<T>): Generator<T[K]> {
  for (const item of iter) {
    yield item[key];
  }
}
