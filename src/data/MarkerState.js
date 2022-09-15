export class Marker {
  constructor(state) {
    this._state = state;
  }

  get state() {
    return this._state;
  }
  set state(state) {
    this._state = state;
    this.#updateStartBtn();
  }

  #updateStartBtn() {
    const startBtn = document.getElementById('start-btn');
    startBtn.disabled = !this._state ? true : false;
    startBtn.disabled = this._state ? true : false;
  }
}
