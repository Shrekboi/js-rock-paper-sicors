let playerSelection = "paper"
let computerChoise;

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

// function game(computer, player) {
//     if (number == playerSelection) {
//         console.log("draw")
//     }
//     else if 

// }

computerPlay()
console.log(computerChoise)




