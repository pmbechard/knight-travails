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
  }

  #updateCheckbox() {
    const checkbox = document.getElementById('to-from-switch');
    if (this._state === null) checkbox.classList.add('disabled');
    else checkbox.checked = this._state;
  }
}
