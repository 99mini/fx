export function groupBy<T, K>(keyFn: (item: T) => K, iter: Iterable<T>): Map<K, T[]> {
  const map = new Map<K, T[]>();

  for (const item of iter) {
    const key = keyFn(item);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)!.push(item);
  }

  return map;
}
