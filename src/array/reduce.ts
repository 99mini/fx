export function reduce<T, U>(fn: (acc: U, cur: T) => U, initial: U, iter: Iterable<T>): U {
  let acc = initial;
  for (const item of iter) {
    acc = fn(acc, item);
  }
  return acc;
}
