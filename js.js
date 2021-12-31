let computerChoise;
let playerSelection;
let userScore = 0;
let computerScore = 0;

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

function playRound(computer, player) {
    
    console.log(computer)
    console.log(player)


    const computer_choisee = document.querySelector("#cchoise")
    computer_choisee.textContent = "nigag";

    if (computer === player) {
        return ("draw")
    }
    else if (player == "sicors") {
        if (computer == "rock") {
            computerScore++;
            return ("you lose")
        }
        else {
            userScore++;
            return ("you win")
        }
    }
    else if (player == "paper") {
        if (computer == "rock") {
            userScore++;
            return ("you win")
        }
        else {
            computerScore++;
            return ("you lose")
        }
    }
    else if (player == "rock") {
        if (computer == "sicors") {
            userScore++;
            return ("you win")
        }
        else {
            computerScore++;
            return ("you lose")
        }
    }

    const computer_choise = document.querySelector("#cchoise")
    computer_choise.textContent = "nigag";
}

function game() {

    const player_choise = document.querySelector("#pchoise");
    const computer_choisee = document.querySelector("#cchoise")
    

    const rock_btn = document.querySelector("#rockbtn");
    rock_btn.addEventListener("click", () => {
        playRound(computerPlay(), "rock");
        player_choise.textContent = "rock"
        computer_choisee.textContent = computerChoise;

    })


    const paper_btn = document.querySelector("#paperbtn");
    paper_btn.addEventListener("click", () => {
        playRound(computerPlay(), "paper");
        player_choise.textContent = "paper"
        computer_choisee.textContent = computerChoise;

    })

    const sicors_btn = document.querySelector("#sicorsbtn");
    sicors_btn.addEventListener("click", () => {
        playRound(computerPlay(), "sicors");
        player_choise.textContent = "sicors"
        computer_choisee.textContent = computerChoise;
    })

    // if (userScore > computerScore) {
    //     console.log("YOU WON THE GAME")
    // }
    // else if (computerScore > userScore) {
    //     console.log("BOI YOU HAVE LOST")
    // }

}

game()