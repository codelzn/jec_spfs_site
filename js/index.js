"use strict";
class Main {
  // burger menu
  initBurgerMenu (controls, item) {
    const burger = document.querySelector(controls);
    const burgerContent = document.querySelector(item);
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      burgerContent.classList.toggle('active');
    })
  }
}
const home = new Main();
home.initBurgerMenu('.burger', '.burger-content');

export default Main;