import './style.css';
import homePic from '../attachments/home-pic.jpg';

export default function homePage() {
  const homeContainer = document.createElement('div');
  const homeImg = new Image();
  homeImg.src = homePic;

  homeContainer.innerHTML = `<h1>The best restaurant in the city</h1>
        <h1> Hurry up and try our food</h1>
        <div class="homeImg"></div>
        <h1>Order online or visit us!</h1>`;
  homeContainer.classList.add('homeContainer');
  document.getElementById('Content').appendChild(homeContainer);
  document.querySelector('.homeImg').appendChild(homeImg);
}
