export interface Point {
  x: number;
  y: number;
}

export function create(x: number, y: number): Point {
  return { x, y };
}

export function equals(a: Point, b: Point): boolean {
  return a.x === b.x && a.y === b.y;
}
