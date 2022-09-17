class Node {
  constructor(coords, prev, children) {
    this.coords = coords;
    this.prev = prev;
    this.children = children;
  }
}

export function pathfinder(from, to, prev = null) {
  let current = new Node(from, prev, getChildren(from));
  let queue = [];
  let visited = [];
  queue.push(current);
  let node;

  do {
    node = queue[0];
    queue = queue.slice(1);
    visited.push(node.coords);
    if (compareArrays(node.coords, to)) break;
    node.children.forEach((child) => {
      if (!compareArrayTo2dArray(child, visited)) {
        queue.push(new Node(child, node, getChildren(child)));
      }
    });
  } while (queue.length > 0);
  return destructureNode(node);
}

export function getChildren(node) {
  const [x, y] = node;
  let children = [];
  if (x > 0 && y < 6) children.push([x - 1, y + 2]);
  if (x < 7 && y < 6) children.push([x + 1, y + 2]);
  if (x < 6 && y < 7) children.push([x + 2, y + 1]);
  if (x < 6 && y > 0) children.push([x + 2, y - 1]);
  if (x < 7 && y > 1) children.push([x + 1, y - 2]);
  if (x > 0 && y > 1) children.push([x - 1, y - 2]);
  if (x > 1 && y > 0) children.push([x - 2, y - 1]);
  if (x > 1 && y < 7) children.push([x - 2, y + 1]);
  return children;
}

function destructureNode(node) {
  let output = [];
  while (node) {
    output.push(node.coords);
    node = node.prev;
  }
  return output.reverse();
}

export function compareArrays(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;
  return a.every((val, index) => val === b[index]);
}

export function compareArrayTo2dArray(arr, arr2d) {
  arr2d.forEach((item) => {
    if (compareArrays(item, arr)) return true;
  });
  return false;
}
