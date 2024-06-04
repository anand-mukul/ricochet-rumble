function initializeBoard() {
	const initBoard = Array(64).fill('');

	let redCannonIndex = getRandomIndex(0, 7);
	while (initBoard[redCannonIndex] !== '') {
		redCannonIndex = getRandomIndex(0, 7);
	}
	initBoard[redCannonIndex] = redCanon;

	let blueCannonIndex = getRandomIndex(56, 63);
	while (initBoard[blueCannonIndex] !== '') {
		blueCannonIndex = getRandomIndex(56, 63);
	}
	initBoard[blueCannonIndex] = blueCanon;

	const redPieces = [redTank, redSemiricochet, redRicochet, redTitan];
	const redFirstRow = [0, 1, 2, 3, 4, 5, 6];
	const redSecondRow = [8, 9, 10, 11, 12, 13, 14];
	shuffleArray(redFirstRow);
	shuffleArray(redSecondRow);
	for (let i = 0; i < redPieces.length - 1; i++) {
		while (initBoard[redFirstRow[i]] !== '') {
			redFirstRow[i] = getRandomIndex(0, 15);
		}
		while (initBoard[redSecondRow[i]] !== '') {
			redSecondRow[i] = getRandomIndex(0, 15);
		}
		initBoard[redFirstRow[i]] = redPieces[i];
		initBoard[redSecondRow[i]] = redPieces[i];
	}

	let redSecondRowIndex = redSecondRow.pop();
	while (initBoard[redSecondRowIndex] !== '') {
		redSecondRowIndex = getRandomIndex(0, 15);
	}
	initBoard[redSecondRowIndex] = redTitan;

	const bluePieces = [blueTank, blueSemiricochet, blueRicochet, blueTitan];
	const blueThirdRow = [48, 49, 50, 51, 52, 53, 54];
	const blueFourthRow = [56, 57, 58, 59, 60, 61, 62];
	shuffleArray(blueThirdRow);
	shuffleArray(blueFourthRow);
	for (let i = 0; i < bluePieces.length - 1; i++) {
		while (initBoard[blueThirdRow[i]] !== '') {
			blueThirdRow[i] = getRandomIndex(48, 63);
		}
		while (initBoard[blueFourthRow[i]] !== '') {
			blueFourthRow[i] = getRandomIndex(48, 63);
		}
		initBoard[blueThirdRow[i]] = bluePieces[i];
		initBoard[blueFourthRow[i]] = bluePieces[i];
	}

	let blueThirdRowIndex = blueThirdRow.pop();
	while (initBoard[blueThirdRowIndex] !== '') {
		blueThirdRowIndex = getRandomIndex(48, 63);
	}
	initBoard[blueThirdRowIndex] = blueTitan;

	return initBoard;
}

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

function getRandomIndex(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}