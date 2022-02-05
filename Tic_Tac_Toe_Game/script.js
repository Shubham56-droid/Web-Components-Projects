//to let 2 players enter their initials and store them in a variable
var player1 = prompt("Enter initails of player 1");
var player2 = prompt("Enter initails of player 2");
var player = player1;
// this would keep a record until one player losses this game
var isGameOver = false;

// function to relaod after the game is over
function reloadGame() {
  window.location.reload();
}

if (player1 == null || player2 == null || player1 == "" || player2 == "") {
  alert("Initials Cannot Be Empty Please Fill Again.");
  reloadGame();
} else {
  if (isGameOver == false) {
    //to let players know about their turn
    alert(player + "'s turn");
  }
}

//these are the functions which will be evoked whenever a button is pressed
function btn1() {
  if (document.getElementById("1").value == "" && isGameOver == false) {
    document.getElementById("1").value = player;
    if (check(player) == true) {
      alert(player + " has WON");
      alert("Game Over Restart The Game");
      isGameOver = true;
      reloadGame();
    } else {
      player = player == player1 ? player2 : player1;
      alert(player + "'s turn");
    }
  } else if (
    document.getElementById("1").value != "" &&
    isGameOver == false &&
    checkDraw(player) == false
  ) {
    alert("you cannot click on already selected box");
  } else {
    if (checkDraw() == true) {
      alert("Draw Match Game Over Restart The Game");
      reloadGame();
    }
  }
}

function btn2() {
  if (document.getElementById("2").value == "" && isGameOver == false) {
    document.getElementById("2").value = player;
    if (check(player) == true) {
      alert(player + " has WON");
      alert("Game Over Restart The Game");
      isGameOver = true;
      reloadGame();
    } else {
      player = player == player1 ? player2 : player1;
      alert(player + "'s turn");
    }
  } else if (
    document.getElementById("2").value != "" &&
    isGameOver == false &&
    checkDraw(player) == false
  ) {
    alert("you cannot click on already selected box");
  } else {
    if (checkDraw() == true) {
      alert("Draw Match Game Over Restart The Game");
      reloadGame();
    }
  }
}

function btn3() {
  if (document.getElementById("3").value == "" && isGameOver == false) {
    document.getElementById("3").value = player;

    if (check(player) == true) {
      alert(player + " has WON");
      alert("Game Over Restart The Game");
      isGameOver = true;
      reloadGame();
    } else {
      player = player == player1 ? player2 : player1;
      alert(player + "'s turn");
    }
  } else if (
    document.getElementById("3").value != "" &&
    isGameOver == false &&
    checkDraw(player) == false
  ) {
    alert("you cannot click on already selected box");
  } else {
    if (checkDraw() == true) {
      alert("Draw Match Game Over Restart The Game");
      reloadGame();
    }
  }
}

function btn4() {
  if (document.getElementById("4").value == "" && isGameOver == false) {
    document.getElementById("4").value = player;

    if (check(player) == true) {
      alert(player + " has WON");
      alert("Game Over Restart The Game");
      isGameOver = true;
      reloadGame();
    } else {
      player = player == player1 ? player2 : player1;
      alert(player + "'s turn");
    }
  } else if (
    document.getElementById("4").value != "" &&
    isGameOver == false &&
    checkDraw(player) == false
  ) {
    alert("you cannot click on already selected box");
  } else {
    if (checkDraw() == true) {
      alert("Draw Match Game Over Restart The Game");
      reloadGame();
    }
  }
}

function btn5() {
  if (document.getElementById("5").value == "" && isGameOver == false) {
    document.getElementById("5").value = player;

    if (check(player) == true) {
      alert(player + " has WON");
      alert("Game Over Restart The Game");
      isGameOver = true;
      reloadGame();
    } else {
      player = player == player1 ? player2 : player1;
      alert(player + "'s turn");
    }
  } else if (
    document.getElementById("5").value != "" &&
    isGameOver == false &&
    checkDraw(player) == false
  ) {
    alert("you cannot click on already selected box");
  } else {
    if (checkDraw() == true) {
      alert("Draw Match Game Over Restart The Game");
      reloadGame();
    }
  }
}

function btn6() {
  if (document.getElementById("6").value == "" && isGameOver == false) {
    document.getElementById("6").value = player;
    if (check(player) == true) {
      alert(player + " has WON");
      alert("Game Over Restart The Game");
      isGameOver = true;
      reloadGame();
    } else {
      player = player == player1 ? player2 : player1;
      alert(player + "'s turn");
    }
  } else if (
    document.getElementById("6").value != "" &&
    isGameOver == false &&
    checkDraw(player) == false
  ) {
    alert("you cannot click on already selected box");
  } else {
    if (checkDraw() == true) {
      alert("Draw Match Game Over Restart The Game");
      reloadGame();
    }
  }
}

function btn7() {
  if (document.getElementById("7").value == "" && isGameOver == false) {
    document.getElementById("7").value = player;

    if (check(player) == true) {
      alert(player + " has WON");
      alert("Game Over Restart The Game");
      isGameOver = true;
      reloadGame();
    } else {
      player = player == player1 ? player2 : player1;
      alert(player + "'s turn");
    }
  } else if (
    document.getElementById("7").value != "" &&
    isGameOver == false &&
    checkDraw(player) == false
  ) {
    alert("you cannot click on already selected box");
  } else {
    if (checkDraw() == true) {
      alert("Draw Match Game Over Restart The Game");
      reloadGame();
    }
  }
}

function btn8() {
  if (document.getElementById("8").value == "" && isGameOver == false) {
    document.getElementById("8").value = player;
    if (check(player) == true) {
      alert(player + " has WON");
      alert("Game Over Restart The Game");
      isGameOver = true;
      reloadGame();
    } else {
      player = player == player1 ? player2 : player1;
      alert(player + "'s turn");
    }
  } else if (
    document.getElementById("8").value != "" &&
    isGameOver == false &&
    checkDraw(player) == false
  ) {
    alert("you cannot click on already selected box");
  } else {
    if (checkDraw() == true) {
      alert("Draw Match Game Over Restart The Game");
      reloadGame();
    }
  }
}

function btn9() {
  if (document.getElementById("9").value == "" && isGameOver == false) {
    document.getElementById("9").value = player;
    if (check(player) == true) {
      alert(player + " has WON");
      alert("Game Over Restart The Game");
      isGameOver = true;
      reloadGame();
    } else {
      player = player == player1 ? player2 : player1;
      alert(player + "'s turn");
    }
  } else if (
    document.getElementById("9").value != "" &&
    isGameOver == false &&
    checkDraw(player) == false
  ) {
    alert("you cannot click on already selected box");
  } else {
    if (checkDraw() == true) {
      alert("Draw Match Game Over Restart The Game");
      reloadGame();
    }
  }
}

//this function will check who's initails are alligned up in a line
function check() {
  var box1 = document.getElementById("1").value;
  var box2 = document.getElementById("2").value;
  var box3 = document.getElementById("3").value;
  var box4 = document.getElementById("4").value;
  var box5 = document.getElementById("5").value;
  var box6 = document.getElementById("6").value;
  var box7 = document.getElementById("7").value;
  var box8 = document.getElementById("8").value;
  var box9 = document.getElementById("9").value;

  if (box7 == box8 && box7 == box9 && box7 != "") {
    return true;
  }

  if (box1 == box2 && box1 == box3 && box1 != "") {
    return true;
  }

  if (box4 == box5 && box4 == box6 && box4 != "") {
    return true;
  }

  if (box1 == box4 && box1 == box7 && box1 != "") {
    return true;
  }

  if (box2 == box5 && box2 == box8 && box2 != "") {
    return true;
  }

  if (box3 == box6 && box3 == box9 && box3 != "") {
    return true;
  }

  if (box1 == box5 && box1 == box9 && box1 != "") {
    return true;
  }

  if (box3 == box5 && box3 == box7 && box3 != "") {
    return true;
  }

  return false;
}

function checkDraw() {
  var box1 = document.getElementById("1").value;
  var box2 = document.getElementById("2").value;
  var box3 = document.getElementById("3").value;
  var box4 = document.getElementById("4").value;
  var box5 = document.getElementById("5").value;
  var box6 = document.getElementById("6").value;
  var box7 = document.getElementById("7").value;
  var box8 = document.getElementById("8").value;
  var box9 = document.getElementById("9").value;

  if (
    box1 != "" &&
    box2 != "" &&
    box3 != "" &&
    box4 != "" &&
    box5 != "" &&
    box6 != "" &&
    box7 != "" &&
    box8 != "" &&
    box9 != ""
  ) {
    return true;
  }
  return false;
}
