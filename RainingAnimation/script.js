function rain()
{
    let amount = 150;
    let body = document.querySelector('body');
    let i = 0;
    while( i < amount)
    {
        let drop = document.createElement('i');
        let size = Math.random() * 7;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let durantion = Math.random() * 5;
        drop.style.width = 0.2 * size + 'px';
        drop.style.left = posX  + 'px';
        drop.style.animationDelay = delay  + 's';
        drop.style.animationDuration = 1 + durantion  + 's';
        body.appendChild(drop);
        i++;
    }
}
rain();