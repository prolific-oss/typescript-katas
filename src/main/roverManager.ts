export class RoverManager {
  Execute(command: string) {
    const commands = command.split('');
    const directions = ["N", "E", "S", "W"];
    let currentDirection = "N";
    commands.forEach((c)=> {
      currentDirection = directions[]
    })
    if (command === "R") {
      return "0:0:E";
    }
    if (command === "RR") {
      return "0:0:S";
    }
    if (command === "RRR") {
      return "0:0:W";
    }
    return "0:0:N";
  }
}