export function sortBy<T>(compareFn?: (itemA: T, itemB: T) => number, iter?: Iterable<T>): T[] {
  if (!iter) return [];
  return [...iter].sort(compareFn);
}
