    var quizQuestions = document.querySelector("#quizquestions");
    var remainingTime = document.querySelector("#time");
    var quizAnswers = document.querySelector("#answers");
    var submitBtn = document.querySelector("#submit");
    var startBtn = document.querySelector("#begin");
    var inputInitials = document.querySelector("#initials");
  
   
    var questionCount = 0;
    var time = quizquestions.length * 20;
    var timeR; 

    //function launchQuiz() {
   // var remainingTime=0;
//}
    
function startQuiz(){

    var quizStart= document.getElementById("quiz-start");
    quizStart.setAttribute("class", "hide");

    console.log("quizStart");

    quizquestions.removeAttribute("class");

    timeR = setInterval(timerGo, 1000);

    timeR.textContent = time;

    getQuestion();
    
    }

function getQuestion() {
    
    var currentQuestion  = quizQuestions[questionCount];

    var questionS = document.getElementById("Question");
    questionS.textContent = currentQuestion.question;

    quizAnswers.innerHTML = "";

    currentQuestion.answers.forEach(function(answer, i) {
        var answerNode = document.createElement("button");
        answerNode.setAttribute("class", "answer");
        answerNode.setAttribute("value", answer);

        answerNode.textContent = i + 1 + ". " + answer;

        answerNode.onclick = questionClick;

        answers.appendChild(answerNode);

    });
}
        
function questionClick() {

if (this.value !== quizquestions[questionCount].rightanswer) {
            
time -= 10;

if (time<0) {
    time = 0;
}

timeR.textContent = time; 
}

questionCount++;

if(questionCount===quizquestions.length) {
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
        JSON.parse(window.localStorage.getItem("Highscores")) || [];
        
        var newScore = {
            score: time,
            initials: initials
        };

        highScores.push(newScore); 
        window.localStorage.setItem("Highscores", JSON.stringify(Highscores));

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