const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let  hue  = 0;

let particalesArray;

// get mouse position
let mouse = {
    x: null,
    y:null,
    radius: (canvas.height/80) * (canvas.width/80),
}

window.addEventListener('mousemove',
        function(event){
            mouse.x = event.x;
            mouse.y = event.y;
        }
)

// create particle
class Particle {
    constructor(x,y,directionX,directionY,size,color)
    {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size * 2;
        this.color = 'hsl('+ hue +',100%,50%)';
    }

    //method to draw indiviual particle
    draw()
    {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,Math.PI * 2,false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update()
    {
        // check if particle is still in canvas
        if(this.x > canvas.width || this.x < 0)
        {
            this.directionX = -this.directionX;
        }

        if(this.y > canvas.width || this.y < 0)
        {
            this.directionY = -this.directionY;
        }

        //check collision detecton
        let  dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        if(distance < mouse.radius + this.size)
        {
            if(mouse.x < this.x && this.x < canvas.width - this.size * 10)
            {
                this.x += 10;
            }
            if(mouse.x > this.x && this.x > this.size * 10)
            {
                this.x -= 10;
            }
            if(mouse.y < this.y && this.y < canvas.height - this.size * 10)
            {
                this.y += 10;
            }
            if(mouse.y > this.y && this.y > this.size * 10)
            {
                this.y -= 10;
            }
            
        }
        // move particle
        this.x += this.directionX;
        this.y += this.directionY;
        //draw particle
        this.draw();
    }
}

//create particle array
function init()
{
    particalesArray = [];
    let numberOfParticle = (canvas.height * canvas.width)/9000;
    for(let i=0; i<numberOfParticle * 0.7 ;i++)
    {
        let size = (Math.random() * 5) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 5) - 2.5;
        let directionY = (Math.random() * 5) - 2.5;
        let color = 'hsl('+ hue +',100%,50%)';
        hue+=6;
        particalesArray.push(new Particle(x,y,directionX,directionY,size,color));

    }
}



//check if particle are close enough to draw line
function connect()
{
    let opacityValue = 1;
    for(let a = 0; a<particalesArray.length; a++)
    {
        for(let b=a; b<particalesArray.length; b++)
        {
            let distance = ((particalesArray[a].x - particalesArray[b].x)
            *(particalesArray[a].x - particalesArray[b].x)) 
            + ((particalesArray[a].y - particalesArray[b].y)
            *(particalesArray[a].y - particalesArray[b].y)) ;
            if(distance < (canvas.width/7) * (canvas.height/7)){
                opacityValue = 1 - (distance/20000);
                ctx.strokeStyle = particalesArray[a].color;
                ctx.lineWidth = 0.3;
                ctx.beginPath();
                ctx.moveTo(particalesArray[a].x, particalesArray[a].y);
                ctx.lineTo(particalesArray[b].x, particalesArray[b].y);
                ctx.stroke();
            }
        }
    }
}



// animation Loop
function animate()
{
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);
    for(let i=0; i<particalesArray.length; i++)
    {
        particalesArray[i].update();
    }
    connect();
}


// resize event
window.addEventListener('resize',
function(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    mouse.radius = ((canvas.height/80) * (canvas.height/80));
    init();
}
);

window.addEventListener('mouseout',
function(){
    mouse.x = undefined;
    mouse.y = undefined;
});

init();
animate();