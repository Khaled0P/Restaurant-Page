import homePage from './homePage';
import menuPage from './menuPage';
import aboutPage from './aboutPage';

const homeBtn = document.querySelector('button.home');
const menuBtn = document.querySelector('button.menu');
const aboutBtn = document.querySelector('button.about');
const Content = document.getElementById('Content');
homePage();
// Content.appendChild(menuPage());
// Content.appendChild(aboutPage());

homeBtn.addEventListener('click', () => {
  document.querySelector('.menuContainer')
    ? Content.removeChild(document.querySelector('.menuContainer'))
    : Content.removeChild(document.querySelector('.aboutContainer'));
  homePage();
});

menuBtn.addEventListener('click', () => {
  document.querySelector('.homeContainer')
    ? Content.removeChild(document.querySelector('.homeContainer'))
    : Content.removeChild(document.querySelector('.aboutContainer'));

  Content.appendChild(menuPage());
});

aboutBtn.addEventListener('click', () => {
  document.querySelector('.homeContainer')
    ? Content.removeChild(document.querySelector('.homeContainer'))
    : Content.removeChild(document.querySelector('.menuContainer'));
  Content.appendChild(aboutPage());
});
