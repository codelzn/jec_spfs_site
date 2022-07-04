// 文字の縦並ぶ
const toam = document.querySelector('.changeTime p');
const letter = toam.textContent.split(' ');
const toamResult = [];
letter.forEach(v => {
  toamResult.push(v, '<br>');
});
toam.innerHTML = toamResult.join('');

// content change
const changeTime = document.querySelector('.changeTime');
const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content2');
changeTime.addEventListener('click', e => {
  e.stopPropagation();
  console.log('clicked');
  document.body.classList.toggle('pm');
  changeTime.classList.toggle('active');
  changeTime.children[0].classList.toggle('pm');
  content1.classList.toggle('active');
  content2.classList.toggle('active');
});
