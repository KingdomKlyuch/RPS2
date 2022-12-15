const player = document.querySelector('.player')
const computer = document.querySelector('.computer')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const winner = document.querySelector('.winner')
const returnResult = document.querySelector('.returnResult')
const restart = document.querySelector('.restart')
let playerScore = document.querySelector('.playerScore')
let computerScore = document.querySelector('.computerScore')
let playerScoreNum = 0;
let computerScoreNum = 0;
let playerSelection = ''


// computer generate RPS using math random and return
const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  };
                                                            
//playround function that uses result to return the game results from else if statements and makes changes to player score
const playRound = (playerSelection) => {
    const computerSelection = getComputerChoice();
    
    // Display player and computer choices
    playerScore.innerHTML = `player: ${playerSelection}`;
    computerScore.innerHTML = `computer: ${computerSelection}`;
    
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
      playerScore.innerHTML = `Player: ${playerSelection} (+1 point) | Score: ${playerScoreNum}`;
      returnResult.innerHTML = "Player wins!";
      playerScoreNum += 1;
      if (playerScoreNum === 5) {
        winner.innerHTML = "Game over: Player wins!";
      }
    } else {
      // Computer wins
      computerScore.innerHTML = `Computer: ${computerSelection} (+1 point) | Score: ${computerScoreNum}`
      returnResult.innerHTML = "Computer wins!";
      computerScoreNum += 1;
      if (computerScoreNum === 5) {
        winner.innerHTML = "Game over: Computer wins!";
      }
    }
  };

  restart.addEventListener('click', () => {
    // Reset player and computer scores
    playerScoreNum = 0;
    computerScoreNum = 0;
    playerScore.innerHTML = `Player: 0 | Score: ${playerScoreNum}`;
    computerScore.innerHTML = `Computer: 0 | Score: ${computerScoreNum}`;
    winner.innerHTML = "";
    returnResult.innerHTML = "";
  });


  rock.addEventListener('click', () => {
    playRound('rock');
  });
  
  paper.addEventListener('click', () => {
    playRound('paper');
  });
  
  scissors.addEventListener('click', () => {
    playRound('scissors');
  });
  


//if computer or player wins, game over