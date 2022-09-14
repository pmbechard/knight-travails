import logo from '../../logo.png';

export function getHeader() {
  const container = document.createElement('div');
  container.classList.add('header-container');
  document.body.appendChild(container);

  const logoImg = document.createElement('img');
  logoImg.src = logo;
  container.appendChild(logoImg);

  const title = document.createElement('h1');
  container.appendChild(title);
  title.textContent = 'Knight Travails';
}
