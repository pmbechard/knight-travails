import locationIcon from '../img/location.png';
import knightPlacedIcon from '../img/knight-placed.png';
import finishIcon from '../img/finish.png';
import { markerState } from '../index.js';

export function getBoard() {
  const container = document.createElement('div');
  container.classList.add('board-container');
  document.body.appendChild(container);

  for (let i = 63; i >= 0; i--) {
    const tile = document.createElement('div');
    container.appendChild(tile);
    const modifier = parseInt(i / 8) % 2 === 0 ? 1 : 0;
    tile.classList.add(
      'tile',
      `${(i + modifier) % 2 === 0 ? 'light' : 'dark'}`
    );
    tile.id = `tile-${7 - (i % 8)}-${parseInt(i / 8)}`;

    const locationImg = document.createElement('img');
    locationImg.src = locationIcon;
    locationImg.id = 'location-img';
    locationImg.classList.add('board-icon');

    const knightPlacedImg = document.createElement('img');
    knightPlacedImg.src = knightPlacedIcon;
    knightPlacedImg.id = 'knight-placed-img';
    knightPlacedImg.classList.add('board-icon');

    const finishImg = document.createElement('img');
    finishImg.src = finishIcon;
    finishImg.id = 'finish-img';
    finishImg.classList.add('board-icon');

    tile.addEventListener('mouseover', () => {
      if (markerState.state === null) return;
      if (tile.classList.contains('disabled')) return;
      tile.appendChild(locationImg);
    });

    tile.addEventListener('mouseleave', () => {
      locationImg.remove();
    });

    tile.addEventListener('click', () => {
      if (markerState.state === null) return;
      if (tile.classList.contains('disabled')) return;
      else if (markerState.state === false) {
        tile.appendChild(knightPlacedImg);
        tile.classList.add('disabled');
      } else if (markerState.state === true) {
        tile.appendChild(finishImg);
        tile.classList.add('disabled');
      }
      locationImg.remove();
      markerState.state = markerState.state === false ? true : null;
    });
  }
}
