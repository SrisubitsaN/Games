var points = 10;
var score = document.getElementById("score");
var result = document.getElementById("res");
var butval = Array.from(document.getElementsByClassName("but"));

// Initialize score display
score.value = points;

function enter(value) {
    var random = Math.floor(Math.random() * 10 + 1);

    if (value == random) {
        result.textContent = "You are Correct 🎉";
    } else {
        result.textContent = "You are Wrong 🥲";
        points -= 1;
    }
    score.value = points;

    if (points <= 0) {
        result.textContent = "Game Over! 🤕";
        disableButton();
    }
}

// Disable all buttons
function disableButton() {
    butval.forEach(function(button) {
        button.disabled = true;
    });
}

// Restart the game
function restartGame() {
    points = 10;
    score.value = points;
    result.textContent = "";

    butval.forEach(function(button) {
        button.disabled = false;
    });
}
