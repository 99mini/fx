export function sortBy<T>(iter: Iterable<T>, keyFn: (item: T) => any): T[] {
  return [...iter].sort((a, b) => {
    const keyA = keyFn(a);
    const keyB = keyFn(b);
    return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
  });
}
