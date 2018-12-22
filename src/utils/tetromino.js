export function create(type, x, y) {
  return {
    type,
    x,
    y,
    orientation: 0,
  };
}

export function rotate(piece) {
  return {
    ...piece,
    orientation: nextOrientation(piece.orientation),
  };
}

function nextOrientation(n) {
  return (n + 1) % 4;
}
