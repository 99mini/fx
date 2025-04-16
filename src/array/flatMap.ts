export function* flatMap<T, U>(iter: Iterable<T>, fn: (item: T) => Iterable<U>): Generator<U> {
  for (const item of iter) {
    for (const inner of fn(item)) {
      yield inner;
    }
  }
}
