import * as Point from '../point';

test('equality', () => {
  const a = Point.create(2, 4);
  const b = Point.create(5, 3);
  const c = Point.create(2, 4);
  expect(Point.equals(a, b)).toEqual(false);
  expect(Point.equals(a, c)).toEqual(true);
  expect(Point.equals(b, c)).toEqual(false);
});
