const startQuizButton = document.getElementById("startQuiz");
const secondStep = document.getElementById("secondStep");
const thirstStep = document.getElementById("thirdStep");

let getResults = document.getElementById("getResults");
getResults.addEventListener("click", () => thirstStep.classList.add("completed"));


startQuizButton.addEventListener("click",()=>{
  secondStep.classList.add("completed")

  fetchData();


});


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
      progressCounter.style.width = "10%";


    });
  });
var counterTime;
let question = document.querySelector(".question")
let answereA = document.querySelector(".answereA")
let answereB = document.querySelector(".answereB")
let answereC = document.querySelector(".answereC")
let answereD = document.querySelector(".answereD")


let card=document.querySelectorAll(".card");
let newArray = [];
let countCorrect = 0;

card.forEach((cards)=>{
    cards.onclick=()=>{
      // console.log(cards.children[0].textContent);
      // console.log(questions[counter].correct)
      if(cards.children[0].textContent===questions[counter].correct){
        countCorrect++;
      }
      newArray.push(cards.children[0].textContent);
      x += 10;
      if(x<=100){
        clearInterval(counterTime);
        countermElement.innerHTML=10;
        progressCounter.style.width = `${x}%`;
        counter++;
        fetchData();
      }
    }
})
// console.log(countCorrect)


// function checkCorrectAnswer(){
//   let i = 0;
//   while(i < newArray.length){
//     console.log(i);
//     console.log(countCorrect);
//     if(newArray[i] === questions[i].correct){
//       countCorrect++;

//     }
//     i++
//   }
//   return countCorrect;
// }




const shuffledQuestions = questions.sort(() => Math.random() - .5);

console.log(shuffledQuestions);
let counter = 0;

function fetchData(){
 
    question.innerHTML = shuffledQuestions[counter].question;
    answereA.innerHTML = shuffledQuestions[counter].choiceA;
    answereB.innerHTML = shuffledQuestions[counter].choiceB;
    answereC.innerHTML = shuffledQuestions[counter].choiceC;
    answereD.innerHTML = shuffledQuestions[counter].choiceD;
    quizCountdown();
  
}


let nextQuestion = document.getElementById("nextQuestion");

let progressCounter = document.querySelector(".progressCounter");

let x = 10;

nextQuestion.addEventListener("click", () => {
  if(counter<10){
    x += 10;
  
    if(x<=100){
      clearInterval(counterTime);
      countermElement.innerHTML=10;
      progressCounter.style.width = x  + "%";
      console.log(x);
      counter++;
      fetchData();
    }
  }else{
    quizSection.style.display="none"
  }
  
  

})

var countermElement = document.getElementById("timeCounter");


function quizCountdown(){
  // console.log(countermElement)
   counterTime = setInterval(()=>{
    if(countermElement.innerHTML!=0){
      countermElement.innerHTML -= 1;
    }else{
      clearInterval(counterTime);
      countermElement.innerHTML = 10;
      newArray.push("");
      nextQuestion.click();
    }
  }, 1000);
}

console.log(newArray);

