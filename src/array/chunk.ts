export function* chunk<T>(iter: Iterable<T>, size: number): Generator<T[]> {
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
