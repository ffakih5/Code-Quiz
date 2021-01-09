var quizQuestions = document.querySelector("#quizquestions");
var remainingTime = document.querySelector("#time");
var quizAnswers = document.querySelector("#answers");
var submitBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#begin");
var inputInitials = document.querySelector("#initials");


var questionCount = 0;
var time = questionSet.length * 20;
var timeR; 

//function launchQuiz() {
// var remainingTime=0;
//}

function startQuiz(){


var quizStart= document.getElementById("quiz-start");
quizStart.setAttribute("class", "hide");

console.log("quizStart");

quizQuestions.removeAttribute("class");

timeR = setInterval(timerGo, 1000);

timeR.textContent = time;

getQuestion();

}

function getQuestion() {


var currentQuestion  = questionSet[questionCount];

var questionS = document.getElementById("Question");
questionS.setAttribute("data-correct", currentQuestion.question);
//questionS.textContent = currentQuestion.question;
questionS.setAttribute("data-correct", currentQuestion.rightanswer);
console.log(questionS.getAttribute("data-correct"));

quizAnswers.innerHTML = "";

currentQuestion.answer.forEach(function(answer, i) {
    var answerNode = document.createElement("button");
    answerNode.setAttribute("class", "answer");
    answerNode.setAttribute("data-value", answer);

    answerNode.textContent = i + 1 + ". " + answer;

    answerNode.onclick = questionClick;

    quizAnswers.appendChild(answerNode);

});
}
    
function questionClick() {

if (this.getAttribute("data-value") !==
document.getElementById("Question").getAttribute("data-correct")) {

time -= 10;

if (time<0) {
time = 0;
}

timeR.textContent = time; 
}

questionCount++;

if(questionCount===questionSet.length -1) {
quizEnd();
} else {
getQuestion();
}
}
function quizEnd() {
    clearInterval(timeR);
    
    var quizEnd = documemt.getElementById("quiz-end");
    quizEnd.removeAttribute("class");

    var endScore = document.getElementById("end-score");
    endScore.textContent = time;

    quizQuestions.setAttribute("class", "hide");
}

function timerGo() {
    time--;
    timeR.textContent = time;

    if (time <= 0) {
        quizEnd();
    }
}

function keepHighscore() {

var initials = inputInitials.value.trim();

if (initials !=="") {
    var highScores = 
    JSON.parse(window.localStorage.getItem("highscores")) || [];
    
    var newScore = {
        score: time,
        initials: initials
    };

    highScores.push(newScore); 
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    window.location.href = "scores.html";
    }
}
function enterPressed(event) {
if (event.key === "Enter") {
    keepHighscore();
}
}
submitBtn.onclick = keepHighscore;

startBtn.onclick = startQuiz;

inputInitials.onkeyup = enterPressed;















// var startQuiz = document.querySelector("#start-button");
// startQuiz.addEventListener("click", start-button) 


//console.log(quizQuestions);


//function showQuestion (idx) {
    //return `
        //<h1> ${ quizQuestions[i].question}</h1>
        //<ul>
        //<li> ${ quizQuestions[i].answers[0]}</li>
       // <li> ${ quizQuestions[i].answers[1]}</li>
        //<li> ${ quizQuestions[i].answers[2]}</li>
       // <li> ${ quizQuestions[i].answers[3]}</li>
        //</ul> 
    //`
//}