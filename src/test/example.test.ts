import { Example } from "../main/example";
import { GameOfLife } from "./GameOfLife";

//[[true]] -> [[false]]
//[[false]] -> [[false]]

export type Board = boolean[][];

describe("Game of life", () => {
  it("should turn a single alive cell to dead", () => {
    let board: Board = [[true]];
    let gameOfLife = new GameOfLife(board);
    gameOfLife.tick();
    expect(gameOfLife.board).toEqual([[false]]);
  });

  it.skip("should keep single dead cell as dead", () => {
    let board: Board = [[false]];
    let gameOfLife = new GameOfLife(board);
    gameOfLife.tick();
    expect(gameOfLife.board).toEqual([[false]]);
  });
});
