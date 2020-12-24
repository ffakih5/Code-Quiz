function launchQuiz(){
        var remainingTime=0;
}
    var startButton= document.querySelector("#start-button");
    var remainingTime= document.querySelector("#remaining-time");
    var finalScore= document.querySelector("#final-score");
    var questionCount= questions.length;
    var containerLanding= document.querySelector("#container-landing");
    var containerQuiz= document.querySelector("#container-quiz");
    var containerFinal= document.querySelector("#container-final");
    var submitButton= document.querySelector("#submit-initials");
    var hsButton= document.querySelector("#HS-button");
    var containerHighscore= document.querySelector("#container-highscore")
    var highScores = [];

    
    function start(){
        var questionDiv = document.getElementById('quiz');
        questionDiv.innerHTML = showQuestion(0)
    
    }
    var startQuiz = document.querySelector("#start-button");
    startQuiz.addEventListener("click", start-button) 
    

    console.log(quizQuestions);
    