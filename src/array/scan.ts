export function* scan<T, U>(fn: (acc: U, cur: T) => U, initial: U, iter: Iterable<T>): Generator<U> {
  let acc = initial;
  yield acc;
  for (const item of iter) {
    acc = fn(acc, item);
    yield acc;
  }
}
