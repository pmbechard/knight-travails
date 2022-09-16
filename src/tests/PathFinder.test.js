import { pathfinder, getChildren } from '../PathFinder';

describe('Pathfinder algorithm', () => {
  test('getChildren() returns all children for the specified node', () => {
    expect(getChildren([0, 0])).toStrictEqual([
      [1, 2],
      [2, 1],
    ]);
    expect(getChildren([3, 3])).toStrictEqual([
      [2, 5],
      [4, 5],
      [5, 4],
      [5, 2],
      [4, 1],
      [2, 1],
      [1, 2],
      [1, 4],
    ]);
  });

  test.skip('produces the expected result', () => {
    expect(pathfinder([0, 0], [1, 2])).toBe([
      [0, 0],
      [1, 2],
    ]);
    expect(pathfinder([0, 0], [3, 3])).toBe([
      [0, 0],
      [1, 2],
      [3, 3],
    ]);
    expect(pathfinder([3, 3], [0, 0])).toBe([
      [3, 3],
      [1, 2],
      [0, 0],
    ]);
  });
});
