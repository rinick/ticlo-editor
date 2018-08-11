import * as React from 'react';
import applyMixins from '../mixin';
import PopupListener from '../mixin/Popup';

export interface Props {
  text: string;
  children: any;
}
export interface States {
  isMenuOpen: boolean;
}

export default class NavDropDown extends React.Component<Props, States> implements PopupListener {

  menuRef = React.createRef<HTMLDivElement>();

  constructor(props: Props) {
    super(props);
    this.state = { isMenuOpen: false };
    this.onBtnClick = (e: any) => this.showMenu();
  }
  onBtnClick: (e: any) => void;
  showMenu() {
    this.setState({ isMenuOpen: true });
    this.addCloseListener();
  }

  componentWillUnmount() {
    this.removeCloseListener();
  }

  render() {
    return (
      <li className="dropdown nav-item">
        <a className="dropdown-toggle nav-link" role="button" onClick={this.onBtnClick}
          aria-haspopup="true" aria-expanded="false">
          {this.props.text}
        </a>
        <div className={(this.state.isMenuOpen ? 'show ' : '') + 'dropdown-menu'} ref={this.menuRef} aria-labelledby="navbarDropdown">
          {this.props.children}
        </div>
      </li>
    );
  }

  // PopupListener;
  getPopupContainer() {
    return this.menuRef.current;
  }
  closePopup() {
    this.setState({ isMenuOpen: false });
  }

  addCloseListener!: () => void;

  removeCloseListener!: (e?: Event) => void;
}

applyMixins(NavDropDown, [PopupListener]);
