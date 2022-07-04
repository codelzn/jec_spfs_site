// 文字の縦並ぶ
const toam = document.querySelector('.changeTime')
const letter = toam.textContent.split(' ')
const toamResult = []
letter.forEach(v => {
  toamResult.push(v, '<br>')
})
toam.innerHTML = toamResult.join('');