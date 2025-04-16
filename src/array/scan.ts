export function* scan<T, U>(iter: Iterable<T>, fn: (acc: U, cur: T) => U, initial: U): Generator<U> {
  let acc = initial;
  yield acc;
  for (const item of iter) {
    acc = fn(acc, item);
    yield acc;
  }
}
