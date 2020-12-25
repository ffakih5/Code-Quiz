function printhigh-scores() {
    var highScores = JSON.parse(window.localStorage.getItem("high-scores")) || [];

    highScores.sort(function(a,b) {
        return b.score-a.score;

    });

    highScores.forEach(function(score){ 
        var liItem = document.createElement("li");
        liItem.textContent = score.initials + " - " + score.score;

        var olItem = document.getElementById("high-scores");
        olItem.appendChild(liItem);
    }); 
}

function clearHighscores(){
    window.localStorage.removeItem("high-scores");
    window.location.reload();
}
 document.getElementById("clear").onclick = clearHighscores;

 printhigh-scores();
