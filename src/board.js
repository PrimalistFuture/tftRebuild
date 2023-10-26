import { Bench } from "./bench";

class Board {
    constructor(length = 7, height = 8) {
        this.length = length;
        this.height = height;
    }
    board = [];

    populateBoard() {
        for (let i = 0; i < this.height; i++) {
            let row = [];
            for (let j = 0; j < this.length; j++) {
                let tile = [j, i];
                row.push(tile);
            }
            this.board.push(row);
        }
        return this.board;
    }

    // placeUnit(bench, unit, x, y) {

    // }
}

let board = new Board();
board.populateBoard()
board.board;


