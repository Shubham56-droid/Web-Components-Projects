
/*--------------------------------------------
    play button effect using javascript      
--------------------------------------------*/
const playbtn = document.getElementById('playbtn');
playbtn.addEventListener('click',function(e){
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left  = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

    setTimeout(()=>{
        ripples.remove()
    },1000);
})


/*---------------------------------------
 basic  flow of of UI for game 
----------------------------------------*/

let game = document.getElementById('game');
let intro = document.getElementById('intro');
let maingame = document.getElementById('main-game');
let exitGame = document.getElementById('exitgame');
let warning = document.getElementById('warning');
let btnno = document.getElementById('btnno');
let btnyes = document.getElementById('btnyes');


playbtn.addEventListener('click',function(){
    game.classList.remove('active');
    intro.classList.remove('active');
    maingame.classList.add('active');
})

exitGame.addEventListener('click',function(){
    maingame.classList.remove('active');
    warning.classList.add('active');
})

btnno.addEventListener('click',function(){
    maingame.classList.add('active');
    warning.classList.remove('active');
})

btnyes.addEventListener('click',function(){
    intro.classList.add('active');
    game.classList.add('active');
    warning.classList.remove('active');
})