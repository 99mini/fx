export function group<T, K>(iter: Iterable<T>, keyFn: (item: T) => K): Map<K, T[]> {
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
