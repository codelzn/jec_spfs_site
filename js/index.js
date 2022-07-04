'use strict'
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