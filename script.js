/************************** Variable Declarations ***********************/
//Stepper Elements :
const stepperSecondIcon = document.querySelector("#secondStep");
const stepperThirdIcon = document.querySelector("#thirdStep");
//Components :
const startQuizButton = document.querySelector("#startQuiz");
const getResults = document.querySelector("#getResults");
const nextQuestion = document.querySelector("#nextQuestion");
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


/********************* Hide Quiz Section & Result Section *******************/

document.addEventListener("DOMContentLoaded", function() {
  quizSection.style.display = "none";
  resultsSection.style.display = "none";
});

/*************************** Start Quiz ***************************/

startQuizButton.addEventListener("click", () => {
  stepperSecondIcon.classList.add("completed");
  quizSection.style.display = "";
  informationSection.style.display = "none";
  progressWidth.style.width = "10%";
  displayQuestions();
});

/********************** Shuffle Array ***********************/

const shuffledQuestions = questions.sort(() => Math.random() - .5);

/******************** Display Questions ********************/

let arrayIndex = 0;

function displayQuestions(){
  question.textContent = shuffledQuestions[arrayIndex].question;
  answerA.textContent = shuffledQuestions[arrayIndex].choiceA;
  answerB.textContent = shuffledQuestions[arrayIndex].choiceB;
  answerC.textContent = shuffledQuestions[arrayIndex].choiceC;
  answerD.textContent = shuffledQuestions[arrayIndex].choiceD;
  quizCountdown();
}

/******************** Quiz Countdown *******************/

const counterElement = document.querySelector("#timeCounter");
let counterTime;

function quizCountdown(){
  counterTime = setInterval(() => {
    if(counterElement.textContent != 0){
      counterElement.textContent -= 1;
    }else{
      clearInterval(counterTime);
      counterElement.textContent = 10;
      // wrongArray.push("");
      nextQuestion.click();
    }
  }, 1000);
}

/********************* Progress Bar Counter *******************/

function progressBar(){
  progressBarValue += 10;
  if(progressBarValue <= 100){
    clearInterval(counterTime);
    counterElement.textContent = 10;
    progressWidth.style.width = `${progressBarValue}%`;
    arrayIndex++;
    displayQuestions();
  }
}

/********************* Redirect User to Next Question *******************/

let progressBarValue = 10;

nextQuestion.addEventListener("click", () => {
  if(arrayIndex < 9){
      progressBar();
  }else{
    stepperThirdIcon.classList.add("completed")
    quizSection.style.display = "none";
    resultsSection.style.display = "block";
    userScore.textContent = `${correctAnswers}/10`;
    console.log(wrongArray);
  }
})

/********************* Count Score *******************/

let card = document.querySelectorAll(".card");
let wrongArray = [];
let correctArray = [];
let correctAnswers = 0;

card.forEach((cards) => {
  cards.onclick = () => {
    if(cards.children[0].textContent === questions[arrayIndex].correct){
      // wrongArray.push("");
      correctAnswers++;
      correctArray.push({question: shuffledQuestions[arrayIndex].question, explanation: shuffledQuestions[arrayIndex].explanation});
    }
    else{
    wrongArray.push({question: shuffledQuestions[arrayIndex].question, explanation: shuffledQuestions[arrayIndex].explanation});
    }

    nextQuestion.click();
    }
})


/********************* Display Results *******************/

const userScore = document.querySelector('.userScore');

const showResultsButton = document.querySelector('#showResults');
const resultsContainer = document.querySelector('.results-container');

showResultsButton.addEventListener("click", () => {
  displayResults();
  resultsContainer.classList.remove('hide');
});


let correctObject;

function displayResults(){
  wrongArray.forEach(item => {
    correctObject += 
    `<p>question: ${item.question}</P>
    <p>explanation: ${item.explanation}</p>
    `
    document.querySelector(".wrongAnswers").innerHTML = correctObject;
  });
  
}





















// $(function () {
//     $("#quiz-section").hide();
//     $("#results-section").hide();
//     $("#startQuiz").click(function () {
//         $("#quiz-section").show();
//         $("#information-section").hide();
//     })
// })