import Command from "../../struct/Command";
import { Message } from "discord.js";

abstract class Aden extends Command {
  constructor() {
    super({
      name: "chengxi",
      aliases: ["cheng"],
      description: "seb",
    });
  }

  exec(message: Message) {
    return message.channel.send(
      "Guys look at Aden. He is such a role model. He got an 8 and and 7 for last assment. His writng dechnique is very imaginative and well thought. He did student comment on time. He is my dear child and I want t- UHM where was I"
    );
  }
}

export default Aden;
