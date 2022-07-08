'use strict'
gsap.registerPlugin(ScrollTrigger)
// scroll animation
const els = document.querySelectorAll('.color-section')
els.forEach(el => {
  const color = el.dataset.color
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
    },
  })
})
