/// <reference path="player.ts" />

const startGame = () => {
    // starts a new game
    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);
    postScore(100, playerName);
    postScore(-5, playerName);
}
const elem = document.getElementById('startGame');
if (elem) {
    elem.addEventListener('click', startGame);
}

const logPlayer = (name: string = "Multimath Player") => {
    console.log(`New game starting for player: ${name}`);
}
const getInputValue = (elementID: string): string | undefined => {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    if(inputElement.value === ''){
        return undefined;
    }else {
        return inputElement.value;
    }
}

const postScore = (score: number, playerName?: string): void => {
    let logger: (value: string) => void;
    if(score < 0){
        logger = logError;
    }else{
        logger = logMessage;
    }
    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    if(scoreElement){
        scoreElement.innerText = `${score} - ${playerName}`
    }
    logger(`Score: ${score}`);
}

const logMessage = (message: string) => console.log(message);

function logError(err: string): void {
    console.error(err); 
}

const firstPlayer: Player = new Player();
firstPlayer.name = "maria";
console.log(firstPlayer.formatName());