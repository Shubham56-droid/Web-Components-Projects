let colorInput = document.querySelector("#color");
let textInput = document.querySelector("#text");
let tt = document.querySelector("#textcode");
let cc = document.querySelector("#colorcode")
colorInput.addEventListener('input', () => {
    let color = colorInput.value;
    cc.value = color;
    document.body.style.backgroundColor = color;
});
textInput.addEventListener('input', () =>
{
    let folor = textInput.value;
    tt.value = folor;
    document.querySelector("#one").style.color = folor;
    document.querySelector("#two").style.color = folor;
    document.querySelector("#message").style.color = folor;
});

function click1()
 {
     document.getElementById("textcode").select();
     document.execCommand("Copy");
 }
 function click2(){
    document.getElementById("colorcode").select();
    document.execCommand("Copy");
 }
