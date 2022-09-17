export class Marker {
  constructor(state) {
    this._state = state;
    this._start;
    this._end;
  }

  get state() {
    return this._state;
  }
  set state(state) {
    this._state = state;
    this.#updateStartBtn();
  }

  get start() {
    return this._start;
  }

  set start(loc) {
    this._start = this.#parseCoords(loc);
  }

  get end() {
    return this._end;
  }

  set end(loc) {
    this._end = this.#parseCoords(loc);
  }

  #parseCoords(loc) {
    let coords = loc.id;
    coords = coords.split('-');
    coords = coords.slice(1);
    return coords;
  }

  #updateStartBtn() {
    const startBtn = document.getElementById('start-btn');
    startBtn.disabled = !this._state ? true : false;
    startBtn.disabled = this._state ? true : false;
  }
}
