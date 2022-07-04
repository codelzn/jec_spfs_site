'use strict'
// burger menu
const burger = document.querySelector('.burger')
const burgerContent = document.querySelector('.burger-content')
burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  burgerContent.classList.toggle('active')
})
const navlinks = document.querySelectorAll('.burger-content li')
navlinks.forEach((v, i) => {
  v.addEventListener('click', () => {
    burger.classList.toggle('active')
    burgerContent.classList.toggle('active')
  })
})
burgerContent.addEventListener('transitionend', () => {
  const ul = burgerContent.children[0]
  burgerContent.classList.value.indexOf('active') > -1 ? ul.classList.add('active') : ul.classList.remove('active')
})