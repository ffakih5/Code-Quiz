console.log("Quiz");
    var quizQuestions = [
       {
        "question" : "What does HTML stand for?" ,
        "answers"  : [
           "HumananiTy MagnosteeL", 
           "Hyper Tastic Magic Lions",
           "Horton Tells Murtle Loo",
           "Hyper Text Markup Language",
        ],
         "rightanswer" : 3
        },
       {
        "question" : "What does CSS stand for?" ,
        "answers"  : [
           "", 
           "Cascading Style Sheets",
           "easyto understand",
           "HyperTextMarkupLanguage"
        ],
         "rightanswer" : 1
       },
       {
        "question" : "Which of these is a programming language?" , 
        "answers"  : [
            "JavaScript", 
            "Pythagoras Theorum",
            "Ruby Code",
            "CSS",
        ],
         "rightanswer" : 0
       },
       { 
        "question" : "Where do you find the Document title, meta data, styles and links?" , 
        "answers"  : [
            "<html>",
            "<a>",
            "<script>",
            "<head>",
        ],
         "rightanswer" : 3
       },
       {
        "question" : "What is used to enable a button when clicked?", 
        "answers"  : [
            "addElementById",
            "onClick",
            "addEventListener",
            "function()",
        ],
        "rightanswer" : 2
       },
       {
        "question" : "What are typically found in an array?",
        "answers"  : [
            "Booleans",
            "Strings",
            "Numbers",
            "All of the above",
        ],
        "right answer" : 3
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
        `
    }