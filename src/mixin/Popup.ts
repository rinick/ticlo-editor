export default class PopupListener {
  static popupListenerElement = document.documentElement;

  _popupListener?: (event: Event) => void;

  getPopupContainer!: () => HTMLElement | null;
  closePopup!: () => void;

  addCloseListener() {
    if (!this._popupListener) {
      this._popupListener = (e: Event) => this.removeCloseListener(e);
      PopupListener.popupListenerElement.addEventListener('mousedown', this._popupListener);
      PopupListener.popupListenerElement.addEventListener('mousdown', this._popupListener);
    }
  }

  removeCloseListener(event?: Event) {
    if (!this._popupListener) return;
    if (event instanceof MouseEvent) {
      if (this.getPopupContainer) {
        let container = this.getPopupContainer();
        if (!container || container.contains(event.target as HTMLElement)) {
          return;
        }
      }
    } else if (event instanceof KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }
    }
    PopupListener.popupListenerElement.removeEventListener('mousedown', this._popupListener);
    PopupListener.popupListenerElement.removeEventListener('mousdown', this._popupListener);
    this._popupListener = undefined;
    if (this.closePopup) {
      this.closePopup();
    }
  }
}
