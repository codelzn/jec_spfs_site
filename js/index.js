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
gsap.registerPlugin(ScrollTrigger)
// scroll animation
const els = document.querySelectorAll('.color-section')
els.forEach(el => {
  let color = el.dataset.color
  gsap.set('body', {
    backgroundColor: '#fff'
  })
  gsap.to('body', {
    backgroundColor: color,
    scrollTrigger: {
      trigger: el,
      start: 'top center',
      end: 'bottom bottom',
      toggleActions: 'play none restart none',
      // markers: true,
      // onEnter: ({ progress, direction, isActive }) => console.log('onEnter', progress, direction, isActive),
      // onEnterBack: ({ progress, direction, isActive }) => console.log('onEnterBack', progress, direction, isActive),
      // onLeave: ({ progress, direction, isActive }) => console.log('onLeave', progress, direction, isActive),
      // onLeaveBack: ({progress, direction, isActive}) => console.log('onLeaveBack', progress, direction, isActive)
    },
  })
})