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

    





    console.log("Quiz");
    var quizQuestions = [
       {
        "question" : "What does HTML stand for?" ,
        "answers"  : [
           "HumanT", 
           "bla bla",
           "easyto understand",
           "HyperTextMarkupLanguage"
        ],
         "rightanswer" : 3
    },
    
       {
        "question" : "What does CSS stand for?" ,
        "answers"  : [
           "HumanT", 
           "Cascading Style Sheets",
           "easyto understand",
           "HyperTextMarkupLanguage"
        ],
         "rightanswer" : 1
       }
    ]
    function showQuestion (idx) {
        return `
            <h1> ${ quizQuestions[i].question}</h1>
            <ul>
            <li> ${ quizQuestions[i].answers[0]}</li>
            <li> ${ quizQuestions[i].answers[1]}</li>
            <li> ${ quizQuestions[i].answers[2]}</li>
            <li> ${ quizQuestions[i].answers[3]}</li>
            </ul> 
        
        
        
    }
    function start(){
        var questionDiv = document.getElementById('quiz');
        questionDiv.innerHTML = showQuestion(0)
    
    }
    var startQuiz = document.getElementById('start');
    startQuiz.addEventListener('click', start) 
    

    console.log(quizQuestions);
    