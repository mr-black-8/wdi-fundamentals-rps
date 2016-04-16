////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    var answer = prompt();
    return answer;
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
  if(move === undefined) {
    move = getInput();
  }
  return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
  if(move === undefined) {
    move = randomPlay();
  }
  return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove == 'rock') {
        if (computerMove == 'rock') {
            winner = 'tie';
        } else if (computerMove == 'paper') {
            winner = 'computer';
        } else if (computerMove == 'scissors') {
            winner = 'player';
        } else {
            winner = 'Uh Oh! Someone\'s trying to cheat!';
        }
    } else if (playerMove == 'paper') {
        if (computerMove == 'rock') {
            winner = 'player';
        } else if (computerMove == 'paper') {
            winner = 'tie';
        } else if (computerMove == 'scissors') {
            winner = 'computer';
        } else{
            winner = 'Uh Oh! Someone\'s trying to cheat!';
        }
    } else if (playerMove == 'scissors') {
        if (computerMove == 'rock') {
            winner = 'computer';
        } else if (computerMove == 'paper') {
            winner = 'player';
        } else if (computerMove == 'scissors') {
            winner = 'tie';
        } else {
            winner = 'Uh Oh! Someone\'s trying to cheat!';
        }
    } else {
        winner = 'Uh Oh! Someone\'s trying to cheat!';
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var playerMove;
    var computerMove;
    var gameWinner;

    while (playerWins < 5 && computerWins < 5) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        gameWinner = getWinner(playerMove, computerMove);

        if(gameWinner === 'player') {
            playerWins += 1;
            console.log("Player's " + playerMove + " defeats computer's " + computerMove)
            console.log("Player wins this round!");
            console.log("Current score: Player " + playerWins + " Computer: " + computerWins);
        } else if (gameWinner ==='computer') {
            computerWins += 1
            console.log("Computer's " + computerMove + " defeats player's " + playerMove)
            console.log("Computer wins this round!");
            console.log("Current score: Player " + playerWins + " Computer: " + computerWins);
        } else if (gameWinner === 'tie') {
            console.log("This round was a tie!");
            console.log("Current score: Player " + playerWins + " Computer: " + computerWins);
        } else {
            console.log(gameWinner);
        }
    }

    if(playerWins > computerWins) {
        console.log("Player wins the game!");
        console.log("Final score: Player " + playerWins + " Computer: " + computerWins);
    } else {
        console.log("Computer wins the game!");
        console.log("Final score: Player " + playerWins + " Computer: " + computerWins);
    }

    return [playerWins, computerWins];
}