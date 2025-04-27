export function uniq<T>(iter: Iterable<T>): T[] {
  const seen = new Set<T>();
  const result: T[] = [];
  for (const item of iter) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }
  return result;
}
