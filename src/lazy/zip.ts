export function* zip<T>(...iters: Iterable<T>[]): Generator<T[]> {
  const iterators = iters.map((it) => it[Symbol.iterator]());
  while (true) {
    const results = iterators.map((it) => it.next());
    if (results.some((r) => r.done)) return;
    yield results.map((r) => r.value);
  }
}
