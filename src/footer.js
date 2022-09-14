import githubIcon from './img/gh-logo.png';

export function getFooter() {
  const container = document.createElement('div');
  container.classList.add('footer-container');
  document.body.appendChild(container);

  const ghIcon = document.createElement('img');
  ghIcon.src = githubIcon;
  container.appendChild(ghIcon);

  const footerText = document.createElement('small');
  footerText.innerHTML = 'Peyton Bechard &copy; 2022';
  container.appendChild(footerText);
}
