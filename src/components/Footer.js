import githubIcon from '../img/gh-logo.png';
import helpIcon from '../img/help.png';

export function getFooter() {
  const container = document.createElement('div');
  container.classList.add('footer-container');
  document.body.appendChild(container);

  const ghIcon = document.createElement('img');
  ghIcon.src = githubIcon;
  container.appendChild(ghIcon);
  ghIcon.addEventListener('click', () =>
    window.open('https://github.com/pmbechard/knight-travails')
  );

  const footerText = document.createElement('small');
  footerText.innerHTML = 'Peyton Bechard &copy; 2022';
  container.appendChild(footerText);

  const helpImg = document.createElement('img');
  helpImg.src = helpIcon;
  container.appendChild(helpImg);
  helpImg.addEventListener('click', () => {
    const modal = document.getElementById('modal-container');
    modal.style.display = 'block';
  });
  helpImg.addEventListener('touchstart', () => {
    const modal = document.getElementById('modal-container');
    modal.style.display = 'block';
  });
}
