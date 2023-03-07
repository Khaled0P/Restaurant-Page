import './style.css';
import backGroundPic from '../attachments/background-img.jpg';

export default function backGround() {
  const backGround = document.createElement('div');
  backGround.classList.add('background');
  backGround.style.backgroundImage = `url(${backGroundPic})`;

  return backGround;
}
