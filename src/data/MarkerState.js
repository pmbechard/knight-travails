export class Marker {
  constructor(state) {
    this._state = state;
  }

  get state() {
    return this._state;
  }
  set state(state) {
    this._state = state;
    this.#updateCheckbox();
    this.#updateStartBtn();
  }

  #updateCheckbox() {
    const checkbox = document.getElementById('to-from-switch');
    if (this._state !== null) checkbox.checked = this._state;
  }

  #updateStartBtn() {
    const startBtn = document.getElementById('start-btn');
    startBtn.disabled = !this._state ? true : false;
    startBtn.disabled = this._state ? true : false;
  }
}
