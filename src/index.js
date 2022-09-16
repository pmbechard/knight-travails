import { getHeader } from './components/Header';
import { getControls } from './components/Controls';
import { getBoard } from './components/Board';
import { getFooter } from './components/Footer';
import { getHelpModal } from './components/HelpModal';

import { Marker } from './data/MarkerState';
import './style.css';

export const markerState = new Marker(false);

// TODO: Add algorithm with tests
// TODO: Animate algorithm results
// TODO: Update reset function

getHeader();
getControls();
getBoard();
getFooter();
getHelpModal();
