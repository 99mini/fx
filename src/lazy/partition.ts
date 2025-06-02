export function partition<T>(predicate: (item: T) => boolean, iter: Iterable<T>): [T[], T[]] {
  const truthy: T[] = [];
  const falsy: T[] = [];
  for (const item of iter) {
    if (predicate(item)) {
      truthy.push(item);
    } else {
      falsy.push(item);
    }
  }
  return [truthy, falsy];
}
