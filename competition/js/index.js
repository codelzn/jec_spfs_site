'use strict'
const dialogs = document.querySelectorAll('.dialog')
const mainSpLi = document.querySelectorAll('.mainSp ul li')
const attrSpLi = document.querySelectorAll('.attractions ul li')
const eventLi = [...mainSpLi, ...attrSpLi]
eventLi.forEach((v, i) => {
  v.addEventListener('click', e => {
    e.stopPropagation()
    dialogs.forEach(e => e.style.display = 'none')
    const dialog = v.children[v.children.length - 1]
    dialog.style.display = 'block'
  })
})
dialogs.forEach((v, i) => {
  v.addEventListener('click', e => {
    e.stopPropagation()
    e.target === v && (v.style.display = 'none')
  })
})