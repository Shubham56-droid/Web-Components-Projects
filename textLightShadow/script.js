let box4text = document.getElementById("box4text");
let box4light = document.getElementById("box4light");

document.addEventListener('mouseover',function(e){

    let mouseX = e.clientX;
    let mouseY = e.clientY;

    box4light.style.left = mouseX + 'px';
    box4light.style.top = mouseY + 'px';

    let box4distanceX = mouseX - box4text.offsetLeft - box4text.offsetWidth / 2;

    let box4distanceY = mouseY - box4text.offsetTop - box4text.offsetHeight / 2;

    let newShadow = '';

    for (let j=0; j<200; j++) 
    {
        let shadowX = -box4distanceX * (j/200);
        let shadowY = -box4distanceY * (j/200);
        let box4opacity = 1 - (j / 100);
        newShadow += (newShadow ? ',' : '') + shadowX + 'px ' + shadowY + 'px 0 rgba(33,33,33,'+ box4opacity+')';
    }
    box4text.style.textShadow = newShadow;
})

