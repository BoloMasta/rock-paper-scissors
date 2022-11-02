const result = document.querySelector(".result");
const playerScore = document.querySelector(".player__score--value");
const playerButtons = document.querySelectorAll(".playerBtn");
const computerScore = document.querySelector(".computer__score--value");
const computerButtons = document.querySelectorAll(".computer__choice--button");
const resetBtn = document.querySelector(".resetBtn");

playerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    computerButtons.forEach((button) => {
      button.classList.remove("compResultActive");
    });

    const playerChoice = button.value;
    const computerChoice = computerButtons[Math.floor(Math.random() * 3)].value;

    const findBtn = Array.from(computerButtons).find(
      (btn) => btn.value === computerChoice
    );
    findBtn.classList.add("compResultActive");
    setTimeout(() => {
      findBtn.classList.remove("compResultActive");
    }, 2000);

    if (playerChoice === computerChoice) {
      result.textContent = "Draw";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      result.textContent = "You won";
      playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else {
      result.textContent = "You lost";
      computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }

    resetBtn.style.display = "block";
  });
});

resetBtn.addEventListener("click", () => {
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  result.textContent = "New game";
  resetBtn.style.display = "none";
});
