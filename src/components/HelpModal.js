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

  const heading = document.createElement('h1');
  heading.textContent = 'Help!';
  modalWindow.appendChild(heading);

  const whatHeading = document.createElement('h2');
  whatHeading.textContent = 'What is this place?';
  modalWindow.appendChild(whatHeading);

  const whatParagraph = document.createElement('p');
  whatParagraph.textContent =
    "This is the visual display of an algorithm that helps our knight friend find the shortest route to the specified location from where ever you've decided to place him. Knights have the ability to reach any place on the chess board. Give it a shot!";
  modalWindow.appendChild(whatParagraph);

  const howHeading = document.createElement('h2');
  howHeading.textContent = 'How do I do it?';
  modalWindow.appendChild(howHeading);

  const howParagraph = document.createElement('p');
  howParagraph.innerHTML =
    '1. Choose a spot on the chess board to place our knight. <br> 2. Choose a spot on the chess board to place the destination you want him to reach. <br> 3. Click the <u>Start</u> button to begin! <br><br> Press <u>Restart</u> at any time to clear the board.';
  modalWindow.appendChild(howParagraph);

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('try-btn-container');
  modalWindow.appendChild(btnContainer);

  const tryBtn = document.createElement('button');
  tryBtn.classList.add('btn');
  tryBtn.textContent = 'Try it out!';
  btnContainer.appendChild(tryBtn);
  tryBtn.addEventListener('click', () => {
    container.style.display = 'none';
  });
}
