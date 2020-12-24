    var quizQuestions = document.querySelector("#quiz-questions");
    var remainingTime = document.querySelector("#time");
    var quizAnswers = document.querySelector("#answers");
    var submitBtn = document.querySelector("#submit");
    var startBtn = document.querySelector("#begin");
    var inputInitials = document.querySelector("#initials");
  
   
    var questionCount = 0;
    var time = questions.length * 20;
    var timeR; 

    //function launchQuiz() {
   // var remainingTime=0;
//}
    
    function startQuiz(){

        var quizStart= document.getElementById("quiz-start");
        quizStart.setAttribute("class", "hide");

        quizQuestions.removeAttribute("class");

        timeR = setInterval(clockTick, 1000);

        timeR.textContent = time;

        getQuestion();
    
    }
   // var startQuiz = document.querySelector("#start-button");
   // startQuiz.addEventListener("click", start-button) 
    

    //console.log(quizQuestions);
    

    //function showQuestion (idx) {
        //return `
            <h1> ${ quizQuestions[i].question}</h1>
            <ul>
            <li> ${ quizQuestions[i].answers[0]}</li>
            <li> ${ quizQuestions[i].answers[1]}</li>
            <li> ${ quizQuestions[i].answers[2]}</li>
            <li> ${ quizQuestions[i].answers[3]}</li>
            </ul> 
        `
    //}