import backGround from './background';
import homePage from './homePage';
import menuPage from './menuPage';
import aboutPage from './aboutPage';
import navBar from './nav';
import './style.css';

const Content = document.getElementById('Content');

document.body.insertBefore(backGround(), Content);
document.body.insertBefore(navBar(), Content);

const homeBtn = document.querySelector('button.home');
const menuBtn = document.querySelector('button.menu');
const aboutBtn = document.querySelector('button.about');

Content.classList.add('Content');

//switch page on click
const clearPage = function () {
  while (Content.firstChild) {
    Content.removeChild(Content.firstChild);
  }
};

Content.appendChild(homePage());

homeBtn.addEventListener('click', () => {
  clearPage();
  Content.appendChild(homePage());
});

menuBtn.addEventListener('click', () => {
  clearPage();
  Content.appendChild(menuPage());
});

aboutBtn.addEventListener('click', () => {
  clearPage();
  Content.appendChild(aboutPage());
});
