let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#comp-score");

const playCompChoice = () => {
  let options = ["Rock", "Paper", "Scissors"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};
const drawGame = () => {
  msg.innerText = "Game Was Draw. Play Again";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "You Win";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    CompScorePara.innerText = compScore;
    msg.innerText = "You lose";
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = playCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? true :false; 
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false: true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
