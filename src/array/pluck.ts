export function* pluck<T extends Record<string, any>, K extends keyof T>(iter: Iterable<T>, key: K): Generator<T[K]> {
  for (const item of iter) {
    yield item[key];
  }
}
