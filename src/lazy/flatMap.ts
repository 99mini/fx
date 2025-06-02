export function* flatMap<T, U>(fn: (item: T) => Iterable<U>, iter: Iterable<T>): Generator<U> {
  for (const item of iter) {
    for (const inner of fn(item)) {
      yield inner;
    }
  }
}
