
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const h2 = document.querySelector('#h2');

const pular = ()=>{
  mario.classList.add('pular');

  setTimeout(()=>{
    mario.classList.remove('pular');
  },500)
}

const loop = setInterval(()=>{

  const pipePostion = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')

  if(pipePostion <= 120 && pipePostion > 0 && marioPosition < 80){
    pipe.style.animation='none'
    pipe.style.left=` ${pipePostion}px`

    mario.style.animation='none'
    mario.style.bottom=` ${marioPosition}px`

    mario.src= 'game-over.png'
    mario.style.width = '80px'
    mario.style.marginLeft = '50px'
    h2.style.display="block"

    clearInterval(loop);
  } 
},10)

document.addEventListener('keydown', pular);

