export function range(end: number): Generator<number>;
export function range(start: number, end: number): Generator<number>;
export function range(start: number, end: number, step: number): Generator<number>;

export function* range(start: number, end?: number, step: number = 1): Generator<number> {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  if (step < 0) {
    for (let i = start; i > end; i = i + step) yield i;
  }
  for (let i = start; i < end; i = i + step) yield i;
}
