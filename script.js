/************************************************************************/
/************************** Variable Declarations ***********************/
/************************************************************************/

//Stepper Elements :
const stepperSecondIcon = document.querySelector("#secondStep");
const stepperThirdIcon = document.querySelector("#thirdStep");
//Components :
const startQuizButton = document.querySelector("#startQuiz");
const getResults = document.querySelector("#getResults");
// const nextQuestion = document.querySelector("#nextQuestion");
let progressWidth = document.querySelector(".progressCounter");
//Quiz Sections :
const informationSection = document.querySelector("#information-section");
const quizSection = document.querySelector("#quiz-section");
const resultsSection = document.querySelector("#results-section");
//Question & Options :
let question = document.querySelector(".question");
let answerA = document.querySelector(".answerA");
let answerB = document.querySelector(".answerB");
let answerC = document.querySelector(".answerC");
let answerD = document.querySelector(".answerD");

/****************************************************************************/
/********************* Hide Quiz Section & Result Section *******************/
/****************************************************************************/


document.addEventListener("DOMContentLoaded", function() {
  quizSection.style.display = "none";
  resultsSection.style.display = "none";
});

/******************************************************************/
/*************************** Start Quiz ***************************/
/******************************************************************/


startQuizButton.addEventListener("click", () => {
  stepperSecondIcon.classList.add("completed");
  quizSection.style.display = "";
  informationSection.style.display = "none";
  progressWidth.style.width = "10%";
  getJsonData();
});


/***********************************************************/
/*********************** GetJsonData ***********************/
/***********************************************************/

function getJsonData(){
  var myDATA=new XMLHttpRequest();
    myDATA.onreadystatechange=function(){
    if(this.status === 200 && this.readyState === 4){
      quiz = JSON.parse(this.responseText);
      shuffledQuestions = quiz.sort(() => Math.random() - .5)
      displayQuestions(shuffledQuestions);
    }
  }
    myDATA.open('GET','/Quizizy/main.php',true);
    myDATA.send();
}




/***********************************************************/
/******************** Display Questions ********************/
/***********************************************************/

let arrayIndex = 0;

function displayQuestions(shuffledQuestions){
  question.textContent = shuffledQuestions[arrayIndex]["question"];
  answerA.textContent = shuffledQuestions[arrayIndex]["optionA"];
  answerB.textContent = shuffledQuestions[arrayIndex]["optionB"];
  answerC.textContent = shuffledQuestions[arrayIndex]["optionC"];
  answerD.textContent = shuffledQuestions[arrayIndex]["optionD"];
  checkOptions(shuffledQuestions);
  quizCountdown();
}

/***********************************************************/
/********************** Quiz Countdown *********************/
/***********************************************************/


const counterElement = document.querySelector("#timeCounter");
let counterTime;

function quizCountdown(){
  counterTime = setInterval(() => {
    if(counterElement.textContent != 0){
      counterElement.textContent -= 1;
    }else{
      clearInterval(counterTime);
      counterElement.textContent = 10;
      nextQuestion(shuffledQuestions);
    }
  }, 1000);
}


let progressBarValue = 10;

/*****************************************************/
/********************* Count Score *******************/
/*****************************************************/

let card = document.querySelectorAll(".card");
let wrongArray = [];
let correctArray = [];
let correctAnswers = 0;

function checkOptions(shuffledQuestions){
  card.forEach((cards) => {
    cards.onclick = () => {
      if(cards.children[0].textContent === shuffledQuestions[arrayIndex]["correct"]){
        correctAnswers++;
        correctArray.push([shuffledQuestions[arrayIndex]["question"], shuffledQuestions[arrayIndex]["explanation"]]);
      }
      else{
      wrongArray.push([shuffledQuestions[arrayIndex]["question"],shuffledQuestions[arrayIndex]["explanation"]]);
      }
      nextQuestion(shuffledQuestions)
      }
  })
}


/**************************************************************/
/*********************** Next Questions ***********************/
/**************************************************************/

function nextQuestion(shuffledQuestions){
  if(arrayIndex < 9){
    progressBarValue += 10;
    if(progressBarValue <= 100){
      clearInterval(counterTime);
      counterElement.textContent = 10;
      progressWidth.style.width = `${progressBarValue}%`;
      arrayIndex++;
      displayQuestions(shuffledQuestions);
    }
  }else{
    stepperThirdIcon.classList.add("completed")
    quizSection.style.display = "none";
    resultsSection.style.display = "block";
    userScore.textContent = correctAnswers*10 + '%';
    console.log(wrongArray);
  }
}

/*********************************************************/
/********************* Display Results *******************/
/*********************************************************/

const userScore = document.querySelector('.userScore');

const showResultsButton = document.querySelector('#showResults');
const resultsContainer = document.querySelector('.results-container');

showResultsButton.addEventListener("click", () => {
  displayResults();
  resultsContainer.classList.remove('hide');
});

/***************************************************************************/
/********************* Display Correct and Wrong Answers *******************/
/**************************************************************************/

let correctObject;
let f = 0;
function displayResults(){
  wrongArray.forEach(item => {
    correctObject += 
    `<div class="wrongAnswer">
      <p class="question">Question: ${item[0]}</P>
      <p class="explanation">Explanation: ${item[1]}</p>
    </div>
    `
    f++;
    document.querySelector(".wrongAnswers").innerHTML = correctObject;
  });
  
}