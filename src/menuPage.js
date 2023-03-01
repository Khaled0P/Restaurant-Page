import './style.css';

export default function homePage() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menuContainer');
  const menu = document.createElement('div');
  menu.classList.add('menu');
  const menuItems = [];
  for (let i = 0; i < 4; i++) {
    const item = document.createElement('div');
    item.classList.add('menuItem');
    menuItems.push(item);
  }

  menuItems[0].innerHTML = `<div
              class="thumb"
              style="background-image: url(../attachments/pizza.jpg)"
            ></div>
            <h1>Try our piza</h1>`;
  menuItems[1].innerHTML = `<div class="menuItem">
            <div
              class="thumb"
              style="background-image: url(../attachments/chicken.jpg)"
            ></div>
            <h1>The Best Grilled Chicken</h1>`;
  menuItems[2].innerHTML = ` <div
              class="thumb"
              style="background-image: url(../attachments/pasta.jpg)"
            ></div>
            <h1>Perfect Weeknight Pasta Dinners</h1>`;
  menuItems[3].innerHTML = ` <div
              class="thumb"
              style="background-image: url(../attachments/salad.jpg)"
            ></div>
            <h1>or go vegeterian and try our salad!</h1>`;

  menuItems.forEach((item) => {
    menu.appendChild(item);
  });
  console.log(menu);
  menuContainer.appendChild(menu);
  return menuContainer;
}
