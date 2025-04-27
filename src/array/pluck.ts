export function* pluck<T, K extends keyof T>(iter: Iterable<T>, key: K): Generator<T[K]> {
  for (const item of iter) {
    yield item[key];
  }
}
