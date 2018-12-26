export function create(x, y) {
  return { x, y };
}

export function equals(a, b) {
  return a.x === b.x && a.y === b.y;
}
