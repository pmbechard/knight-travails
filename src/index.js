import { getHeader } from './components/Header';
import { getControls } from './components/Controls';
import { getBoard } from './components/Board';
import { getFooter } from './components/Footer';
import { getHelpModal } from './components/HelpModal';

import { Marker } from './components/logic/MarkerState';
import './style.css';

export const markerState = new Marker(false);

getHeader();
getControls();
getBoard();
getFooter();
getHelpModal();
