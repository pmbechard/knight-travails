import { pathfinder, getChildren } from '../PathFinder';

describe('Pathfinder algorithm', () => {
  test('getChildren() returns all children for the specified node', () => {
    expect(getChildren([0, 0])).toStrictEqual([
      [1, 2],
      [2, 1],
    ]);
    expect(getChildren([7, 0])).toStrictEqual([
      [6, 2],
      [5, 1],
    ]);
    expect(getChildren([0, 7])).toStrictEqual([
      [2, 6],
      [1, 5],
    ]);
    expect(getChildren([7, 7])).toStrictEqual([
      [6, 5],
      [5, 6],
    ]);
    expect(getChildren([0, 3])).toStrictEqual([
      [1, 5],
      [2, 4],
      [2, 2],
      [1, 1],
    ]);
    expect(getChildren([3, 0])).toStrictEqual([
      [2, 2],
      [4, 2],
      [5, 1],
      [1, 1],
    ]);
    expect(getChildren([7, 3])).toStrictEqual([
      [6, 5],
      [6, 1],
      [5, 2],
      [5, 4],
    ]);
    expect(getChildren([3, 7])).toStrictEqual([
      [5, 6],
      [4, 5],
      [2, 5],
      [1, 6],
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
