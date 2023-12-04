import { GameOfLife } from "../main/GameOfLife";
import type { Board } from "../main/GameOfLife";

describe("Game of life", () => {
  describe("When board size is 1x1", () => {
    //[[true]] -> [[false]]
    it("should turn a single alive cell to dead", () => {
      let board: Board = [[true]];
      let gameOfLife = new GameOfLife(board);
      gameOfLife.tick();
      expect(gameOfLife.board).toEqual([[false]]);
    });

    //[[false]] -> [[false]]
    it("should keep single dead cell as dead", () => {
      let board: Board = [[false]];
      let gameOfLife = new GameOfLife(board);
      gameOfLife.tick();
      expect(gameOfLife.board).toEqual([[false]]);
    });
  });

  describe("When board size is 3x3", () => {
    /**
     * 0 0 0    0 0 0
     * 0 1 0 -> 0 0 0
     * 0 0 0    0 0 0
     */
    it("should turn an alive cell with all dead neighbours to dead", () => {
      let board: Board = [
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ];
      let gameOfLife = new GameOfLife(board);
      gameOfLife.tick();
      expect(gameOfLife.board).toEqual([
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ]);
    });
  });
});
