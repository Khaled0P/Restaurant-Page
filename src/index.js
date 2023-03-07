import homePage from './homePage';
import menuPage from './menuPage';
import aboutPage from './aboutPage';
import navBar from './nav';
import './style.css';

const Content = document.getElementById('Content');
Content.classList.add('Content');
document.body.insertBefore(navBar(), Content);

const homeBtn = document.querySelector('button.home');
const menuBtn = document.querySelector('button.menu');
const aboutBtn = document.querySelector('button.about');

const clearPage = function () {
  while (Content.firstChild) {
    Content.removeChild(Content.firstChild);
  }
};

homePage();

homeBtn.addEventListener('click', () => {
  clearPage();
  homePage();
});

menuBtn.addEventListener('click', () => {
  clearPage();
  Content.appendChild(menuPage());
});

aboutBtn.addEventListener('click', () => {
  clearPage();
  Content.appendChild(aboutPage());
});
