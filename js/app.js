var startGame = function () {
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(100, playerName);
};
var elem = document.getElementById('startGame');
if (elem) {
    elem.addEventListener('click', startGame);
}
var logPlayer = function (name) {
    if (name === void 0) { name = "Multimath Player"; }
    console.log("New game starting for player: " + name);
};
var getInputValue = function (elementID) {
    var inputElement = document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
};
var postScore = function (score, playerName) {
    var scoreElement = document.getElementById('postedScores');
    if (scoreElement) {
        scoreElement.innerText = score + " - " + playerName;
    }
};
//# sourceMappingURL=app.js.map