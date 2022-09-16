export function pathfinder(from, to) {
  return [[0, 0]];
}

export function getChildren(node) {
  const [x, y] = node;
  let children = [];
  // check for path 1
  if (x > 0 && y < 6) children.push([x - 1, y + 2]);
  // check for path 2
  if (x < 7 && y < 6) children.push([x + 1, y + 2]);
  // check for path 3
  if (x < 6 && y < 7) children.push([x + 2, y + 1]);
  // check for path 4
  if (x < 6 && y > 0) children.push([x + 2, y - 1]);
  // check for path 5
  if (x < 7 && y > 1) children.push([x + 1, y - 2]);
  // check for path 6
  if (x > 0 && y > 1) children.push([x - 1, y - 2]);
  // check for path 7
  if (x > 1 && y > 0) children.push([x - 2, y - 1]);
  // check for path 8
  if (x > 1 && y < 7) children.push([x - 2, y + 1]);

  return children;
}
