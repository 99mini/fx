export function* take<T>(iter: Iterable<T>, n: number): Generator<T> {
  let i = 0;
  for (const item of iter) {
    if (i++ >= n) break;
    yield item;
  }
}
