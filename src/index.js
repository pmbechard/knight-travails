import { getHeader } from './components/Header';
import { getControls } from './components/Controls';
import { getBoard } from './components/Board';
import { getFooter } from './components/Footer';

import './style.css';
import { Marker } from './data/MarkerState';
import { getHelpModal } from './components/HelpModal';

export const markerState = new Marker(false);

// FIXME: start btn hover and active properties show when btn is disabled

getHeader();
getControls();
getBoard();
getFooter();
getHelpModal();
