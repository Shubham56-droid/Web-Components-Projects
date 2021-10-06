// GAME Constants and variable
let inputDirection = { x: 0, y: 0 }; //origin
const foodsound = new Audio("food.wav");
const gameoversound = new Audio("gameover.wav");
const music = document.getElementById("music");
const click = new Audio("click.wav");
let speed = 5;
let score = 0;
let lastPaintTime = 0;
music.play;
let snakeArr = [
//   { x: 13, y: 15 },
{
    x: Math.round(2 + (16 - 2) * Math.random()),
    y: Math.round(2 + (16 - 2) * Math.random()),
  }
  // y is row and x is column
];

// food = { x: 6, y: 7 };
food = {
    x: Math.round(2 + (16 - 2) * Math.random()),
    y: Math.round(2 + (16 - 2) * Math.random()),
  };


// Game functions
function main(ctime) {
  window.requestAnimationFrame(main); //something like recursion
  //   console.log(ctime);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
}

function isCollide(snake) {
  // if you bumb into yourself
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      return true;
    }
  }

  if (
    snake[0].x >= 18 ||
    snake[0].x <= 0 ||
    snake[0].y >= 18 ||
    snake[0].y <= 0
  ) {
    return true;
  }

  return false;
}

function gameEngine() {
  //    Part1 :updating the snake body parts and food
  if (isCollide(snakeArr)) {
    gameoversound.play();
    music.pause();
    inputDirection = { x: 0, y: 0 };
    alert("GAME OVER !🥺, press any key to play again");
    snakeArr = [{ x: 13, y: 15 }];
    music.play();
    score = 0;
  }

  //  if you have eaten food, increment the score and regenerate the food
  if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
    foodsound.play();
    score+=1;
    if (score>Highscoreval) {
        Highscoreval=score;
        localStorage.setItem("Highscore",JSON.stringify(Highscoreval))
        HighscoreBox.innerHTML="HighScore : " + Highscoreval;
    }
    scoreBox.innerHTML="Score : "+score;
    snakeArr.unshift({
      x: snakeArr[0].x + inputDirection.x,
      y: snakeArr[0].y + inputDirection.y,
    });
    let a = 2;
    let b = 16; //our grid dimension which is 0-18 but to be lineant give a range less than a edge value
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }

  // Moving the snake
  for (let i = snakeArr.length - 2; i >= 0; i--) {
    snakeArr[i + 1] = { ...snakeArr[i] }; //
  }

  snakeArr[0].x += inputDirection.x;
  snakeArr[0].y += inputDirection.y;

  // part2: render/display the snake and food
  // Displaying the snake
  background.innerHTML = ""; //intially empty the div

  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;

    if (index === 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snake");
    }
    background.appendChild(snakeElement);
  });

  // Displaying the Food
  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  background.appendChild(foodElement);
}








// checkout this somewhat used for looping in animation
// MAIN Function
music.loop = true;
music.load();

let Highscore = localStorage.getItem("Highscore");
if (Highscore === null) {
  Highscoreval = 0;
  localStorage.setItem("Highscore", JSON.stringify(Highscoreval));
} else {
  Highscoreval = JSON.parse(Highscore);
  HighscoreBox.innerHTML = "HighScore: " + Highscore;
}

window.requestAnimationFrame(main);
music.autoplay="true";
window.addEventListener("keydown", (e) => {
  inputDirection = { x: 0, y: 1 }; //start the game
  click.play();
  switch (e.key) {
    case "ArrowUp":
      console.log("ArrowUp");
      inputDirection.x = 0;
      inputDirection.y = -1;
      break;

    case "ArrowDown":
      console.log("ArrowDown");
      inputDirection.x = 0;
      inputDirection.y = 1;
      break;

    case "ArrowLeft":
      console.log("ArrowLeft");
      inputDirection.x = -1;
      inputDirection.y = 0;
      break;

    case "ArrowRight":
      console.log("ArrowRight");
      inputDirection.x = 1;
      inputDirection.y = 0;
      break;

    default:
      break;
  }
});
