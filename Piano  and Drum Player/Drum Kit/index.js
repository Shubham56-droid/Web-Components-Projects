numberOfDrumBtn = document.querySelectorAll(".drum").length;

// For Drum-sound on clicking the buttons

for (var i = 0; i < numberOfDrumBtn; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        if (this.classList.contains("w")) {
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        }
        else if (this.classList.contains("a")) {
            var audio1 = new Audio("sounds/tom-2.mp3");
            audio1.play();
        }
        else if (this.classList.contains("s")) {
            var audio2 = new Audio("sounds/tom-3.mp3");
            audio2.play();
        }
        else if (this.classList.contains("d")) {
            var audio3 = new Audio("sounds/tom-4.mp3");
            audio3.play();
        }
        else if (this.classList.contains("j")) {
            var audio4 = new Audio("sounds/crash.mp3");
            audio4.play();
        }
        else if (this.classList.contains("k")) {
            var audio5 = new Audio("sounds/kick-bass.mp3");
            audio5.play();
        }
        else if (this.classList.contains("l")) {
            var audio6 = new Audio("sounds/snare.mp3");
            audio6.play();
        }


        buttonAnimation(this.innerHTML);

    });
}

// For Drum-sound on pressing the key using keyboard

document.addEventListener("keypress", function (event) {
    if (event.key == "w") {

    }
    if (event.key == "w") {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    else if (event.key == "a") {
        var audio1 = new Audio("sounds/tom-2.mp3");
        audio1.play();
    }
    else if (event.key == "s") {
        var audio2 = new Audio("sounds/tom-3.mp3");
        audio2.play();
    }
    else if (event.key == "d") {
        var audio3 = new Audio("sounds/tom-4.mp3");
        audio3.play();
    }
    else if (event.key == "j") {
        var audio4 = new Audio("sounds/crash.mp3");
        audio4.play();
    }
    else if (event.key == "k") {
        var audio5 = new Audio("sounds/kick-bass.mp3");
        audio5.play();
    }
    else if (event.key == "l") {
        var audio6 = new Audio("sounds/snare.mp3");
        audio6.play();
    }
    buttonAnimation(event.key);


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