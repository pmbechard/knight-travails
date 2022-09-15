import { getHeader } from './components/Header';
import { getControls } from './components/Controls';
import { getBoard } from './components/Board';
import { getFooter } from './components/Footer';

import './style.css';
import { Marker } from './data/MarkerState';

export const markerState = new Marker(false);

getHeader();
getControls();
getBoard();
getFooter();