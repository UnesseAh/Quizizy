let startQuizButton = document.getElementById("startQuiz");
let secondStep = document.getElementById("secondStep");
let thirstStep = document.getElementById("thirdStep");

let getResults = document.getElementById("getResults");
getResults.addEventListener("click", () => thirstStep.classList.add("completed") );


startQuizButton.addEventListener("click",()=>secondStep.classList.add("completed"));


// $(function () {
//     $("#quiz-section").hide();
//     $("#results-section").hide();
//     $("#startQuiz").click(function () {
//         $("#quiz-section").show();
//         $("#information-section").hide();
//     })
// })

document.addEventListener("DOMContentLoaded", function() {
    const quizSection = document.querySelector("#quiz-section");
    const resultsSection = document.querySelector("#results-section");
    const startQuizButton = document.querySelector("#startQuiz");
    const informationSection = document.querySelector("#information-section");
  
    quizSection.style.display = "none";
    resultsSection.style.display = "none";

    startQuizButton.addEventListener("click", function() {
      quizSection.style.display = "";
      informationSection.style.display = "none";
    });
  });

let question = document.querySelector(".question")
let answeareA = document.querySelector(".answeareA")
let answeareB = document.querySelector(".answeareB")
let answeareC = document.querySelector(".answeareC")
let answeareD = document.querySelector(".answeareD")


let counter = 0;

function fetchData(){
    question.innerHTML = questions[counter].question;
    answeareA.innerHTML = questions[counter].choiceA;
    answeareB.innerHTML = questions[counter].choiceB;
    answeareC.innerHTML = questions[counter].choiceC;
    answeareD.innerHTML = questions[counter].choiceD;
}

fetchData();

let nextQuestion = document.getElementById("nextQuestion");

nextQuestion.addEventListener("click", () => {
    counter++;
    fetchData();
})

function showNextQuestion(){

}