export function* take<T>(n: number, iter: Iterable<T>): Generator<T> {
  let i = 0;
  for (const item of iter) {
    if (i++ >= n) break;
    yield item;
  }
}
