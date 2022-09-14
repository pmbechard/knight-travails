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
  btn.appendChild(checkbox);

  const knobs = document.createElement('div');
  knobs.classList.add('knobs');
  btn.appendChild(knobs);

  const layer = document.createElement('div');
  layer.classList.add('layer');
  btn.appendChild(layer);

  const resetBtn = document.createElement('button');
  resetBtn.classList.add('reset-btn');
  resetBtn.textContent = 'Reset';
  container.appendChild(resetBtn);
}
