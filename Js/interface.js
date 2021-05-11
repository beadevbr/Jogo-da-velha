document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");
    let player1 = document.querySelectorAll("scoreP1");
    let player2 = document.getElementById("scoreP2");


    let resetg = document.getElementById("resetg");
    resetg.addEventListener("click", resetGame);

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    let simboloMensagem = '';

    if (handleMove(position)) {
        updateScore()
        setTimeout(() => {
            if (playerTime == 0) {
                simboloMensagem = '👽';
                alert("O jogo acabou! O vencedor foi " + simboloMensagem);
            } else {
                simboloMensagem = '👾';
                alert("O jogo acabou! O vencedor foi " + simboloMensagem);

            }

        }, 10)
    } else if (chequeDraw()) {
        setTimeout(() => {
            alert("Empate!🛸")
        }, 10)
    }
    updateSquare(position);

}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`


}

function restart() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = " ";

        square.innerHTML = `<div class='${symbol}'></div>`
    });
}
function updateScore() {
    player1.innerHTML = `<span class="icon1">&#x1F47D</span>
    <span id="scoreP1">${scores[0].toString()}</span>`;
    player2.innerHTML = `<span class="icon2">&#x1F47E</span>
    <span id="scoreP2">${scores[1].toString()}</span>`;

}
