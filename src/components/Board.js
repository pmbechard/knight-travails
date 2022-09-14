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
  }
}
