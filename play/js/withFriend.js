const playerTurn = document.getElementById("player-turn");
const newGameButton = document.getElementById("newgameButton");
const toggleButton = document.getElementById("toggleButton");
const tooltipText = document.getElementById("tooltipText");
const soundtoggleButton = document.getElementById("soundtoggleButton");
const soundTooltipText = document.getElementById("soundTooltipText");
const resetButton = document.getElementById("resetButton");
const undoButton = document.getElementById("undoButton");
const redoButton = document.getElementById("redoButton");
const resignButton = document.getElementById("resignButton");
const castSpellButton = document.getElementById("castspellButton");
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const swapButton = document.getElementById("swapButton");
const moveHistoryDisplay = document.getElementById("game-history");

const popupBox = document.getElementById("popup-box");
const popupTitle = document.getElementById("popup-title");
const popupSubtitle = document.getElementById("popup-subtitle");
const playAgainButton = document.getElementById("play-again-button");
const quitButton = document.getElementById("quit-button");
const replayButton = document.getElementById("replayButton");

const soundMove = document.getElementById("sound-move");
const soundBullet = document.getElementById("sound-bullet");
const soundTitanHit = document.getElementById("sound-titan-hit");
const soundGameOver = document.getElementById("sound-game-over");
const soundGameStart = document.getElementById("sound-game-start");
// const backgroundMusic = document.getElementById("background-music");
// Heavy audio file causing lag in toggle and its good without background music

newGameButton.addEventListener("click", newGame);
toggleButton.addEventListener("click", toggleGameState);
soundtoggleButton.addEventListener("click", toggleSound);
resetButton.addEventListener("click", resetGame);
undoButton.addEventListener("click", undoMove);
redoButton.addEventListener("click", redoMove);
resignButton.addEventListener("click", resignGame);
castSpellButton.addEventListener("click", castSpell);
leftButton.addEventListener("click", () => rotatePiece(-90));
rightButton.addEventListener("click", () => rotatePiece(90));
swapButton.addEventListener("click", enableSwapMode);
replayButton.addEventListener("click", replayGame);
quitButton.addEventListener("click", quitGame);
playAgainButton.addEventListener("click", newGame);

let currentPlayer = "blue";
let moveHistory = JSON.parse(localStorage.getItem("moveHistory")) || [];
let currentMoveIndex = moveHistory.length - 1;
let highlightedSquares = [];
let gameReplay = [];
let timers = {
  blue: 300,
  red: 300,
};
let currentPlayerTimer;
let timeLeft = 300;
let spellUsed = {
  blue: false,
  red: false,
};
let passThroughSpellActive = false;
let isGamePaused = false;
let isGameOver = false;
let bulletMoving = false;
let isMuted = false;
let swapModeEnabled = false;
let selectedPieceId;
let selectedSquareId;
let replayMovesOver = false;

function createBoard(boardConfig) {
	const gameBoard = document.querySelector("#gameboard");
	gameBoard.innerHTML = "";
	boardConfig.forEach((startPiece, i) => {
	  const square = document.createElement("div");
	  square.classList.add("square");
	  square.setAttribute("square-id", i);
	  square.innerHTML = startPiece;
	  gameBoard.append(square);
	});
	document.querySelectorAll(".piece").forEach((piece) => {
	  piece.addEventListener("click", handlePieceClick);
	});
  }

function handlePieceClick(event) {
  const piece = event.target.closest(".piece");
  const square = piece.parentElement;
  const squareId = parseInt(square.getAttribute("square-id"));

  if (isGamePaused || bulletMoving) {
    return;
  }
  if (piece.classList.contains(currentPlayer)) {
    if (piece.id === "ricochet" || piece.id === "semiricochet") {
      leftButton.style.display = "inline-block";
      rightButton.style.display = "inline-block";
      leftButton.setAttribute("data-piece-id", piece.id);
      leftButton.setAttribute("data-square-id", squareId);
      rightButton.setAttribute("data-piece-id", piece.id);
      rightButton.setAttribute("data-square-id", squareId);
      leftButton.disabled = false;
      rightButton.disabled = false;
      leftButton.style.removeProperty("cursor");
      rightButton.style.removeProperty("cursor");
    } else {
      leftButton.style.cursor = "not-allowed";
      leftButton.disabled = true;
      rightButton.style.cursor = "not-allowed";
      rightButton.disabled = true;
    }
    if (piece.id === "ricochet") {
      swapButton.style.display = "inline-block";
      swapButton.disabled = false;
      swapButton.style.removeProperty("cursor");
      selectedPieceId = piece.id;
      selectedSquareId = squareId;
    } else {
      swapButton.style.cursor = "not-allowed";
      swapButton.disabled = true;
    }
    if (passThroughSpellActive) {
      highlightSpellPossibleMoves(piece.id, squareId);
    } else {
      highlightPossibleMoves(piece.id, squareId);
    }
  } else {
    if (!swapModeEnabled) {
      return;
    }
  }
}

function rotatePiece(degrees) {
  const pieceId =
    degrees === -90
      ? leftButton.getAttribute("data-piece-id")
      : rightButton.getAttribute("data-piece-id");
  const squareId =
    degrees === -90
      ? parseInt(leftButton.getAttribute("data-square-id"))
      : parseInt(rightButton.getAttribute("data-square-id"));
  if (isGamePaused || bulletMoving) {
    return;
  }
  if (pieceId === "ricochet" || pieceId === "semiricochet") {
    const piece = document.querySelector(
      `.square[square-id='${squareId}'] .piece`,
    );
    if (piece && piece.classList.contains(currentPlayer)) {
      const currentRotation = parseInt(
        piece.getAttribute("data-rotation") || "0",
      );
      const newRotation = (currentRotation + degrees + 360) % 360;
      piece.style.transform = `rotate(${newRotation}deg)`;
      piece.setAttribute("data-rotation", newRotation);

      saveMoveHistory(squareId, squareId, degrees);
      switchPlayer();
      shootBulletForCurrentPlayer();
    }
  }
}

function highlightPossibleMoves(pieceId, squareId) {
  const possibleMoves = getPossibleMoves(pieceId, squareId);
  document.querySelectorAll(".square").forEach((square) => {
    square.classList.remove("highlight");
    square.removeEventListener("click", handleSquareClick);
  });

  possibleMoves.forEach((move) => {
    const targetSquare = document.querySelector(`.square[square-id='${move}']`);
    if (targetSquare) {
      targetSquare.classList.add("highlight");
      targetSquare.addEventListener("click", handleSquareClick);
    }
  });

  function handleSquareClick(event) {
    movePiece(squareId, parseInt(event.target.getAttribute("square-id")));
    document.querySelectorAll(".square").forEach((square) => {
      square.classList.remove("highlight");
      square.removeEventListener("click", handleSquareClick);
    });
  }
}

function enableSwapMode() {
  if (swapModeEnabled) {
    swapModeEnabled = false;
    document.querySelectorAll(".square").forEach((square) => {
      square.classList.remove("highlight-swap");
      square.removeEventListener("click", handleSwapClick);
    });
  } else {
    swapModeEnabled = true;
    document.querySelectorAll(".square").forEach((square) => {
      const piece = square.firstChild;
      if (piece && piece.id !== "titan" && piece.id !== "canon") {
        square.classList.add("highlight-swap");
        square.addEventListener("click", handleSwapClick);
      }
    });
  }
}

function handleSwapClick(event) {
  if (isGamePaused || bulletMoving) {
    return;
  }
  if (!swapModeEnabled) return;

  const targetSquare = event.target.closest(".square");
  const targetSquareId = parseInt(targetSquare.getAttribute("square-id"));

  if (selectedSquareId === targetSquareId) return;

  swapPieces(selectedSquareId, targetSquareId);
  swapModeEnabled = false;

  document.querySelectorAll(".square").forEach((square) => {
    square.classList.remove("highlight-swap", "highlight");
    square.removeEventListener("click", handleSwapClick);
  });
  swapButton.style.cursor = "not-allowed";
  swapButton.disabled = true;
}

function swapPieces(fromSquareId, toSquareId) {
	if (isGamePaused || bulletMoving) {
	  return;
	}
	const fromSquare = document.querySelector(`.square[square-id='${fromSquareId}']`);
	const toSquare = document.querySelector(`.square[square-id='${toSquareId}']`);
	const tempPiece = toSquare.innerHTML;
	toSquare.innerHTML = fromSquare.innerHTML;
	fromSquare.innerHTML = tempPiece;
  
	const swappedPieces = [fromSquare.firstChild, toSquare.firstChild];
	swappedPieces.forEach(piece => {
	  if (piece) {
		piece.addEventListener("click", handlePieceClick);
	  }
	});
  
	saveMoveHistory(fromSquareId, toSquareId, 0, "swap");
	switchPlayer();
	shootBulletForCurrentPlayer();
  }

function switchPlayer() {
  currentPlayer = currentPlayer === "blue" ? "red" : "blue";
  playerTurn.textContent = `${currentPlayer}`;
  playerTurn.style.color = currentPlayer;
  updateShadowColor();
}

function movePiece(fromSquareId, toSquareId) {
  playSound(soundMove);
  const fromSquare = document.querySelector(
    `.square[square-id='${fromSquareId}']`,
  );
  const toSquare = document.querySelector(`.square[square-id='${toSquareId}']`);
  const piece = fromSquare.firstChild;

  if (isGamePaused || bulletMoving) {
    return;
  }
  if (passThroughSpellActive) {
    if (piece && piece.classList.contains(currentPlayer)) {
      toSquare.innerHTML = "";
      toSquare.appendChild(piece);
      fromSquare.innerHTML = "";

	  const movedPiece = toSquare.firstChild;
      movedPiece.addEventListener("click", handlePieceClick);

      saveMoveHistory(fromSquareId, toSquareId);
      switchPlayer();
      shootBulletForCurrentPlayer();
    }
  } else {
    if (piece && piece.classList.contains(currentPlayer)) {
      toSquare.innerHTML = "";
      toSquare.appendChild(piece);
      fromSquare.innerHTML = "";

	  const movedPiece = toSquare.firstChild;
      movedPiece.addEventListener("click", handlePieceClick);

      saveMoveHistory(fromSquareId, toSquareId);
      switchPlayer();
      shootBulletForCurrentPlayer();
    }
  }
}

function shootBullet(squareId, direction, player) {
  playSound(soundBullet);
  const targetSquare = document.querySelector(
    `.square[square-id='${squareId}']`,
  );
  const bulletDiv = document.createElement("div");
  bulletDiv.classList.add("bullet");
  bulletDiv.classList.add(`${player}`);
  bulletDiv.innerHTML = bullet;
  targetSquare.appendChild(bulletDiv);
  bulletMoving = true;
  setTimeout(() => {
    moveBullet(squareId, direction, player);
  }, 100);
}

function moveBullet(squareId, direction, player) {
  const currentSquare = document.querySelector(
    `.square[square-id='${squareId}']`,
  );
  const bulletDiv = currentSquare.querySelector(".bullet");
  if (bulletDiv) {
    bulletDiv.remove();
    let nextSquareId;

    bulletDiv.classList.remove(
      "from-top",
      "from-bottom",
      "from-left",
      "from-right",
    );
    switch (direction) {
      case "top":
        nextSquareId = squareId - 8;
        bulletDiv.classList.add("from-bottom");
        break;
      case "bottom":
        nextSquareId = squareId + 8;
        bulletDiv.classList.add("from-top");
        break;
      case "left":
        nextSquareId = squareId - 1;
        bulletDiv.classList.add("from-right");
        break;
      case "right":
        nextSquareId = squareId + 1;
        bulletDiv.classList.add("from-left");
        break;
      default:
        nextSquareId = squareId;
    }

    if (
      nextSquareId >= 0 &&
      nextSquareId < 64 &&
      !isEdgeOfBoard(squareId, direction)
    ) {
      const nextSquare = document.querySelector(
        `.square[square-id='${nextSquareId}']`,
      );
      if (nextSquare) {
        if (
          nextSquare.firstChild &&
          nextSquare.firstChild.classList.contains("piece")
        ) {
          handleBulletCollision(
            nextSquare,
            nextSquare.firstChild,
            bulletDiv,
            player,
          );
          return;
        } else {
          nextSquare.appendChild(bulletDiv);
          setTimeout(() => {
            moveBullet(nextSquareId, direction, player);
          }, 100);
        }
      }
    } else {
      bulletDiv.remove();
      bulletMoving = false;
    }
  }
}

function deflectBullet(piece, position, bulletDiv, player) {
  const pieceId = piece.id;
  const rotation = parseInt(piece.getAttribute("data-rotation") || "0");
  let newBulletDirection;

  const deflectionMap = {
    ricochet: {
      0: {
        "from-bottom": "right",
        "from-top": "left",
        "from-left": "top",
        "from-right": "bottom",
      },
      90: {
        "from-bottom": "left",
        "from-top": "right",
        "from-left": "bottom",
        "from-right": "top",
      },
      180: {
        "from-bottom": "right",
        "from-top": "left",
        "from-left": "top",
        "from-right": "bottom",
      },
      270: {
        "from-bottom": "left",
        "from-top": "right",
        "from-left": "bottom",
        "from-right": "top",
      },
    },
    semiricochet: {
      0: {
        "from-bottom": null,
        "from-top": "left",
        "from-left": "top",
        "from-right": null,
      },
      90: {
        "from-bottom": null,
        "from-top": "right",
        "from-left": null,
        "from-right": "top",
      },
      180: {
        "from-bottom": "right",
        "from-top": null,
        "from-left": null,
        "from-right": "bottom",
      },
      270: {
        "from-bottom": "left",
        "from-top": null,
        "from-left": null,
        "from-right": "top",
      },
    },
    titan: {
      0: {
        "from-bottom": "top",
        "from-top": "bottom",
        "from-left": "right",
        "from-right": "left",
      },
    },
    tank: {
      0: {
        "from-bottom": "top",
        "from-top": "bottom",
        "from-left": "right",
        "from-right": "left",
      },
    },
    canon: {
      0: {
        "from-bottom": "top",
        "from-top": "bottom",
        "from-left": "right",
        "from-right": "left",
      },
    },
  };

  const bulletDirectionClass = Array.from(bulletDiv.classList).find((c) =>
    c.startsWith("from-"),
  );
  newBulletDirection = deflectionMap[pieceId][rotation][bulletDirectionClass];
  if (newBulletDirection === null) {
	destroyPiece(position, bulletDiv, player);
    bulletMoving = false;
    return;
  }

  if (newBulletDirection) {
    bulletDiv.classList.remove(
      "from-top",
      "from-bottom",
      "from-left",
      "from-right",
    );
    const newSquareId = getNextSquareId(position, newBulletDirection);
    if (
      isValidBulletSquare(newSquareId) &&
      !isEdgeOfBoard(position, newBulletDirection)
    ) {
      const newSquare = document.querySelector(
        `.square[square-id='${newSquareId}']`,
      );
      const newTargetPiece = newSquare.firstChild;

      if (newTargetPiece) {
        handleBulletCollision(newSquare, newTargetPiece, bulletDiv, player);
      } else {
        newSquare.appendChild(bulletDiv);
        setTimeout(() => {
          moveBullet(newSquareId, newBulletDirection, player);
        }, 100);
      }
    } else {
      bulletDiv.remove();
      bulletMoving = false;
    }
  } else {
    bulletDiv.remove();
    bulletMoving = false;
  }
}

function destroyPiece(squareId, bulletDiv, player) {
	const square = document.querySelector(`.square[square-id='${squareId}']`);
	const destroyedPieceHTML = square.innerHTML;
	const destroyedPiece = square.firstChild;
	const destroyedPieceClone = destroyedPiece.cloneNode(true);
	square.innerHTML = "";
	bulletDiv.remove();
	saveMoveHistory(null, squareId, 0, "destroy", destroyedPieceHTML);
	bulletMoving = false;
  }

function isEdgeOfBoard(squareId, direction) {
  switch (direction) {
    case "top":
      return squareId < 8;
    case "bottom":
      return squareId >= 56;
    case "left":
      return squareId % 8 === 0;
    case "right":
      return squareId % 8 === 7;
    default:
      return false;
  }
}

function shootBulletForCurrentPlayer() {
  const canonSquareId = findCanonSquare();
  const playerBullet = currentPlayer === "blue" ? "red" : "blue";
  if (canonSquareId !== null) {
    const direction = currentPlayer === "blue" ? "bottom" : "top";
    shootBullet(canonSquareId, direction, playerBullet);
  }
}

function findCanonSquare() {
  const squares = document.querySelectorAll(".square");
  const newCanonPlayer = currentPlayer === "blue" ? "red" : "blue";
  let movePlayerCanonId = null;

  squares.forEach((square) => {
    const piece = square.firstChild;
    if (
      piece &&
      piece.id === "canon" &&
      piece.classList.contains(newCanonPlayer)
    ) {
      movePlayerCanonId = parseInt(square.getAttribute("square-id"));
    }
  });

  return movePlayerCanonId;
}

function handleBulletCollision(square, piece, bulletDiv, player) {
  const pieceId = piece.id;
  if (pieceId === "tank") {
    checkForEnemyPiece(square, piece, bulletDiv, player);
  } else if (pieceId === "titan") {
    checkForEnemyPiece(square, piece, bulletDiv, player);
  } else if (pieceId === "ricochet" || pieceId === "semiricochet") {
    deflectBullet(
      piece,
      parseInt(square.getAttribute("square-id")),
      bulletDiv,
      player,
    );
  } else {
    bulletDiv.remove();
    bulletMoving = false;
  }
}

function checkForEnemyPiece(square, piece, bulletDiv, player) {
  const pieceId = piece.id;
  const playerPiece = square.firstChild.classList[1];
  const playerBullet = player;
  if (pieceId === "tank") {
    if (!(playerPiece === playerBullet)) {
      bulletDiv.remove();
      bulletMoving = false;
    } else {
      deflectBullet(
        piece,
        parseInt(square.getAttribute("square-id")),
        bulletDiv,
        player,
      );
    }
  } else if (pieceId === "titan") {
    if (!(playerPiece === playerBullet)) {
      playSound(soundTitanHit);
      square.innerHTML = rip;
      bulletMoving = false;
      setTimeout(() => {
        playSound(soundGameOver);
      }, 250);
      setTimeout(() => {
        displayResult(`${currentPlayer === "blue" ? "red" : "blue"} wins!`);
      }, 500);
    } else {
      deflectBullet(
        piece,
        parseInt(square.getAttribute("square-id")),
        bulletDiv,
        player,
      );
    }
  }
}

function getNextSquareId(squareId, direction) {
  switch (direction) {
    case "top":
      return squareId - 8;
    case "bottom":
      return squareId + 8;
    case "left":
      return squareId - 1;
    case "right":
      return squareId + 1;
  }
}

function isValidBulletSquare(squareId) {
  return squareId >= 0 && squareId < 64;
}

function displayMoveHistory() {
  moveHistoryDisplay.innerHTML = "";
  moveHistory.forEach((move, index) => {
    const moveText = formatMove(move);
    const moveElement = document.createElement("div");
    moveElement.className = `move ${move.player}-move`;
    if (move.type) {
      moveElement.textContent = `${index + 1}. ${move.player} ${move.type} from ${move.from} to ${move.to}`;
    } else {
      moveElement.textContent = `${index + 1}. ${move.player} ${moveText}`;
    }
    moveElement.addEventListener("mouseenter", () => highlightMove(move));
    moveElement.addEventListener("mouseleave", () => clearHighlight());
    moveElement.addEventListener("click", () => highlightMove(move));
    moveHistoryDisplay.appendChild(moveElement);
  });
}

function formatMove(move) {
  const fromNotation = squareIdToChessNotation(move.from);
  const toNotation = squareIdToChessNotation(move.to);
  if (move.rotation !== 0) {
    const rotationDirection = move.rotation > 0 ? "right" : "left";
    return `Rotated ${rotationDirection} at ${fromNotation}`;
  } else {
    return `${fromNotation} to ${toNotation}`;
  }
}

function squareIdToChessNotation(squareId) {
  const file = String.fromCharCode(97 + (squareId % 8));
  const rank = 8 - Math.floor(squareId / 8);
  return `${file}${rank}`;
}

function highlightMove(move) {
  clearHighlight();
  const fromSquare = document.querySelector(
    `.square[square-id='${move.from}']`,
  );
  const toSquare = document.querySelector(`.square[square-id='${move.to}']`);
  if (fromSquare) fromSquare.classList.add("highlight-move");
  if (toSquare) toSquare.classList.add("highlight-move");
}

function clearHighlight() {
  document.querySelectorAll(".square").forEach((square) => {
    square.classList.remove("highlight-move");
  });
}

function saveMoveHistory(
  fromSquareId,
  toSquareId,
  rotation = 0,
  moveType = "move",
  destroyedPiece = null
) {
  const move = {
    from: fromSquareId,
    to: toSquareId,
    rotation,
    type: moveType,
    player: currentPlayer,
	destroyedPiece,
  };
  if (currentMoveIndex < moveHistory.length - 1) {
    moveHistory = moveHistory.slice(0, currentMoveIndex + 1);
  }
  moveHistory.push(move);
  currentMoveIndex = moveHistory.length - 1;
  localStorage.setItem("moveHistory", JSON.stringify(moveHistory));
  displayMoveHistory();
}

function undoMove() {
  if (currentMoveIndex >= 0) {
    const lastMove = moveHistory[currentMoveIndex];
	if (lastMove.type === "destroy") {
		toSquare = document.querySelector(`.square[square-id='${lastMove.to}']`);
      toSquare.innerHTML = lastMove.destroyedPiece;
      piece = toSquare.firstChild;
      piece.addEventListener("click", handlePieceClick);
	  } else if (lastMove.type === "swap") {
      const fromSquare = document.querySelector(
        `.square[square-id='${lastMove.to}']`,
      );
      const toSquare = document.querySelector(
        `.square[square-id='${lastMove.from}']`,
      );
      const fromPiece = fromSquare.firstChild;
      const toPiece = toSquare.firstChild;

      if (fromPiece) {
        toSquare.appendChild(fromPiece);
      }
      if (toPiece) {
        fromSquare.appendChild(toPiece);
      }
    } else {
      const fromSquare = document.querySelector(
        `.square[square-id='${lastMove.to}']`,
      );
      const toSquare = document.querySelector(
        `.square[square-id='${lastMove.from}']`,
      );
      const piece = fromSquare.firstChild;

      if (lastMove.rotation !== 0) {
        toSquare.appendChild(piece);
        fromSquare.appendChild(piece);
      } else if (piece) {
        toSquare.appendChild(piece);
        fromSquare.innerHTML = "";
      }
      if (lastMove.rotation !== 0) {
        const currentRotation = parseInt(
          piece.getAttribute("data-rotation") || "0",
        );
        const newRotation = (currentRotation - lastMove.rotation + 360) % 360;
        piece.style.transform = `rotate(${newRotation}deg)`;
        piece.setAttribute("data-rotation", newRotation);
      }
    }

    currentMoveIndex--;
    switchPlayer();
    displayMoveHistory();
  }
}

function redoMove() {
  if (currentMoveIndex < moveHistory.length - 1) {
    currentMoveIndex++;
    const nextMove = moveHistory[currentMoveIndex];

    if (nextMove.type === "destroy") {
		toSquare = document.querySelector(`.square[square-id='${nextMove.to}']`);
      toSquare.innerHTML = "";
	  } else if (nextMove.type === "swap") {
      const fromSquare = document.querySelector(
        `.square[square-id='${nextMove.from}']`,
      );
      const toSquare = document.querySelector(
        `.square[square-id='${nextMove.to}']`,
      );
      const fromPiece = fromSquare.firstChild;
      const toPiece = toSquare.firstChild;

      if (fromPiece) {
        toSquare.appendChild(fromPiece);
      }
      if (toPiece) {
        fromSquare.appendChild(toPiece);
      }
    } else {
      const fromSquare = document.querySelector(
        `.square[square-id='${nextMove.from}']`,
      );
      const toSquare = document.querySelector(
        `.square[square-id='${nextMove.to}']`,
      );
      const piece = fromSquare.firstChild;

      if (nextMove.rotation !== 0) {
        toSquare.appendChild(piece);
        fromSquare.appendChild(piece);
      } else if (piece) {
        toSquare.appendChild(piece);
        fromSquare.innerHTML = "";
      }
      if (nextMove.rotation !== 0) {
        const currentRotation = parseInt(
          piece.getAttribute("data-rotation") || "0",
        );
        const newRotation = (currentRotation + nextMove.rotation + 360) % 360;
        piece.style.transform = `rotate(${newRotation}deg)`;
        piece.setAttribute("data-rotation", newRotation);
      }
    }

    switchPlayer();
    displayMoveHistory();
  }
}

function updateBoardFromHistory() {
	createBoard(initialBoardState);
  for (let i = 0; i <= currentMoveIndex; i++) {
    const move = moveHistory[i];
    if (move.type === "swap") {
      const fromSquare = document.querySelector(
        `.square[square-id='${move.from}']`,
      );
      const toSquare = document.querySelector(
        `.square[square-id='${move.to}']`,
      );
      const fromPiece = fromSquare.firstChild;
      const toPiece = toSquare.firstChild;

      if (fromPiece) {
        toSquare.appendChild(fromPiece);
      }
      if (toPiece) {
        fromSquare.appendChild(toPiece);
      }
    } else {
      const fromSquare = document.querySelector(
        `.square[square-id='${move.from}']`,
      );
      const toSquare = document.querySelector(
        `.square[square-id='${move.to}']`,
      );
      const piece = fromSquare.firstChild;

      if (move.rotation !== 0) {
        toSquare.appendChild(piece);
        fromSquare.appendChild(piece);
      } else if (piece) {
        toSquare.appendChild(piece);
        fromSquare.innerHTML = "";
      }
      if (move.rotation !== 0) {
        const currentRotation = parseInt(
          piece.getAttribute("data-rotation") || "0",
        );
        const newRotation = (currentRotation + move.rotation + 360) % 360;
        piece.style.transform = `rotate(${newRotation}deg)`;
        piece.setAttribute("data-rotation", newRotation);
      }
    }
  }
  switchPlayer();
}

function replayGame() {
	hidePopup();
	isGamePaused = true;
	currentMoveIndex = -1;
	createBoard(initialBoardState);
	let moveIndex = 0;
  
	function playNextMove() {
	  if (moveIndex < moveHistory.length) {
		const move = moveHistory[moveIndex];
		const fromSquare = document.querySelector(
		  `.square[square-id='${move.from}']`,
		);
		const toSquare = document.querySelector(
		  `.square[square-id='${move.to}']`,
		);
  
		if (move.type === "destroy") {
		  toSquare.innerHTML = "";
		} else if (move.type === "swap") {
		  const fromPiece = fromSquare.firstChild;
		  const toPiece = toSquare.firstChild;
  
		  if (fromPiece) {
			toSquare.appendChild(fromPiece);
		  }
		  if (toPiece) {
			fromSquare.appendChild(toPiece);
		  }
		} else {
		  const piece = fromSquare ? fromSquare.firstChild : null;
		  if (move.rotation !== 0) {
			toSquare.appendChild(piece);
			fromSquare.appendChild(piece);
		  } else if (piece) {
			toSquare.appendChild(piece);
			fromSquare.innerHTML = "";
		  }
		  if (move.rotation !== 0) {
			const currentRotation = parseInt(
			  piece.getAttribute("data-rotation") || "0",
			);
			const newRotation = (currentRotation + move.rotation + 360) % 360;
			piece.style.transform = `rotate(${newRotation}deg)`;
			piece.setAttribute("data-rotation", newRotation);
		  }
		}
  
		switchPlayer();
		moveIndex++;
		setTimeout(playNextMove, 500);
	  } else {
		isGamePaused = false;
		replayMovesOver = true;
		replayOver();
	  }
	}
	playNextMove();
  }

function resignGame() {
  checkGameOver(
    "Game Over",
    `Player ${currentPlayer} resigns. Player ${currentPlayer === "blue" ? "red" : "blue"} wins!`,
  );
}

function getPossibleMoves(pieceId, squareId) {
  const row = Math.floor(squareId / 8);
  const col = squareId % 8;
  const moves = [];

  switch (pieceId) {
    case "tank":
      addAdjacentMoves(moves, row, col);
      break;
    case "titan":
      addAdjacentMoves(moves, row, col);
      break;
    case "canon":
      addHorizontalMoves(moves, row, col);
      break;
    case "ricochet":
    case "semiricochet":
      addAllDirectionsMoves(moves, row, col);
      break;
  }

  if (passThroughSpellActive) {
    return moves;
  } else {
    return moves.filter((move) => {
      const targetSquare = document.querySelector(
        `.square[square-id='${move}']`,
      );
      return targetSquare && targetSquare.innerHTML === "";
    });
  }
}

function addAdjacentMoves(moves, row, col) {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];
  directions.forEach((direction) => {
    const newRow = row + direction[0];
    const newCol = col + direction[1];
    if (isValidSquare(newRow, newCol)) {
      moves.push(newRow * 8 + newCol);
    }
  });
}

function addHorizontalMoves(moves, row, col) {
  if (isValidSquare(row, col + 1)) moves.push(row * 8 + (col + 1));
  if (isValidSquare(row, col - 1)) moves.push(row * 8 + (col - 1));
}

function addAllDirectionsMoves(moves, row, col) {
  addAdjacentMoves(moves, row, col);
}

function isValidSquare(row, col) {
  return row >= 0 && row < 8 && col >= 0 && col < 8;
}

function displayResult(result) {
  checkGameOver("Game Over", `${result}`);
}

function startTimer() {
  clearInterval(currentPlayerTimer);
  currentPlayerTimer = setInterval(() => {
    if (timers[currentPlayer] > 0) {
      timers[currentPlayer]--;
      updateTimerDisplay();
    } else {
      clearInterval(currentPlayerTimer);
      checkGameOver("Time's up!", `Player ${currentPlayer} loses.`);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const bluetimerDisplay = document.getElementById("blue-timer-display");
  const redtimerDisplay = document.getElementById("red-timer-display");

  const blueMinutes = Math.floor(timers.blue / 60)
    .toString()
    .padStart(2, "0");
  const blueSeconds = (timers.blue % 60).toString().padStart(2, "0");
  const redMinutes = Math.floor(timers.red / 60)
    .toString()
    .padStart(2, "0");
  const redSeconds = (timers.red % 60).toString().padStart(2, "0");

  bluetimerDisplay.textContent = `${blueMinutes}:${blueSeconds}`;
  redtimerDisplay.textContent = `${redMinutes}:${redSeconds}`;
}

function newGame() {
  initialBoardState = initializeBoard();
  hidePopup();
  createBoard(initialBoardState);
  currentPlayer = "blue";
  playerTurn.textContent = `${currentPlayer}`;
  playerTurn.style.color = currentPlayer;
  moveHistory = [];
  currentMoveIndex = -1;
  isGamePaused = false;
  isGameOver = false;
  spellUsed = {
    blue: false,
    red: false,
  };
  passThroughSpellActive = false;
  clearInterval(currentPlayerTimer);
  timers = {
    blue: 300,
    red: 300,
  };
  displayMoveHistory();
  localStorage.removeItem("moveHistory");
  localStorage.removeItem("gameOverInfo");
  playSound(soundGameStart);
}

function toggleGameState() {
  if (isGamePaused) {
    startTimer();
    isGamePaused = false;
    toggleButton.innerHTML = '<i class="ri-pause-line"></i>';
    toggleButton.setAttribute("aria-label", "Pause");
    tooltipText.innerText = "Pause";
  } else {
    clearInterval(currentPlayerTimer);
    isGamePaused = true;
    toggleButton.innerHTML = '<i class="ri-play-line"></i>';
    toggleButton.setAttribute("aria-label", "Resume");
    tooltipText.innerText = "Resume";
  }

  toggleButton.disabled = true;
  setTimeout(() => {
    toggleButton.disabled = false;
  }, 2000);
}

function resetGame() {
  newGame();
}

function castSpell() {
  if (spellUsed[currentPlayer]) {
    alert("You have already used your spell.");
  } else {
    passThroughSpellActive = true;
    spellUsed[currentPlayer] = true;
    castSpellButton.disabled = true;
    castSpellButton.classList.add("disabled");
    castSpellButton.style.backgroundColor = "green";
  }
}

function deactivateSpell() {
  passThroughSpellActive = false;
  castSpellButton.disabled = false;
  castSpellButton.classList.remove("disabled");
  castSpellButton.style.backgroundColor = null;
}

function highlightSpellPossibleMoves(pieceId, squareId) {
  const possibleMoves = getPossibleMoves(pieceId, squareId);
  document.querySelectorAll(".square").forEach((square) => {
    square.classList.remove("highlight");
    square.removeEventListener("click", handleSquareClick);
  });

  const highlightedSquares = [];
  possibleMoves.forEach((move) => {
    const targetSquare = document.querySelector(`.square[square-id='${move}']`);
    if (targetSquare) {
      const targetPiece = targetSquare.firstChild
        ? targetSquare.firstChild.id
        : null;
      highlightedSquares.push({
        squareId: move,
        pieceId: targetPiece,
      });
      targetSquare.classList.add("highlight");
      targetSquare.addEventListener("click", handleSquareClick);
    }
  });

  if (passThroughSpellActive) {
    deactivateSpell();
    getPossibleMovesForAllPieces(squareId).forEach((move) => {
      const targetSquare = document.querySelector(
        `.square[square-id='${move}']`,
      );
      if (
        targetSquare &&
        !highlightedSquares.some((highlighted) => highlighted.squareId === move)
      ) {
        highlightedSquares.push({
          squareId: move,
          pieceId: null,
        });
        targetSquare.classList.add("highlight");
        targetSquare.addEventListener("click", handleSquareClick);
      }
    });
  }

  function handleSquareClick(event) {
    const clickedSquareId = parseInt(event.target.getAttribute("square-id"));
    movePiece(squareId, clickedSquareId);

    document.querySelectorAll(".square").forEach((square) => {
      square.classList.remove("highlight");
      square.removeEventListener("click", handleSquareClick);
    });
  }
}

function getPossibleMovesForAllPieces() {
  const allPossibleMoves = [];

  document.querySelectorAll(".highlight").forEach((square) => {
    const squareId = parseInt(square.getAttribute("square-id"));
    const piece = square.firstChild;

    if (piece) {
      const pieceId = piece.id;
      const possibleMoves = getPossibleMoves(pieceId, squareId);

      possibleMoves.forEach((move) => {
        allPossibleMoves.push(move);
      });
    }
  });

  return allPossibleMoves;
}

function quitGame() {
  localStorage.removeItem("moveHistory");
  localStorage.removeItem("gameOverInfo");
  window.location.href = "/";
}

function showPopup(title, subtitle) {
  popupTitle.textContent = title;
  popupSubtitle.textContent = subtitle;
  popupBox.style.display = "flex";
}

function hidePopup() {
  popupBox.style.display = "none";
}

function checkGameOver(title, subtitle) {
  localStorage.setItem("gameOverInfo", JSON.stringify({ title, subtitle }));
  const isGameOver = true;
  if (isGameOver) {
    showPopup(title, subtitle);
  }
}

function replayOver() {
  if (!localStorage.getItem("gameOverInfo") || replayMovesOver === false) {
    return;
  }
  const { title, subtitle } = JSON.parse(localStorage.getItem("gameOverInfo"));
  checkGameOver(title, subtitle);
}

function playSound(sound) {
  if (!isMuted) {
    sound.currentTime = 0;
    sound.play();
  }
}

function toggleSound() {
  isMuted = !isMuted;
  updateSoundButton();
}

function updateSoundButton() {
  if (isMuted) {
    soundtoggleButton.innerHTML = '<i class="ri-volume-mute-line"></i>';
    soundTooltipText.textContent = "Unmute";
  } else {
    soundtoggleButton.innerHTML = '<i class="ri-volume-up-line"></i>';
    soundTooltipText.textContent = "Mute";
  }
}

function updateShadowColor() {
  const gameboard = document.querySelector('#gameboard');
  
  if (currentPlayer === 'blue') {
    gameboard.style.boxShadow = `
      0 -5px 10px -3px transparent,
      0 5px 10px -3px blue         
    `;
  } else if (currentPlayer === 'red') {
    gameboard.style.boxShadow = `
      0 -5px 10px -3px red,          
      0 5px 10px -3px transparent  
    `;
  }
}

window.addEventListener("load", () => {
  localStorage.removeItem("moveHistory");
	localStorage.removeItem("gameOverInfo");
	initialBoardState = initializeBoard();
	createBoard(initialBoardState);
  updateShadowColor()
	startTimer();
	moveHistory = [];
  });