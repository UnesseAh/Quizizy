let startQuizButton = document.getElementById("startQuiz");
let secondStep = document.getElementById("secondStep");
let thirstStep = document.getElementById("thirdStep");

let getResults = document.getElementById("getResults");
getResults.addEventListener("click", () => thirstStep.classList.add("completed"));


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
let answereA = document.querySelector(".answeareA")
let answereB = document.querySelector(".answeareB")
let answereC = document.querySelector(".answeareC")
let answereD = document.querySelector(".answeareD")


let counter = 0;
const shuffledQuestions = questions.sort(() => Math.random() - .5);
console.log(shuffledQuestions);

function fetchData(){
    question.innerHTML = shuffledQuestions[counter].question;
    answereA.innerHTML = shuffledQuestions[counter].choiceA;
    answereB.innerHTML = shuffledQuestions[counter].choiceB;
    answereC.innerHTML = shuffledQuestions[counter].choiceC;
    answereD.innerHTML = shuffledQuestions[counter].choiceD;
    // if(counter == 11){
    //     getResults.classList.remove('hide');
    // }
}

fetchData();

let nextQuestion = document.getElementById("nextQuestion");

nextQuestion.addEventListener("click", () => {
    counter++;
    fetchData();
})

function showNextQuestion(){

}