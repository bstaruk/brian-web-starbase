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
      setTimeout(() => {
        header.classList.add('header--active');
        setTimeout(() => {
          header.textContent = 'brian@staruk.me';
          header.classList.remove('header--active');
        }, 300);
      }, 2000);
    }
  }
}

export default Header;
