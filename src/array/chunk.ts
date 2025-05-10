export function* chunk<T>(size: number, iter: Iterable<T>): Generator<T[], void, unknown> {
  let buffer: T[] = [];
  for (const item of iter) {
    buffer.push(item);
    if (buffer.length === size) {
      yield buffer;
      buffer = [];
    }
  }
  if (buffer.length > 0) yield buffer;
}
