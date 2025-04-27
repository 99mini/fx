export function sortBy<T>(iter: Iterable<T>, compareFn?: (itemA: T, itemB: T) => number): T[] {
  return [...iter].sort(compareFn);
}
