export class RoverManager {
  
  const directions = ["N", "E", "S", "W"];
  let currentDirectionIndex = 0;

  Execute(command: string) {
    const commands = command.split('');
    commands.forEach((c) => {
      if (c === 'R') {
        currentDirectionIndex = (currentDirectionIndex + 1) % 4
      }
      if (c === 'M') {
        return "0:0:N"
      }
    })
    return
  }


  private AssemblePosition() {

  }
}