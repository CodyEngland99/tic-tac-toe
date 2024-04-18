const box = document.querySelectorAll(".box");
const container = document.getElementById("box");
const game = document.querySelectorAll("game-piece");
const winBanner = document.getElementById("overlay");
const resetBtn = document.getElementById("reset-btn");

let x = 0;
let o = 0;

function gameIn(e) {
	targetPiece = e.target;

	if (targetPiece.childNodes.length > 0) {
		return;
	}

	if (x > o) {
		targetPiece.innerHTML = "o";
		o++;
	} else if (o >= x) {
		targetPiece.innerHTML = "x";
		x++;
	}

	checkWin();
}

const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const box3 = document.getElementById("box-3");
const box4 = document.getElementById("box-4");
const box5 = document.getElementById("box-5");
const box6 = document.getElementById("box-6");
const box7 = document.getElementById("box-7");
const box8 = document.getElementById("box-8");
const box9 = document.getElementById("box-9");

function checkWin() {
	if (
		box1.textContent.includes("x") &&
		box4.textContent.includes("x") &&
		box7.textContent.includes("x")
	) {
		xWin();
	} else if (
		box1.textContent.includes("o") &&
		box4.textContent.includes("o") &&
		box7.textContent.includes("o")
	) {
		oWin();
	}

	if (
		box2.textContent.includes("x") &&
		box5.textContent.includes("x") &&
		box8.textContent.includes("x")
	) {
		xWin();
	} else if (
		box2.textContent.includes("o") &&
		box5.textContent.includes("o") &&
		box8.textContent.includes("o")
	) {
		oWin();
	}

	if (
		box3.textContent.includes("x") &&
		box6.textContent.includes("x") &&
		box9.textContent.includes("x")
	) {
		xWin();
	} else if (
		box3.textContent.includes("o") &&
		box6.textContent.includes("o") &&
		box9.textContent.includes("o")
	) {
		oWin();
	}

	if (
		box1.textContent.includes("x") &&
		box2.textContent.includes("x") &&
		box3.textContent.includes("x")
	) {
		xWin();
	} else if (
		box1.textContent.includes("o") &&
		box2.textContent.includes("o") &&
		box3.textContent.includes("o")
	) {
		oWin();
	}

	if (
		box4.textContent.includes("x") &&
		box5.textContent.includes("x") &&
		box6.textContent.includes("x")
	) {
		xWin();
	} else if (
		box4.textContent.includes("o") &&
		box5.textContent.includes("o") &&
		box6.textContent.includes("o")
	) {
		oWin();
	}

	if (
		box7.textContent.includes("x") &&
		box8.textContent.includes("x") &&
		box9.textContent.includes("x")
	) {
		xWin();
	} else if (
		box7.textContent.includes("o") &&
		box8.textContent.includes("o") &&
		box9.textContent.includes("o")
	) {
		oWin();
	}

	if (
		box1.textContent.includes("x") &&
		box5.textContent.includes("x") &&
		box9.textContent.includes("x")
	) {
		xWin();
	} else if (
		box1.textContent.includes("o") &&
		box5.textContent.includes("o") &&
		box9.textContent.includes("o")
	) {
		oWin();
	}
	if (
		box7.textContent.includes("x") &&
		box5.textContent.includes("x") &&
		box3.textContent.includes("x")
	) {
		xWin();
	} else if (
		box7.textContent.includes("o") &&
		box5.textContent.includes("o") &&
		box3.textContent.includes("o")
	) {
		oWin();
	}
}

let xWins = 0;
let oWins = 0;

const playerX = document.getElementById("x-wins");
const playerO = document.getElementById("o-wins");
const playerWon = document.getElementById("player-won");

function xWin() {
	xWins++;
	winBanner.style.display = "flex";
	playerWon.innerHTML = `X player wins`;
	playerX.innerHTML = `X player wins ${xWins}`;
	playerO.innerHTML = `O player wins ${oWins}`;
}

function oWin() {
	oWins++;
	winBanner.style.display = "flex";
	playerWon.innerHTML = `O player wins`;
	playerX.innerHTML = `X player wins ${xWins}`;
	playerO.innerHTML = `O player wins ${oWins}`;
}

function resetGame() {
	let i = 0;
	while (i != 9) {
		box[i].innerHTML = "";
		i++;
	}

	winBanner.style.display = "none";
}

container.addEventListener("click", gameIn);
resetBtn.addEventListener("click", resetGame);
