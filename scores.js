function printHighScores() {
    var highScores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    highScores.sort(function(a,b) {
        return b.score-a.score;

    });

    highScores.forEach(function(score){ 
        var liItem = document.createElement("li");
        liItem.textContent = score.initials + " - " + score.score;

        var olItem = document.getElementById("highscores");
        olItem.appendChild(liItem);
    }); 
}

function clearHighScores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}
 document.getElementById("clear").onclick = clearHighScores;

 printHighScores();
