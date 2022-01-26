
/*---------------------------------------
 basic  UI Transtions for game 
----------------------------------------*/

let game = document.getElementById('game');
let intro = document.getElementById('intro');
let maingame = document.getElementById('main-game');
let exitGame = document.getElementById('exitgame');
let warning = document.getElementById('warning');
let btnno = document.getElementById('btnno');
let btnyes = document.getElementById('btnyes');
let aboutbtn = document.getElementById('aboutbtn')
let mainHeading = document.getElementById('mainHeading');
let aboutme = document.getElementById('aboutme');
let backbtn = document.getElementById('backbtn');


playbtn.addEventListener('click',function(){
    game.classList.remove('active');
    intro.classList.remove('active');
    maingame.classList.add('active');
})

exitGame.addEventListener('click',function(){
    maingame.classList.remove('active');
    warning.classList.add('active');
    game.classList.add('active');
})

btnno.addEventListener('click',function(){
    maingame.classList.add('active');
    warning.classList.remove('active');
})

btnyes.addEventListener('click',function(){
    intro.classList.add('active');
    warning.classList.remove('active');
})

aboutbtn.addEventListener('click',function(){
    mainHeading.classList.add('aboutActive');
    aboutme.classList.add('aboutaction');
})

backbtn.addEventListener('click',function(){
    aboutme.classList.remove('aboutaction');
    mainHeading.classList.remove('aboutActive');
    
})

/*----------------------------------
            Game Code is Here
---------------------------------- */
const games =()=> {
    let pScore = 0;
    let cScore = 0;
    let moves = 0;

    //Start the Game
    const startGame = () => {
        const match = document.querySelector('.match');
    };
    //Play Match
    const playMatch = () => {
        const rockbtn = document.getElementById('rock');
        const paperbtn = document.getElementById('paper');
        const scissorsbtn = document.getElementById('scissors');
        const playerOption = [rockbtn,paperbtn,scissorsbtn];

        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        //computer optons
        const computerOptions = ['rock','paper','scissors'];
        playerOption.forEach(option=>{

            option.addEventListener('click',function(){

                const moveleft = document.getElementById('movesleft');
                moves++;
                moveleft.innerText = `Moves Left: ${10 - moves}`;
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                // here we call the player  hands  
                compareHands(this.textContent,computerChoice);
                // Update Images
                playerHand.src = `./images/${this.textContent}.png`;
                computerHand.src = `./images/${computerChoice}.png`;

                if(moves == 10)
                {
                    gameOver();
                }
            });
        });
        
        
    };

    const upadateScore  = () => {
        const playerScore = document.getElementById('playerScore');
        const computerScore = document.getElementById('computerScore');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice,computerChoice) => {
        //Update Text
        const winner = document.getElementById('result');
        // checking for a tie
        if(playerChoice === computerChoice)
        {
            winner.textContent = "tie occured";
            return;
        }
        // Check for rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                pScore++;
                upadateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins';
                cScore++;
                upadateScore();
                return;
            }
        }

        //check for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                upadateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                upadateScore();
                return;
            }
        }

        //check for scissor
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins';
                cScore++;
                upadateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                upadateScore();
                return;
            }
        }

    };

    const gameOver = () => {
        const mostmainResult = document.getElementById('mainResult');
        const mainResult = document.getElementById('resultmain');
        const reloadbtn = document.getElementById('restart');
        const exitbutton = document.getElementById('exitBox');

        const btnpannel = document.getElementById('option');
        function displayResult()
        {
            btnpannel.classList.add('inactiveOption');
            mostmainResult.classList.add('mainResultActive');
            exitbutton.classList.add('inactiveExit');
        }
        displayResult();
        if(pScore > cScore){
            mainResult.innerText = 'You Have Won The Game';
            mainResult.style.fontSize = '2rem';
            mainResult.style.color = '#fff';
        }else if(pScore < cScore){
            mainResult.innerText = 'You Have Lost The Game';
            mainResult.style.fontSize = '2rem';
            mainResult.style.color = '#fff';
        }else{
            mainResult.innerText = 'The Match is Draw';
            mainResult.style.fontSize = '2rem';
            mainResult.style.color = '#fff';
        }
        reloadbtn.addEventListener('click',() => {
            window.location.reload();
        })

    };

    // Is call all the inner function
    startGame();
    playMatch();
};
//start the game function
games();
