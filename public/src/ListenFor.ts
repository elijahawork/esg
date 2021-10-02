const Mumble = require('mumble-js');
export default class ListenFor {
  private mumble = new Mumble({
    language: 'en-US',
    debug: true,
  });
  constructor(public commands: { name: string, command: RegExp, action: () => void }[]) {
    for (const command of commands) {
      this.mumble.addCommand(command);
    }
    this.mumble.start()
  }
}
