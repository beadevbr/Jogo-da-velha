//iniciar minhas variaveis

let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let simbols = ["o", "x"];

let scores = [0, 0];
let gameOver = false;
let draw = false;
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function handleMove(position) {
    if (gameOver || draw) {
        return;
    }

    if (board[position] == "") {
        board[position] = simbols[playerTime];

        gameOver = isWin();

        if (!gameOver) {
            playerTime = playerTime == 0 ? 1 : 0;
        }
    }

    return gameOver;
}

function isWin() {
    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (
            board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != ""
        ) {
            scores[playerTime] += 1;
            return true;
        }
    }

    return false;
}

function chequeDraw() {
    if (gameOver || draw) {
        return;
    }

    for (let i = 0; i < board.length; i++) {
        if (board[i] == "" || gameOver) {
            return false;
        }
    }

    draw = true;
    return true;
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    // playerTime = 0;
    simbols = ["o", "x"];
    draw = false;
    gameOver = false;
    restart();
}
