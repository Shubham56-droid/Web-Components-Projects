'use strict'

const a=()=>{

    fetch('https://catfact.ninja/fact').then((obj)=>{

    return obj.json();
    }).then((mess)=>{

        document.getElementById('text').innerHTML=mess.fact;
    })
}

document.getElementById('bt1').addEventListener('click',a);