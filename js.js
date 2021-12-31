
let computerChoise;
let playerSelection;
let userScore = 0;
let computerScore = 0;

function computerPlay() {
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

function playRound(computer, player) {
    computerPlay()
    let playerSelectionWut = prompt("rock, paper or sicors")
    let playerSelection = playerSelectionWut.toLocaleLowerCase();
    // console.log(computer)
    // console.log(player)

    if (computer === playerSelection) {
        return ("draw")
    }
    else if (playerSelection == "sicors") {
        if (computer == "rock") {
            computerScore++;
            return ("you lose")
        }
        else {
            userScore++;
            return ("you win")
        }
    }
    else if (playerSelection == "paper") {
        if (computer == "rock") {
            userScore++;
            return ("you win")
        }
        else {
            computerScore++;
            return ("you lose")
        }
    }
    else if (playerSelection == "rock") {
        if (computer == "sicors") {
            userScore++;
            return ("you win")
        }
        else {
            computerScore++;
            return ("you lose")
        }
    }

    console.log("your choise ", playerSelection)
    console.log("computer choise ", computer)

}

function game() {
    console.log(playRound(computerChoise, playerSelection))
    console.log(playRound(computerChoise, playerSelection))
    console.log(playRound(computerChoise, playerSelection))
    console.log(playRound(computerChoise, playerSelection))
    console.log(playRound(computerChoise, playerSelection))

    if (userScore > computerScore) {
        console.log("YOU WON THE GAME")
    }
    else if (computerScore > userScore) {
        console.log("BOI YOU HAVE LOST")
    }

}


game()







