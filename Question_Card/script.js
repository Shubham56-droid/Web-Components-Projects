/*
    demo is the class for question display in html in 'h2'
    through DOM manupulation in javascript
*/
const demo = document.querySelector('.demo');
/*
    cnfbtn is the id for confirm button  in html in 'button'
    through DOM manupulation in javascript
*/
const cnfbtn = document.getElementById('cnfbtn');
/*
    Declaring the "permission" varible for 
    confirm button and "num" varible to store 
    the user's input of option inside "userAnswers" array.
*/
let  permission;
let counter = 1;
let num;

/* 
    question array to store question
*/
const question  = [];
question[1] = 'Which type of JavaScript language is ?';
question[2] = 'Which one of the following also known as Conditional Expression ?';
question[3] = 'When interpreter encounters an empty statements, what it will do ?';
question[4] = 'The "function" and " var" are known as ?';

/*
    "optionAns{number}" array to store option
    of that question and display them using
    DOM manupulation
*/
const optionsAns1 = [];
optionsAns1[1] = 'Object-Oriented';
optionsAns1[2] = 'Object Based';
optionsAns1[3] = 'Assembly-language';
optionsAns1[4] = 'High-level';

const optionsAns2 = [];
optionsAns2[1] = 'Alternative to if-else';
optionsAns2[2] = 'Switch statement';
optionsAns2[3] = 'If-then-else statement';
optionsAns2[4] = 'immediate if';

const optionsAns3 = [];
optionsAns3[1] = 'Shows a warning';
optionsAns3[2] = 'Prompts to complete the statement';
optionsAns3[3] = 'Throws an error';
optionsAns3[4] = 'Ignores the statements';

const optionsAns4 = [];
optionsAns4[1] = 'Keywords';
optionsAns4[2] = 'Data types';
optionsAns4[3] = 'Declaration statements';
optionsAns4[4] = 'Prototypes';

/*
    Creating an array to store help 
    message for each questions
    for every question 
*/
const helpForQuestion = [];
helpForQuestion[1] = 'JavaScript is not a pure OOP (object oriented programming) based languages such as PHP, java or many other languages';
helpForQuestion[2] = 'A conditional expression can only evaluate two things, which either true or false, that are purely based on the evaluation of the condition';
helpForQuestion[3] = 'In JavaScript, when the interpreter encounters a empty statements it normally ignores or not response to that empty statement.';
helpForQuestion[4] = 'The "function" and "var" both are the Declaration statements. These both are used for defining, and declaring variable, function in anywhere in the program';


/*
    Array to store all the correct answer's
    option number of the question
*/
const allCorrectAns = [2,4,4,3];
/*
    Empty array  "userAnswers" to store all
    the answer taken from user for all 
    questions.
*/
const userAnswers = [];
const rightanswer = [];
const wronganswer = [];
/* 
    displaying first question in the starting
*/
displayQuestion();


/*
    Function to display question and 
    their option using DOM manupulation
 */
function displayQuestion()
{
    
    /*
        Rechecking weather some question are not 
        confirmed or comfirm button is not pressed 
        for that particular button 
    */
    recheck();

    /* 
        Updation of the question from question 
        array with the use of the counter varible
    */
    if(counter < question.length)
    {
        demo.innerHTML = question[counter];
        resetOptionActivity();
        
    } 

    /*
        Event Listner on click button to take permission to
        lock that option and once clicked on confirm then option
        cannot be changed.
    */
    
    cnfbtn.addEventListener('click',function(){
        console.log('confirm btn clicked');
        if(num != 0){
            permission = true;
            cnfbtn.classList.add('active');
        }
        
    });

    /*
        Options click effects changing
     */
    activationOption();

    /* 
        Displaying option according to question
        number through DOM manupulation using
        "optionsAns{number}" array from the above
    */

    /*
        Since counter defines the index of question
        number i have used counter to check wether 
        question 1 is displayed and added a condtion
        that it must be less that length of the whole
        question array
    */
    if(counter === 1 && counter < question.length)
    {

        for (let i = 1; i < optionsAns1.length; i++)
        {
            let options = document.querySelector('.options'+`${i}`);
            options.innerHTML = optionsAns1[i];
        }

        for (let i = 1; i < optionsAns1.length; i++){
            let options = document.getElementById('option'+`${i}`);
            options.addEventListener('click',function(){
                num = i;
                console.log('the option clicked is ' + num);
                if(num != 0 && permission != true)
                {
                    let index = (counter - 2);
                    userAnswers[index] = num;
                }
                 
            });
        }

        
        
    } /* checking for question 2 and displaying it options */
    else if(counter === 2 && counter < question.length)
    {
       
        for (let i = 1; i < optionsAns2.length; i++)
        {
            let options = document.querySelector('.options'+`${i}`);
            options.innerHTML = optionsAns2[i];
        }

        for (let i = 1; i < optionsAns2.length; i++){
            let options = document.getElementById('option'+`${i}`);
            options.addEventListener('click',function(){
                num = i;
                console.log('the option clicked is ' + num);
                if(num != 0 && permission != true)
                {
                    let index = (counter - 2);
                    userAnswers[index] = num;
                }
                 
            })
        }
        
    }/* checking for question 3 and displaying it options */
    else if(counter === 3 && counter < question.length){

        for (let i = 1; i < optionsAns3.length; i++)
        {
            let options = document.querySelector('.options'+`${i}`);
            options.innerHTML = optionsAns3[i];
        }
        for (let i = 1; i < optionsAns3.length; i++){
            let options = document.getElementById('option'+`${i}`);
            options.addEventListener('click',function(){
                num = i;
                console.log('the option clicked is ' + num);
                if(num != 0 && permission != true)
                {
                    let index = (counter - 2);
                    userAnswers[index] = num;
                }
                 
            })
        }

    }/* checking for question 4 and displaying it options */
    else if(counter === 4 && counter < question.length){

        for (let i = 1; i < optionsAns4.length; i++)
        {
            let options = document.querySelector('.options'+`${i}`);
            options.innerHTML = optionsAns4[i];
        }
        for (let i = 1; i < optionsAns4.length; i++){
            let options = document.getElementById('option'+`${i}`);
            options.addEventListener('click',function(){
                num = i;
                console.log('the option clicked is ' + num);
                if(num != 0 && permission != true)
                {
                    let index = (counter - 2);
                    userAnswers[index] = num;
                }
                 
            });
            
        }
    }
    
    
    
    
    /*
    Adding condition for further updation of the
    counter once it till reached last question.
    */
    if(counter < question.length)
    {
        /* default intilization with 0 in userAnswers array if user has
           not clicked on any options and move forward for next question
           that index will be allocated with 0 .
        */
        console.log('check zone');
          
        if((num === 0 && permission == false || num !== 0 && permission == false))
        {
            num = 0;
            let index = (counter - 1);
            userAnswers[index] = num; 
        }

        /*
            Updating the help message according to
            the question and for every tab
        */
        helpdisplay(counter);
        /*
          Updating the counter  
        */
        counter++;
        console.log('counter is updated');  
    }
    else
    { 
        if(counter <= userAnswers.length)
        {
            counter = counter + 1;
        }
        const nextbtn = document.getElementById('nextbtn');
        nextbtn.innerHTML = 'Submit';
        let  skipQue = checkForSkipQuestions();
        console.log('you have skipped ' + skipQue + 'question');
        permission = true;
        if( skipQue == 0 )
        {
            ToCheckCorrectAnswer();
        }
        else 
        {
            skipBoxDisplayed(skipQue);
        }
    } 
}


/*
    I created this recheck function to check
    weather the user has clicked on confirm 
    button or not after selecting the option
    if yes then option index will be added
    to "userAnswers" array otherwise '0' will
    be added to array means none of theoptions
    were selected.
*/
function recheck()
{
    if((num === 0 && permission == false || num !== 0 && permission == false))
    {
        num = 0;
        let index = (counter - 2);
        userAnswers[index] = num; 
    }
}

/*
    This function is used to toggle the 
    selection bar on the option for all options.
 */
function activationOption()
{   if( permission != true)
    {
        let option1 = document.getElementById('option1');
    let option2 = document.getElementById('option2');
    let option3 = document.getElementById('option3');
    let option4 = document.getElementById('option4');

        option1.addEventListener('click',function(){
            option1.classList.add('active');
            option2.classList.remove('active');
            option3.classList.remove('active');
            option4.classList.remove('active');
        })
        option2.addEventListener('click',function(){
            option1.classList.remove('active');
            option2.classList.add('active');
            option3.classList.remove('active');
            option4.classList.remove('active');
        })
        option3.addEventListener('click',function(){
            option1.classList.remove('active');
            option2.classList.remove('active');
            option3.classList.add('active');
            option4.classList.remove('active');
        })
        option4.addEventListener('click',function(){
            option1.classList.remove('active');
            option2.classList.remove('active');
            option3.classList.remove('active');
            option4.classList.add('active');
        })
    }
    else
    {
        return;
    }
}





/* 
    Resetting all activies for next question
    like confirm button permission is reset
    to false and num that stores the index
    of option is also reset to 0 and option
    bar were also reset.
*/
function resetOptionActivity()
{
    for (let i = 1; i <= 4; i++){
        let options = document.getElementById('option'+`${i}`);
        options.classList.remove('active');
    }
    permission = false;
    num = 0;
    helpMe.classList.add('active');
    cnfbtn.classList.remove('active');
    helpbtn.style.backgroundColor = '#000';
}

/*

*/
function helpdisplay(count)
{
    const helpbtn = document.getElementById('helpbtn');
    const helpMe = document.getElementById('helpMe');
    const helptext = document.getElementById('helptext');
    const closemark = document.getElementById('closemark');

    helpbtn.addEventListener('click',function(){
    console.log(userAnswers);
    helpMe.classList.remove('active');
    helptext.innerText = helpForQuestion[count];
    helpbtn.style.backgroundColor = 'rgb(111, 0, 255)';
    });

    closemark.addEventListener('click',function(){
        helpMe.classList.add('active');
        helpbtn.style.backgroundColor = '#000';
    })
}


/*
Restart function for restrarting quiz from beginning
*/
function restart()
{
    window.location.reload();
}


/*
    function to check the question which
     are skipped by user and return it.
 */
function checkForSkipQuestions()
{
    let SkipCount = 0;
    for (let i = 0; i < userAnswers.length; i++) {
        if( userAnswers[i] == 0)
        {
            SkipCount = SkipCount + 1;
        }
    }
    return SkipCount;
}

/*
    If no question is skipped and we 
    need to check for wheather all
    answer are correct or not and 
    display its results.
*/
function ToCheckCorrectAnswer()
{
    const main  = document.getElementById('main');
    const scoreboard = document.getElementById('scoreboard');
    let wrongAns = 0;
    let rightAns = 0;
    for (let i = 0; i < allCorrectAns.length; i++) {
        if(allCorrectAns[i] == userAnswers[i])
        {
            rightAns = rightAns + 1;
            rightanswer.push((i+1));
        }
        else
        {
            wrongAns = wrongAns + 1;
            wronganswer.push((i+1));
        }
    }
    main.classList.add('inactive');
    scoreboard.classList.remove('inactive');

    const correntAnswer = document.getElementById('correntAnswer');
    const wrongAnswer = document.getElementById('wrongAnswer');
    const userScore = document.getElementById('userScore');

    correntAnswer.style.color = 'yellow';
    wrongAnswer.style.color = 'yellow';
    if(wrongAns == 0)
    {
        correntAnswer.innerHTML = 'The Question Number For Correct answer are : ' + rightanswer;
        wrongAnswer.innerHTML = 'hurray! There is no wrong answer'; 
        userScore.innerHTML = 'The total Socre you have is ' +  rightAns + ' out of ' + allCorrectAns.length;
    }
    else if( rightAns == 0)
    {
        correntAnswer.innerHTML = 'Oops! There is no correct answer';
        wrongAnswer.innerHTML = 'The Question Number For Wrong answer are : ' + wronganswer ;
        userScore.innerHTML = 'The total Socre you have is ' +  rightAns + ' out of ' + allCorrectAns.length;
    }
    else
    {
        correntAnswer.innerHTML = 'The Question Number For Correct answer are : ' + rightanswer; 
        wrongAnswer.innerHTML = 'The  Question Number For Wrong answer are : ' + wronganswer ;
        userScore.innerHTML = 'The total Socre you have is ' +  rightAns + ' out of ' + allCorrectAns.length;
    }
    
}

/*
    If question is skipped and we
    need to check number of correct
    answer and wrong answer and
    display it inside score board
    at the end for the questions.
*/
function skipBoxDisplayed(skipnum)
{
    const main  = document.getElementById('main');
    const scoreboard = document.getElementById('scoreboard');

    main.classList.add('inactive');
    scoreboard.classList.remove('inactive');

    const headingScore = document.getElementById('headingScore');
    const skipnote = document.getElementById('skipnote');
    skipnote.style.color = '#fff';

    headingScore.innerHTML = "You have Skiped " + skipnum + " Questions.";
    skipnote.innerHTML = 'Remeber : You need to click on confirm button after selecteing correct answer for each question and once clicked on confirm button you cannot change the option for that question.And it will be locked for that question.'
    skipnote.style.fontSize = '16px';
    skipnote.style.margin = '10px'

    if(skipnum != allCorrectAns.length)
    {
        let wrongAns = 0;
    let rightAns = 0;
    for (let i = 0; i < allCorrectAns.length; i++) {
        if(((allCorrectAns[i] == userAnswers[i]) && userAnswers[i] > 0))
        {
            rightAns = rightAns + 1;
            rightanswer.push((i+1));
        }
        else if(((allCorrectAns[i] != userAnswers[i]) && userAnswers[i] > 0))
        {
            wrongAns = wrongAns + 1;
            wronganswer.push((i+1));
        }
    }

    const correntAnswer = document.getElementById('correntAnswer');
    const wrongAnswer = document.getElementById('wrongAnswer');
    const userScore = document.getElementById('userScore');


    correntAnswer.style.color = 'yellow';
    wrongAnswer.style.color = 'yellow';
    if(wrongAns == 0)
    {
        correntAnswer.innerHTML = 'The Question Number For Correct answer are : ' + rightanswer;
        wrongAnswer.innerHTML = 'There is no wrong answer'; 
        userScore.innerHTML = 'The total Socre you have is ' +  rightAns + ' out of ' + allCorrectAns.length;
    }
    else if( rightAns == 0)
    {
        correntAnswer.innerHTML = 'There is no correct answer';
        wrongAnswer.innerHTML = 'The Question Number For Wrong answer are : ' + wronganswer ;
        userScore.innerHTML = 'The total Socre you have is ' +  rightAns + ' out of ' + allCorrectAns.length;
    }
    else
    {
        correntAnswer.innerHTML = 'The Question Number For Correct answer are : ' + rightanswer; 
        wrongAnswer.innerHTML = 'The  Question Number For Wrong answer are : ' + wronganswer ;
        userScore.innerHTML = 'The total Socre you have is ' +  rightAns + ' out of ' + allCorrectAns.length;
    }
    }

}


/*
    Function for preloader to increament
    the value from 0 to 100 percentage 
*/
function counterloader()
{
    var countval = setInterval(function(){

        var c = parseInt($('.counter').text());

        $('.counter').text((++c).toString());
        if(c == 100){
            clearInterval(countval);
            $('.counter').addClass('hide')
            $('.preloader').addClass('active')
        }

    },10); 
}
counterloader();