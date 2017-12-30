class Header {
  constructor(props) {
    if (props.el) {
      this.el = props.el;
      if (this.el) {
        this.init();
      }
    }
  }

  init() {
    const header = this.el.querySelector('h1') || null;
    if (header) {
      header.textContent = 'brian@staruk.me';
    }
  }
}

export default Header;
