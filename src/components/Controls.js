import { markerState } from '..';

export function getControls() {
  const container = document.createElement('div');
  container.classList.add('controls-container');
  document.body.appendChild(container);

  const switchContainer = document.createElement('div');
  switchContainer.classList.add('switch-container');
  container.appendChild(switchContainer);

  const btn = document.createElement('div');
  btn.classList.add('switch');
  btn.classList.add('r');
  btn.id = 'switch';
  switchContainer.appendChild(btn);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checkbox');
  checkbox.id = 'to-from-switch';
  checkbox.checked = markerState.state;
  btn.appendChild(checkbox);
  checkbox.addEventListener('click', (e) => {
    e.preventDefault();
  });

  const knobs = document.createElement('div');
  knobs.classList.add('knobs');
  btn.appendChild(knobs);

  const layer = document.createElement('div');
  layer.classList.add('layer');
  btn.appendChild(layer);

  const startBtn = document.createElement('button');
  startBtn.classList.add('btn');
  startBtn.id = 'start-btn';
  startBtn.textContent = 'Start';
  startBtn.disabled = true;
  container.appendChild(startBtn);

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
      startBtn.disabled = true;
    }
  });
}
