import knightIcon from '../../img/knight.png';

export function knightFactory() {
  const knightImg = document.createElement('img');
  knightImg.src = knightIcon;
  knightImg.id = 'knight--img';
  knightImg.classList.add('board-icon');
  return knightImg;
}
