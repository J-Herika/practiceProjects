let humanScore = 0;
let computerScore = 0;

const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

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

const getHumanChoice = () => {
  let humanChoice = parseInt(
    prompt("Choose Rock = 1,Paper = 2, or Scissors = 3"),
  );
  switch (humanChoice) {
    case 1:
      return ROCK;
    case 2:
      return PAPER;
    case 3:
      return SCISSORS;
  }
  return humanChoice;
};

const playRound = () => {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();

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

playGame();
