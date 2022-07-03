"use strict";

const cells = document.getElementById("cells");
const result = document.getElementById('result');
const board = document.querySelectorAll('.box');
const resetBtn = document.getElementById('restart');
const aiPlayer = 'X', huPlayer = 'O';
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

class Game {
    constructor() {
        this.turn = Math.floor(Math.random() * 2);
        this.result = result;
        this.turnCount = 0;
        resetBtn.addEventListener('click', () => {
            this.resetGame();
        });
        cells.addEventListener('click', this.humanPlay());
        this.cells = cells; 
        this.board = Array.from(Array(9).keys());
        this.winCombos = winCombos;
        this.checkWinner(huPlayer);
    }

    resetGame() {
        result.innerHTML = '';
        board.forEach(e => e.innerHTML = "");
    }
    humanPlay() {
        return (e) => {
            this.turnCount++;
            if (e.target.className == "box") {
               e.target.innerHTML = huPlayer;
            }
            if (this.checkWinner(board, huPlayer)) {
                result.innerHTML = "GJ";
                return;
            } 
            if(this.turnCount >= 9) {
                result.innerHTML = "GG";
                return;
            }
            const bestMove = this.minimax(this.board, aiPlayer);
            console.log(bestMove);
             
        };
    }
    checkWinner(board, player) {
        for (let i = 0; i < winCombos.length; i++){
            if(board[winCombos[i][0]].innerHTML == player && board[winCombos[i][1]].innerHTML == player && board[winCombos[i][2]].innerHTML == player) {
                return true;
            }
            return false;
        }
    }

    minimax(board, player) {
        if (this.checkWinner(board, huPlayer)) {
            return {score: -1};
        }
        if (this.checkWinner(board, huPlayer)) {
            return {score: 1};
        }
        const emptyCells = this.findEmptyCells(board);
        if(emptyCells.length === 0) {
            return {score: 0};
        }

        let moves = [];

        for (let i = 0; i < emptyCells.length; i++) {
            let move = [];
            board[emptyCells[i]] = player;
            move.idx = emptyCells[i];
            if (player === huPlayer) {
                const payload = this.minimax(board, aiPlayer);
                move.score = payload.score;
            }
            if (player === aiPlayer) {
                const payload = this.minimax(board, huPlayer);
                move.score = payload.score;
            }
            board[emptyCells[i]] = move.idx;
            move.push(move);
        }

        let bestMove = null;

        for (let i = 0; i < moves.length; i++) {
            if (player === huPlayer) {
                let bestScore = +Infinity;
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
            if (player === aiPlayer) {
                let bestScore = -Infinity;
                if (moves[i].score > bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }
        return moves[bestMove];
    }

    findEmptyCells(board) {
        return board.filter((c) => c!== huPlayer && c !== aiPlayer);
    }
}
new Game();









/* let move = 0;

const clickBox = (e) => {
    if (e.target.className == "box") {
        move % 2 === 0 ? e.target.innerHTML = "X" : e.target.innerHTML = "0";
        move++;
    }
};
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];



board.addEventListener("click", clickBox); */
