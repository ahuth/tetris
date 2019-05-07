export type Type = Point;

interface Point {
  x: number;
  y: number;
}

export function create(x: number, y: number): Point {
  return { x, y };
}
