import {RoverManager} from "../main/roverManager";

describe('example test', () => {
    it("should give sum of a + b when adding a and b", () => {
        let example: RoverManager = new RoverManager();
        expect(example.add(1, 2)).toBe(3);
    })
})
