let computerChoise;
let playerSelection;
let userScore = 0;
let computerScore = 0;

const player_choise = document.querySelector("#pchoise");
const computer_choisee = document.querySelector("#cchoise")
const rock_btn = document.querySelector("#rockbtn");
const displayPlayerInfo = document.querySelector(".pscore")
const displayComputerInfo = document.querySelector(".cscore")
const paper_btn = document.querySelector("#paperbtn");
const sicors_btn = document.querySelector("#sicorsbtn");

function computerPlay() {  //computer chooses 
    let number = Math.random();

    if (number < 0.33) {
        computerChoise = "paper"
    }
    else if (number > 0.33 && number < 0.66) {
        computerChoise = "rock"
    }
    else {
        computerChoise = "sicors"
    }

    return computerChoise
}

function resetScore() {  // funcion to reset the scores
    computerScore = 0;
    userScore = 0;
    displayPlayerInfo.textContent = `${userScore}`
    displayComputerInfo.textContent = `${computerScore}`
    player_choise.textContent = "your choice"; //these don't work
    computer_choisee.textContent = "computer choise"; // fix em later
}

function CheckIfGameOver() {
    if (computerScore == 5 || userScore == 5) {  // check if game is over
        if (userScore > computerScore) {
            alert("BOI YOU WON THE GAME")
            resetScore();
        }
        else if (computerScore > userScore) {
            alert("BOI YOU HAVE LOST")
            resetScore();
        }
    }
}

function playRound(computer, player) {

    if (computerScore == 5 || userScore == 5) {  // check if game is over
        if (userScore > computerScore) {
            alert("BOI YOU WON THE GAME")
            resetScore();
        }
        else if (computerScore > userScore) {
            alert("BOI YOU HAVE LOST")
            resetScore();
        }
    }

    if (player == "rock" && computer == "sicors" ||
        player == "paper" && computer == "rock" ||
        player == "sicors" && computer == "paper") {
        userScore++;
        displayPlayerInfo.textContent = `${userScore}`
    }
    else if (player == "rock" && computer == "paper" ||
        player == "paper" && computer == "sicors" ||
        player == "sicors" && computer == "rock") {
        computerScore++;
        displayComputerInfo.textContent = `${computerScore}`
    }

    CheckIfGameOver();

}

function game() {

    rock_btn.addEventListener("click", () => {
        playRound(computerPlay(), "rock");
        player_choise.textContent = "rock"
        computer_choisee.textContent = computerChoise;
    })

    paper_btn.addEventListener("click", () => {
        playRound(computerPlay(), "paper");
        player_choise.textContent = "paper"
        computer_choisee.textContent = computerChoise;
    })

    sicors_btn.addEventListener("click", () => {
        playRound(computerPlay(), "sicors");
        player_choise.textContent = "sicors"
        computer_choisee.textContent = computerChoise;
    })
}

game()