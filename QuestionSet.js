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