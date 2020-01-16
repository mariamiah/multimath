"use strict";
function startGame() {
    // starts a new game
    var messagesElement = document.getElementById('messages');
    if (messagesElement) {
        messagesElement.innerText = "Welcome to MultiMath! Starting new game ....";
    }
}
var elem = document.getElementById('startGame');
if (elem) {
    elem.addEventListener('click', startGame);
}
//# sourceMappingURL=app.js.map