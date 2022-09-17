import { pathfinder } from './PathFinder';
import { markerState } from '../..';
import { knightFactory } from './KnightFactory';

export function run() {
  const path = pathfinder(markerState.start, markerState.end).slice(1);
  // TODO:
  // for each value in path
  //    animate the knight to move to that value
  //    mark each spot along the way include a number at each new point

  let currentPoint = markerState.start;
  document.getElementById('start-btn').disabled = true;

  for (let point = 0; point < path.length; point++) {
    let difference = [
      path[point][0] - currentPoint[0],
      path[point][1] - currentPoint[1],
    ];

    console.log(difference);
    console.log(point + 1);

    let tile = document.getElementById(
      `tile-${[path[point][0]]}-${path[point][1]}`
    );
    if (path[point] !== path[path.length - 1]) {
      tile.innerHTML = '';
      tile.appendChild(knightFactory());
    }
    currentPoint = path[point];
  }

  // console.log(path);
}
