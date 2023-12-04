import { Board } from "./example.test";

export class GameOfLife {
  board: Board;
  constructor(board: Board) {
    this.board = board;
  }

  tick() {
    this.board = [[false]];
  }
}
