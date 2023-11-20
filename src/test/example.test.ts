import { RoverManager } from "../main/roverManager";
describe("when providing movement vector", () => {
  it("the result is a correctly formatted string", () => {
    let roverManager: RoverManager = new RoverManager();
    expect(roverManager.Execute("M")).toMatch(/[0-9]:[0-9]:[NESW]/);
  });
  it("should set the direction to E when rotating R", () => {
    let roverManager: RoverManager = new RoverManager();
    expect(roverManager.Execute("R")).toBe("0:0:E");
  });
  it("should set the direction to S when rotating RR", () => {
    let roverManager: RoverManager = new RoverManager();
    expect(roverManager.Execute("RR")).toBe("0:0:S");
  });
  it("should set the direction to W when rotating RRR", () => {
    let roverManager: RoverManager = new RoverManager();
    expect(roverManager.Execute("RRR")).toBe("0:0:W");
  });
  it("should set the direction to N when rotating RRRR", () => {
    let roverManager: RoverManager = new RoverManager();
    expect(roverManager.Execute("RRRR")).toBe("0:0:N");
  });
  it.each([
    ["R", "0:0:E"],
    ["RR", "0:0:S"],
    ["RRR", "0:0:W"],
    ["RRRR", "0:0:N"],
  ])(`rover position should be % when command `, () => {
    let roverManager: RoverManager = new RoverManager();
    expect(roverManager.Execute("RRRR")).toBe("0:0:N");
  })
});