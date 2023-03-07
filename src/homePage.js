import './style.css';
import homePic from '../attachments/home-pic.jpg';

export default function homePage() {
  const homeContainer = document.createElement('div');

  homeContainer.innerHTML = `<h1>The best restaurant in the city</h1>
        <h1> Hurry up and try our food</h1>
        <div class="homeImg"><img src = "${homePic}"></div>
        <h1>Order online or visit us!</h1>`;
  homeContainer.classList.add('homeContainer');
  return homeContainer;
}
