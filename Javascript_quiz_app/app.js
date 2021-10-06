let data = [
  {
    ques: "1. Which type of JavaScript language is",
    option1: "a. Object-Oriented",
    option2: "b. Object-Based",
    option3: "c. Assembly-language",
    option4: "d. High-level",
    answer: "a. Object-Based",
  },
  {
    ques: "2. Which one of the following also known as Conditional Expression:",
    option1: "a. Alternative to if-else",
    option2: "b. Switch statement",
    option3: "c. If-then-else statement",
    option4: "d. immediate if",
    answer: "d. immediate if",
  },
  {
    ques: "3. In JavaScript, what is a block of statement?",
    option1: "a. Conditional block",
    option2:
      "b. block that combines a number of statements into a single compound statement",
    option3: "c. both conditional block and a single statement",
    option4: "d. block that contains a single statement",
    answer:
      "b. block that combines a number of statements into a single compound statement",
  },
  {
    ques: "4. The 'function' and 'var' are known as:",
    option1: "a. Keywords",
    option2: "b. Data types",
    option3: "c. Declaration statements",
    option4: "d. Prototypes",
    answer: "c. Declaration statements",
  },
  {
    ques: "5. Which of the following type of a variable is volatile?",
    option1: "a. Mutable variable",
    option2: "b. Dynamic variable",
    option3: "c. Volatile variable",
    option4: "d. Immutable variable",
    answer: "a. Mutable variable",
  },
];

let answers = {};

let index = 0;

window.onload = () => {
  document.getElementById("ques").innerText = data[index].ques;
  document.getElementById("option1Text").innerText = data[index].option1;
  document.getElementById("option2Text").innerText = data[index].option2;
  document.getElementById("option3Text").innerText = data[index].option3;
  document.getElementById("option4Text").innerText = data[index].option4;

  
  document.getElementById("option1").setAttribute("value", data[index].option1);
  document.getElementById("option2").setAttribute("value", data[index].option2);
  document.getElementById("option3").setAttribute("value", data[index].option3);
  document.getElementById("option4").setAttribute("value", data[index].option4);

  for (let i = 1; i < 5; i++) {
    document.getElementById("option" + i).setAttribute("name", "ques" + index);
  }

  document.getElementById("prevBtn").setAttribute("disabled", "true");
};

document.getElementById("prevBtn").addEventListener("click", () => {
  index -= 1;

  if (index == 0)
    document.getElementById("prevBtn").setAttribute("disabled", "true");

  for (let i = 1; i < 5; i++) {
    document.getElementById("option" + i).setAttribute("name", "ques" + index);
  }


  document.getElementById("ques").innerText = data[index].ques;
  document.getElementById("option1Text").innerText = data[index].option1;
  document.getElementById("option2Text").innerText = data[index].option2;
  document.getElementById("option3Text").innerText = data[index].option3;
  document.getElementById("option4Text").innerText = data[index].option4;

   
  document.getElementById("option1").setAttribute("value", data[index].option1);
  document.getElementById("option2").setAttribute("value", data[index].option2);
  document.getElementById("option3").setAttribute("value", data[index].option3);
  document.getElementById("option4").setAttribute("value", data[index].option4);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  answers[index] = document.querySelector(
    'input[name="ques' + index + '"]:checked'
  ).value;

  if (document.getElementById("nextBtn").innerText == "Submit") {
    let correctAnswers = 0;
    for (let i = 0; i < 5; i++) {
      if (answers[i] == data[i].answer) {
        correctAnswers++;
      }
    }
    document.getElementById("quesPanel").classList.add("d-none");
    document.getElementById("resultPanel").classList.remove("d-none");
    document.getElementById("totalScore").innerText = correctAnswers+1 + "/5";
  }

  index += 1;
  
  

  if (index != 0)
    document.getElementById("prevBtn").removeAttribute("disabled");

  for (let i = 1; i < 5; i++) {
    document.getElementById("option" + i).setAttribute("name", "ques" + index);
  }

  var ele = document.getElementsByName("ques" + index);
  for(var i=0;i<ele.length;i++)
     ele[i].checked = false;
     

  if (index == 4) {
    document.getElementById("nextBtn").innerText = "Submit";
    document.getElementById("nextBtn").classList.remove("btn-primary");
    document.getElementById("nextBtn").classList.add("btn-success");
  }
  if (index < 5) {
    document.getElementById("ques").innerText = data[index].ques;
    document.getElementById("option1Text").innerText = data[index].option1;
    document.getElementById("option2Text").innerText = data[index].option2;
    document.getElementById("option3Text").innerText = data[index].option3;
    document.getElementById("option4Text").innerText = data[index].option4;
  

     
    document
      .getElementById("option1")
      .setAttribute("value", data[index].option1);
    document
      .getElementById("option2")
      .setAttribute("value", data[index].option2);
    document
      .getElementById("option3")
      .setAttribute("value", data[index].option3);
    document
      .getElementById("option4")
      .setAttribute("value", data[index].option4);
  }
});
