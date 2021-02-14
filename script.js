var quizQuestions = document.querySelector("#quizquestions");
var remainingTime = document.querySelector("#time");
var quizAnswers = document.querySelector("#answers");
var submitBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#begin");
var inputInitials = document.querySelector("#initials");

var questionCount = 0;
var time = questions.length * 20; 
var timerInterval;

function startQuiz(){

    var quizStart= document.getElementById("quiz-start");
    quizStart.setAttribute("class", "hide");

    quizQuestions.removeAttribute("class");
    
    timerInterval = setInterval(timerGo, 1000);
    
    remainingTime.textContent = time;

    getQuestion();

}

function getQuestion(questionIndex) {
    if (!questionIndex){
        questionIndex = 0;
    }
    var currentQuestion = questions[questionIndex].question;
    var currentAnswer = questions[questionIndex].answer;
    var rightAnswer = questions[questionIndex].rightanswer;

    var questionS = document.getElementById("Question");
   
    questionS.innerHTML = currentQuestion;
    questionS.setAttribute("data-correct", rightAnswer);


    quizAnswers.innerHTML = "";

    currentAnswer.forEach(function(answer, i) {
        var answerNode = document.createElement("button");
        answerNode.setAttribute("class", "answer");
        answerNode.setAttribute("data-value", i);

        answerNode.textContent = i + 1 + ". " + answer;

        answerNode.onclick = questionClick;

        quizAnswers.appendChild(answerNode);

    });
}
    
function questionClick() {
    let index = this.getAttribute("data-value");
    let rightAnswer = document.getElementById("Question").getAttribute("data-correct");
    if(index === rightAnswer){
        questionCount++;
       console.log(questionCount, questions.length)
        if(questionCount > questions.length -1) {
            quizEnd();
        } else {
            getQuestion(questionCount);
        } 
    } else {
        time -= 10;
        if (time<0) {
            time = 0;
        }
        remainingTime.textContent = time; 
    }
}
function quizEnd() {
    clearInterval(timerInterval);
    
    var quizEnd = document.getElementById("quiz-end");
    quizEnd.removeAttribute("class");

    var endScore = document.getElementById("end-score");
   
    endScore.textContent = time;

    quizQuestions.setAttribute("class", "hide");
}

function timerGo() {

    time--;
    remainingTime.textContent = time;

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
        window.localStorage.setItem("highscores", JSON.stringify(highScores));

        window.location.href = "scores.html";
    }
}

function enterPressed(event) {
    if (event.key === "Enter") {
        keepHighscore();
    }
}

if(submitBtn) {
    submitBtn.onclick = keepHighscore;
}

if(startBtn) {
    startBtn.onclick = startQuiz;
}

if(inputInitials) {
    inputInitials.onkeyup = enterPressed;
}

