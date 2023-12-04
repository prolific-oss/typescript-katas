export type Board = boolean[][];

export class GameOfLife {
  board: Board;
  constructor(board: Board) {
    this.board = board;
  }

  tick() {
    // Assumption: board row x column always the same size
    let nextBoard = [...this.board];
    this.board.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (
          rowIndex === 0 ||
          rowIndex === this.board.length - 1 ||
          colIndex === 0 ||
          colIndex === this.board[0].length - 1
        ) {
          nextBoard[rowIndex][colIndex] = false;
        } else {
          const topLeftCell = this.board[rowIndex - 1][colIndex - 1];
          const topMiddleCell = this.board[rowIndex - 1][colIndex];
          const topRightCell = this.board[rowIndex - 1][colIndex + 1];
          const leftCell = this.board[rowIndex][colIndex - 1];
          const rightCell = this.board[rowIndex][colIndex + 1];
          const bottomLeftCell = this.board[rowIndex + 1][colIndex - 1];
          const bottomMiddleCell = this.board[rowIndex + 1][colIndex];
          const bottomRightCell = this.board[rowIndex + 1][colIndex + 1];
          if (
            !topLeftCell &&
            !topMiddleCell &&
            !topRightCell &&
            !bottomLeftCell &&
            !bottomMiddleCell &&
            !bottomRightCell &&
            !leftCell &&
            !rightCell
          ) {
            nextBoard[rowIndex][colIndex] = false;
          }
        }
      });
    });

    this.board = nextBoard;
  }
}
