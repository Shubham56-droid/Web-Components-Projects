// document.querySelector("button").addEventListener("click", handleClick);
// // adding () at end will call the funtion immediately after refresh,so only name is passed

// function handleClick(){
//     alert("Got clicked")
// }

//anonymous function-common way of writing--> a function without name
//can store a function in variable and call using variable name
//to play audio in javascript
var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });

}
//addEventListener--> (listen to type of event, response to event)
//added for entire document
document.addEventListener("keydown", function(event){
   makeSound(event.key); 
   buttonAnimation(event.key);
});

function makeSound(keys){
    switch (keys) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:console.log(buttonInnerHTML);
            
    }

}


// var audio = new Audio("sounds/tom-1.mp3");-->creates a new Audio object
// audio.play();

function buttonAnimation(currentKey){
  var activeButton =   document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
      activeButton.classList.remove("pressed");
  },100);
}