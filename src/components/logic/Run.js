import { pathfinder } from './PathFinder';
import { markerState } from '../..';
import pathIcon from '../../img/path.png';

export function run() {
  document.getElementById('start-btn').disabled = true;
  document.getElementById('reset-btn').disabled = true;
  const moves = pathfinder(markerState.start, markerState.end);
  const path = generatePath(moves);
  animatePath(path);
}

function generatePath(moves) {
  let prevMove = moves[0];
  let currentMove;
  let path = [prevMove];

  for (let i = 1; i < moves.length; i++) {
    currentMove = moves[i];

    let x = prevMove[0];
    while (x !== currentMove[0]) {
      x < currentMove[0] && x++;
      x > currentMove[0] && x--;
      path.push([x, prevMove[1]]);
    }

    let y = prevMove[1];
    while (y !== currentMove[1]) {
      y < currentMove[1] && y++;
      y > currentMove[1] && y--;
      path.push([x, y]);
    }

    prevMove = currentMove;
  }
  return path;
}

async function animatePath(path) {
  for (let i = 1; i < path.length; i++) {
    const tile = document.getElementById(`tile-${path[i][0]}-${path[i][1]}`);
    if (i !== 0 && i % 3 === 0) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const moveMarker = document.createElement('p');
      moveMarker.textContent = `${i / 3}`;
      moveMarker.classList.add('move-marker');
      tile.appendChild(moveMarker);
    } else {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const pathMarker = document.createElement('img');
      pathMarker.classList.add('board-icon', 'path-marker');
      pathMarker.src = pathIcon;
      tile.appendChild(pathMarker);
    }
  }
  document.getElementById('reset-btn').disabled = false;
}
