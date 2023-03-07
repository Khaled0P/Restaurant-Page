import './style.css';
import logoPic from '../attachments/logo.png';

export default function navBar() {
  const header = document.createElement('header');
  const logo = document.createElement('div');
  logo.classList.add('logo');
  const nav = document.createElement('nav');

  // add logo through webpack
  const logoImg = new Image();
  logoImg.src = logoPic;
  logo.appendChild(logoImg);

  const Button = function (_class) {
    this.btn = document.createElement('button');
    this.class = this.btn.classList.add(_class);
    this.btn.innerHTML = _class;
  };

  Button.prototype.appendToNav = function () {
    nav.appendChild(this.btn);
  };

  const buttons = [new Button('home'), new Button('menu'), new Button('about')];

  buttons.forEach((ele) => {
    ele.appendToNav();
  });

  header.appendChild(logo);
  header.appendChild(nav);
  return header;
}
