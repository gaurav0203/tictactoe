let gameState = 1; // 1 start to begin 2 ongoing resgin 3 ended reset
let playerTurn = 1;
let clickId = "";

let gameBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let player1Moves = [];
let player2Moves = [];

const player1Title = document.getElementById("Player-1-Title");
const player2Title = document.getElementById("Player-2-Title");

const button = document.getElementsByClassName("btn")[0];
const stateTitle = document.getElementById("state-title");

const one = document.getElementById("_1");
const two = document.getElementById("_2");
const three = document.getElementById("_3");
const four = document.getElementById("_4");
const five = document.getElementById("_5");
const six = document.getElementById("_6");
const seven = document.getElementById("_7");
const eight = document.getElementById("_8");
const nine = document.getElementById("_9");
const finishLine = document.getElementsByClassName("finish-line");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const winnerTitle = document.getElementById("winner-title");

span.onclick = function () {
  modal.style.display = "none";
};

button.addEventListener("click", () => {
  if (gameState === 1) {
    button.innerHTML = "Resign";
    stateTitle.innerText = "Press Resign to Give UP !";
    gameState = 2;
    player1Title.classList.add("your-turn");
    player2Title.classList.add("not-your-turn");
  } else if (gameState === 2) {
    button.innerHTML = "Reset";
    stateTitle.innerText = "Press Reset to reset !";
    gameState = 3;
  } else if (gameState === 3) {
    reset();
  }
});
let finishLineIndex = null;
let draw = false;

function gameOver() {
  let gameOverBool = false;
  if (
    gameBoard[0][0] === gameBoard[0][1] &&
    gameBoard[0][1] === gameBoard[0][2] &&
    gameBoard[0][2] != 0
  ) {
    gameOverBool = true;
    finishLineIndex = 0;
  } else if (
    gameBoard[1][0] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[1][2] &&
    gameBoard[1][2] != 0
  ) {
    gameOverBool = true;
    finishLineIndex = 1;
  } else if (
    gameBoard[2][0] === gameBoard[2][1] &&
    gameBoard[2][1] === gameBoard[2][2] &&
    gameBoard[2][2] != 0
  ) {
    gameOverBool = true;
    finishLineIndex = 2;
  } else if (
    gameBoard[0][0] === gameBoard[1][0] &&
    gameBoard[1][0] === gameBoard[2][0] &&
    gameBoard[2][0] != 0
  ) {
    gameOverBool = true;
    finishLineIndex = 3;
  } else if (
    gameBoard[0][1] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][1] &&
    gameBoard[2][1] != 0
  ) {
    gameOverBool = true;
    finishLineIndex = 4;
  } else if (
    gameBoard[0][2] === gameBoard[1][2] &&
    gameBoard[1][2] === gameBoard[2][2] &&
    gameBoard[2][2] != 0
  ) {
    gameOverBool = true;
    finishLineIndex = 5;
  } else if (
    gameBoard[0][0] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][2] &&
    gameBoard[2][2] != 0
  ) {
    gameOverBool = true;
    finishLineIndex = 7;
  } else if (
    gameBoard[0][2] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][0] &&
    gameBoard[2][0] != 0
  ) {
    gameOverBool = true;
    finishLineIndex = 6;
  } else if (numOfOccupiedSquares() === 9) {
    gameOverBool = true;
    draw = true;
    gameState = 3;
    winnerTitle.innerText = "Game is DRAW !";
    modal.style.display = "block";
    button.innerHTML = "Reset";
    stateTitle.innerText = "Press Reset to reset !";
  }
  console.log(gameOverBool);
  console.log(gameBoard[0]);
  if (gameOverBool && !draw) {
    gameState = 3;
    button.innerHTML = "Reset";
    stateTitle.innerText = "Press Reset to reset !";
    const winner = playerTurn === 1 ? 2 : 1;
    console.log("Winner:" + winner);
    winnerTitle.innerText = "Player " + winner + " has won !";
    modal.style.display = "block";
    finishLine[finishLineIndex].classList.add("make-visible");
  }

  return gameOverBool;
}
function classAdder(InnerElementId) {
  const element = document.getElementById(InnerElementId);
  if (playerTurn === 1) {
    element.classList.add("cross-mark");
  } else {
    element.classList.add("circle");
  }
}
window.onclick = (e) => {
  clickId = e.target.id;
  console.log(clickId);
  if (e.target == modal) {
    modal.style.display = "none";
  }
  console.log(e.target);
  if (gameState === 2) {
    turnHighlighter();
    gameBegin();
  }
};
function gameBegin() {
  switch (clickId) {
    case "_1-1":
      if (gameBoard[0][0] === 0) {
        gameBoard[0][0] = playerTurn;
        classAdder("_1");
        playerTurn === 1 ? player1Moves.push("1") : player2Moves.push("1");
        playerTurn === 1 ? (playerTurn = 2) : (playerTurn = 1);
      }

      break;
    case "_1-2":
      if (gameBoard[0][1] === 0) {
        gameBoard[0][1] = playerTurn;
        classAdder("_2");
        playerTurn === 1 ? player1Moves.push("2") : player2Moves.push("2");

        playerTurn === 1 ? (playerTurn = 2) : (playerTurn = 1);
      }

      break;
    case "_1-3":
      if (gameBoard[0][2] === 0) {
        gameBoard[0][2] = playerTurn;
        classAdder("_3");
        playerTurn === 1 ? player1Moves.push("3") : player2Moves.push("3");

        playerTurn === 1 ? (playerTurn = 2) : (playerTurn = 1);
      }

      break;
    case "_2-1":
      if (gameBoard[1][0] === 0) {
        gameBoard[1][0] = playerTurn;
        classAdder("_4");
        playerTurn === 1 ? player1Moves.push("4") : player2Moves.push("4");

        playerTurn === 1 ? (playerTurn = 2) : (playerTurn = 1);
      }

      break;
    case "_2-2":
      if (gameBoard[1][1] === 0) {
        gameBoard[1][1] = playerTurn;
        classAdder("_5");
        playerTurn === 1 ? player1Moves.push("5") : player2Moves.push("5");

        playerTurn === 1 ? (playerTurn = 2) : (playerTurn = 1);
      }

      break;
    case "_2-3":
      if (gameBoard[1][2] === 0) {
        gameBoard[1][2] = playerTurn;
        classAdder("_6");
        playerTurn === 1 ? player1Moves.push("6") : player2Moves.push("6");

        playerTurn === 1 ? (playerTurn = 2) : (playerTurn = 1);
      }

      break;
    case "_3-1":
      if (gameBoard[2][0] === 0) {
        gameBoard[2][0] = playerTurn;
        classAdder("_7");
        playerTurn === 1 ? player1Moves.push("7") : player2Moves.push("7");

        playerTurn === 1 ? (playerTurn = 2) : (playerTurn = 1);
      }

      break;
    case "_3-2":
      if (gameBoard[2][1] === 0) {
        gameBoard[2][1] = playerTurn;
        classAdder("_8");
        playerTurn === 1 ? player1Moves.push("8") : player2Moves.push("8");

        playerTurn === 1 ? (playerTurn = 2) : (playerTurn = 1);
      }

      break;
    case "_3-3":
      if (gameBoard[2][2] === 0) {
        gameBoard[2][2] = playerTurn;
        classAdder("_9");
        playerTurn === 1 ? player1Moves.push("9") : player2Moves.push("9");

        playerTurn === 1 ? (playerTurn = 2) : (playerTurn = 1);
      }

      break;
  }
  updatePlayerMoves();
  turnHighlighter();
  gameOver();
}

function reset() {
  gameBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  for (let i = 1; i <= 9; i++) {
    const element = document.getElementById("_" + i);
    element.className = "";
  }
  player1Title.className = "";
  player2Title.className = "";
  player1Moves = [];
  player2Moves = [];
  button.innerHTML = "Start";
  stateTitle.innerHTML = "Press Start to Begin !";
  gameState = 1;
  playerTurn = 1;

  updatePlayerMoves();
  !draw && finishLine[finishLineIndex].classList.remove("make-visible");
  draw = false;
}

function updatePlayerMoves() {
  const player1 = document.getElementById("Player-1-Moves");
  const player2 = document.getElementById("Player-2-Moves");
  player1.innerHTML = player1Moves
    .map((num) => "<li>" + num + "</li>")
    .join("");

  player2.innerHTML = player2Moves
    .map((num) => "<li>" + num + "</li>")
    .join("");
}

function numOfOccupiedSquares() {
  let num = 0;
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[0].length; j++) {
      if (gameBoard[i][j] != 0) {
        num++;
      }
    }
  }
  return num;
}

function turnHighlighter() {
  if (playerTurn === 1) {
    player1Title.classList.add("your-turn");
    player2Title.classList.remove("your-turn");
    player1Title.classList.remove("not-your-turn");
    player2Title.classList.add("not-your-turn");
  } else {
    player1Title.classList.remove("your-turn");
    player2Title.classList.add("your-turn");
    player1Title.classList.add("not-your-turn");
    player2Title.classList.remove("not-your-turn");
  }
}
