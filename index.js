
    var startButton= document.querySelector("#start-button");
    var remainingTime= document.querySelector("#time");
    var finalScore= document.querySelector("#final-score");
    var questionCount= questions.length;
    var submitButton= document.querySelector("#submit-initials");
    var hsButton= document.querySelector("#HS-button");
    var highScores = [];

    function launchQuiz(){
        var remainingTime=0;
}
    
    function start(){
        var questionDiv = document.getElementById('quiz');
        questionDiv.innerHTML = showQuestion(0)
    
    }
    var startQuiz = document.querySelector("#start-button");
    startQuiz.addEventListener("click", start-button) 
    

    console.log(quizQuestions);
    

    function showQuestion (idx) {
        return `
            <h1> ${ quizQuestions[i].question}</h1>
            <ul>
            <li> ${ quizQuestions[i].answers[0]}</li>
            <li> ${ quizQuestions[i].answers[1]}</li>
            <li> ${ quizQuestions[i].answers[2]}</li>
            <li> ${ quizQuestions[i].answers[3]}</li>
            </ul> 
        `
    }