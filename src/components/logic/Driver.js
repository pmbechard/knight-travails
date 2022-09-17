import { pathfinder } from '../../data/PathFinder';
import { markerState } from '../..';

const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', () => {
  const path = pathfinder(markerState.start, markerState.end);
  console.log(path);
});
