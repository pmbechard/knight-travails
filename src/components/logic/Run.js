import { pathfinder } from './PathFinder';
import { markerState } from '../..';

export function run() {
  const path = pathfinder(markerState.start, markerState.end);
  console.log(path);
}
