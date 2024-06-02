let hsp = document.querySelector('#hsp');
let topla = document.querySelector('.red');
let res = document.querySelector('.blue')
let btns = document.querySelectorAll('.govde-tus-cek button');

function handleCalcClick() {
  let secim = this.innerText
  hsp.innerHTML +=  secim 

}
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', handleCalcClick);
}

function handleSonucClick() {
  hsp.innerText = eval(hsp.innerText);
}

topla.addEventListener('click' , handleSonucClick);

function handleResClick() {
  hsp.innerText = '';
}

res.addEventListener('click', handleResClick)
