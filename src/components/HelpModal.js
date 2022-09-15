export function getHelpModal() {
  const container = document.createElement('div');
  container.classList.add('modal-container');
  container.id = 'modal-container';
  document.body.appendChild(container);

  const background = document.createElement('div');
  background.classList.add('modal-bg');
  container.appendChild(background);
  background.addEventListener('click', () => {
    container.style.display = 'none';
  });

  const modalWindow = document.createElement('div');
  modalWindow.classList.add('modal-window');
  container.appendChild(modalWindow);
}
