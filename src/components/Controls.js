import { run } from '../components/logic/Run';
import { markerState } from '..';

export function getControls() {
  const container = document.createElement('div');
  container.classList.add('controls-container');
  document.body.appendChild(container);

  const startBtn = document.createElement('button');
  startBtn.classList.add('btn');
  startBtn.id = 'start-btn';
  startBtn.textContent = 'Start';
  startBtn.disabled = true;
  container.appendChild(startBtn);
  startBtn.addEventListener('click', run);

  const resetBtn = document.createElement('button');
  resetBtn.classList.add('btn');
  resetBtn.id = 'reset-btn';
  resetBtn.textContent = 'Reset';
  container.appendChild(resetBtn);
  resetBtn.addEventListener('click', () => {
    const tiles = document.querySelectorAll('.tile');
    for (let tile of tiles) {
      tile.classList.remove('disabled');
      tile.innerHTML = '';
      markerState.state = false;
      markerState.start = null;
      markerState.end = null;
      startBtn.disabled = true;
    }
  });
}
