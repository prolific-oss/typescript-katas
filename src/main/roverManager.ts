export class RoverManager {
  Execute(command: string) {
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