export function reduce<T, U>(iter: Iterable<T>, fn: (acc: U, cur: T) => U, initial: U): U {
  let acc = initial;
  for (const item of iter) {
    acc = fn(acc, item);
  }
  return acc;
}
