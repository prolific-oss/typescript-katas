import { RoverManager } from "../main/roverManager";
describe("when providing movement vector", () => {
  it("the result is a correctly formatted string", () => {
    let roverManager: RoverManager = new RoverManager();
    expect(roverManager.Execute("M")).toMatch(/[0-9]:[0-9]:[NESW]/);
  });

  it.each([
    ["R", "0:0:E"],
    ["RR", "0:0:S"],
    ["RRR", "0:0:W"],
    ["RRRR", "0:0:N"],
  ])(`when command is %s then rover position is %s`, (command, position) => {
    let roverManager: RoverManager = new RoverManager();
    expect(roverManager.Execute(command)).toBe(position);
  })
});