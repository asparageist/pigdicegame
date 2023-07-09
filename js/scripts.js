document.getElementById("roll-button").addEventListener("click", playDice);
document.getElementById("hold-button").addEventListener("click", changePlayer);
document.getElementById("reset").addEventListener("click", reset);

let playerScores = [0, 0];
let currentPlayer = 0;
let currentScore = 0;

window.onload = function () {
  document.getElementById("roll-button").removeAttribute("class", "hidden");
  document.getElementById("hold-button").removeAttribute("class", "hidden");
  document.getElementById("rollem").removeAttribute("class", "hidden");
  document.getElementById("dang").setAttribute("class", "hidden");
}

function playDice() {
  let diceValue1 = rollDice();
  let diceValue2 = rollDice();
  let showRoll = document.getElementById("showRoll");
  showRoll.innerText = "Your Roll:" + diceValue1 + " and " + diceValue2;
  let diceImage1 = document.createElement("img");
  let diceImage2 = document.createElement("img");
  let lineBreak = document.createElement("br");
  diceImage1.src = "img/dice" + diceValue1 + ".png";
  diceImage2.src = "img/dice" + diceValue2 + ".png";
  showRoll.appendChild(lineBreak);
  showRoll.appendChild(diceImage1);
  showRoll.appendChild(diceImage2);


  if (diceValue1 === 1 || diceValue2 === 1) {
    document.getElementById("bust").removeAttribute("class", "hidden");
    currentScore = 0;
    changePlayer(currentPlayer, playerScores);
  }
  else {
    currentScore += diceValue1 + diceValue2;
    document.getElementById("bust").setAttribute("class", "hidden");
    document.getElementById("tempScoreNumber").textContent = currentScore;
    document.getElementById("tempScore").classList.remove("hidden");
  }                              

  if (playerScores[currentPlayer] + currentScore >= 100) {
    console.log(([currentPlayer] + 1) + " wins");
    document.getElementById("player" + (currentPlayer + 1)).textContent = playerScores[currentPlayer] + currentScore;
    endGame();
  }
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;

}
function reset() {
  currentPlayer = 0;
  playerScores = [0, 0];
  currentScore = 0;
  document.getElementById("player1").textContent = "0";
  document.getElementById("player2").textContent = "0";
  document.getElementById("reset").classList.add("hidden");
  document.getElementById("roll-button").classList.remove("hidden");
  document.getElementById("hold-button").classList.remove("hidden");
  document.getElementById("rollem").classList.remove("hidden");
  document.getElementById("dang").classList.add("hidden");
}


function changePlayer() {
  playerScores[currentPlayer] += currentScore;
  if (currentScore === 0) {
    playerScores[currentPlayer] = 0;
  }
  document.getElementById("player" + (currentPlayer + 1)).textContent = playerScores[currentPlayer];
  currentScore = 0;
  if (currentPlayer === 0) {
    currentPlayer = 1;
    document.getElementById("player").textContent = currentPlayer + 1;
  } else {
    currentPlayer = 0;
    document.getElementById("tempScore").classList.add("hidden");
    document.getElementById("player").textContent = currentPlayer + 1;
  }
}

function endGame() {
  document.getElementById("roll-button").classList.add("hidden");
  document.getElementById("hold-button").classList.add("hidden");
  document.getElementById("rollem").classList.add("hidden");
  document.getElementById("reset").classList.remove("hidden");
}