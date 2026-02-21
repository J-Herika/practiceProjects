let humanScore = 0;
let computerScore = 0;

let humanChoice;
let isGameOver = false;

const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

const btnContainer = document.getElementById("btn-container");
const elScore = document.getElementById("score");

const getComputerChoice = () => {
  let randNum = Math.floor(Math.random() * 3 + 1);
  switch (randNum) {
    case 1:
      return ROCK;
    case 2:
      return PAPER;
    case 3:
      return SCISSORS;
  }
};

const playRound = () => {
  let computerChoice = getComputerChoice();

  if (computerChoice == humanChoice) {
    console.log("Draw");
  } else if (
    (humanChoice == ROCK && computerChoice == SCISSORS) ||
    (humanChoice == PAPER && computerChoice == ROCK) ||
    (humanChoice == SCISSORS && computerChoice == PAPER)
  ) {
    console.log("You Win this round");
    humanScore++;
  } else {
    console.log("You Lose this round.");
    computerScore++;
  }
  console.log(
    `Human Choice: ${humanChoice} ||||| Computer Choice: ${computerChoice}`,
  );
  console.log(`Human Score: ${humanScore} ||||| Computer: ${computerScore}`);
  console.log("-----------");
};

const endGame = () => {};
const playGame = () => {
  while (humanScore < 5 && computerScore < 5) {
    playRound();
  }

  if (humanScore >= 5 && computerScore < 5) {
    console.log("YOU WON CONGRATS!!!!!");
  } else {
    console.log("You lost. better luck next time.");
  }
};

const updateScore = () => {
  elScore.textContent = `${humanScore} : ${computerScore}`;
};

btnContainer.addEventListener("click", (event) => {
  if (!isGameOver) {
    switch (event.target.className) {
      case "btn-rock":
        humanChoice = ROCK;
        console.log("rock");
        break;
      case "btn-paper":
        humanChoice = PAPER;
        console.log("paper");
        break;
      case "btn-scissors":
        humanChoice = SCISSORS;
        console.log("scissors");
        break;
      default:
        break;
    }
    if (humanScore < 5 && computerScore < 5) {
      playRound();
      updateScore();
    } else if (humanScore >= 5 && computerScore < 5) {
      isGameOver = true;
      console.log("YOU WON CONGRATS!!!!!");
    } else {
      isGameOver = true;
      console.log("You lost. better luck next time.");
    }
  }
});
