function callAudio(Case){
    switch (Case) {
        case "a":
            var audio = new Audio("mp3 Notes/a3.mp3");
            audio.play();
            break;
        case "b":
            var audio = new Audio("mp3 Notes/a-3.mp3");
            audio.play();
            break;
        case "c":
            var audio = new Audio("mp3 Notes/a4.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("mp3 Notes/a-4.mp3");
            audio.play();
            break;
        case "e":
            var audio = new Audio("mp3 Notes/a5.mp3");
            audio.play();
            break;
        case "f":
            var audio = new Audio("mp3 Notes/a-5.mp3");
            audio.play();
            break;
        case "g":
            var audio = new Audio("mp3 Notes/b3.mp3");
            audio.play();
            break;
        case "h":
            var audio = new Audio("mp3 Notes/b4.mp3");
            audio.play();
            break;
        case "i":
            var audio = new Audio("mp3 Notes/b5.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("mp3 Notes/c3.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("mp3 Notes/c-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("mp3 Notes/c4.mp3");
            audio.play();
            break;
        case "m":
            var audio = new Audio("mp3 Notes/c-4.mp3");
            audio.play();
            break;
        case "n":
            var audio = new Audio("mp3 Notes/c5.mp3");
            audio.play();
            break;
        case "o":
            var audio = new Audio("mp3 Notes/c-5.mp3");
            audio.play();
            break;
        case "p":
            var audio = new Audio("mp3 Notes/c6.mp3");
            audio.play();
            break;
        case "q":
            var audio = new Audio("mp3 Notes/d3.mp3");
            audio.play();
            break;

        case "r":
            var audio = new Audio("mp3 Notes/d-3.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("mp3 Notes/d4.mp3");
            audio.play();
            break;
        case "t":
            var audio = new Audio("mp3 Notes/d-4.mp3");
            audio.play();
            break;
        case "u":
            var audio = new Audio("mp3 Notes/d5.mp3");
            audio.play();
            break;
        case "v":
            var audio = new Audio("mp3 Notes/d-5.mp3");
            audio.play();
            break;
        case "w":
            var audio = new Audio("mp3 Notes/e3.mp3");
            audio.play();
            break;
        case "x":
            var audio = new Audio("mp3 Notes/e4.mp3");
            audio.play();
            break;
        case "y":
            var audio = new Audio("mp3 Notes/e5.mp3");
            audio.play();
            break;
        case "z":
            var audio = new Audio("mp3 Notes/f3.mp3");
            audio.play();
            break;
        case "1":
            var audio = new Audio("mp3 Notes/f-3.mp3");
            audio.play();
            break;
        case "2":
            var audio = new Audio("mp3 Notes/f4.mp3");
            audio.play();
            break;
        case "3":
            var audio = new Audio("mp3 Notes/f-4.mp3");
            audio.play();
            break;
        case "4":
            var audio = new Audio("mp3 Notes/f5.mp3");
            audio.play();
            break;
        case "5":
            var audio = new Audio("mp3 Notes/f-5.mp3");
            audio.play();
            break;
        case "6":
            var audio = new Audio("mp3 Notes/g3.mp3");
            audio.play();
            break;
        case "7":
            var audio = new Audio("mp3 Notes/g-3.mp3");
            audio.play();
            break;
        case "8":
            var audio = new Audio("mp3 Notes/g4.mp3");
            audio.play();
            break;
        case "9":
            var audio = new Audio("mp3 Notes/g-4.mp3");
            audio.play();
            break;
        case "0":
            var audio = new Audio("mp3 Notes/g5.mp3");
            audio.play();
            break;


        default:
            break;
    }

    if(Case==1 || Case==2 || Case==3 ||Case==4 ||Case==5||Case==6||Case==7||Case==8||Case==9||Case==0  ){
        buttonAnimation2(event.key);
    }
    else {
        buttonAnimation(event.key);
    }
    
}



document.addEventListener("keypress", function (event) {
    var Case = event.key;
    callAudio(Case);
  
    
    
});

function buttonAnimation(keyValue) {
    //Getting the current active button by it's value
    var currentActiveButton = document.querySelector("." + keyValue);
    currentActiveButton.classList.add("pressed");

    //Setting time interval to remove the pressed class from the current active button after every 0.1s to 
    //genarate an animation
    setTimeout(function () {
        currentActiveButton.classList.remove("pressed");
    }
        , 100);
}

function buttonAnimation2(keyValue) {
    //Getting the current active button by it's value
    var currentActiveButton = document.querySelector("." +"a"+ keyValue);
    currentActiveButton.classList.add("pressed");

    //Setting time interval to remove the pressed class from the current active button after every 0.1s to 
    //genarate an animation
    setTimeout(function () {
        currentActiveButton.classList.remove("pressed");
    }
        , 100);
}

numberOfPianoBtn=$(".btn").length;

for(var i=0;i<numberOfPianoBtn;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function (){
        var content=$(this).text();
        callAudio(content);
    });

}