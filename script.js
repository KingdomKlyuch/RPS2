const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const winner = document.querySelector('.winner')
const playerScore = document.querySelector('.playerScore')
const computerScore = document.querySelector('.computerScore')
const returnResult = document.querySelector('.returnResult')

// computer generate RPS using math random and return
const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  };
  
//playround function that uses result to return the game results from else if statements and makes changes to player score
const playRound = (playerSelection) => {
    const computerSelection = getComputerChoice();
    
    // Display player and computer choices
    playerScore.innerHTML = `Player: ${playerSelection}`;
    computerScore.innerHTML = `Computer: ${computerSelection}`;
    
    // Compare player and computer choices and award a point to the winner
    if (playerSelection === computerSelection) {
      // Draw
      returnResult.innerHTML = "It's a draw!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      // Player wins
      playerScore.innerHTML = `Player: ${playerSelection} (+1 point)`;
      returnResult.innerHTML = "Player wins!";
      playerScore += 1;
      if (playerScore === 5) {
        winner.innerHTML = "Game over: Player wins!";
      }
    } else {
      // Computer wins
      computerScore.innerHTML = `Computer: ${computerSelection} (+1 point)`;
      returnResult.innerHTML = "Computer wins!";
      computerScore += 1;
      if (computerScore === 5) {
        winner.innerHTML = "Game over: Computer wins!";
      }
    }
  };




// display player choice and computer choice




//if computer or player wins, game over