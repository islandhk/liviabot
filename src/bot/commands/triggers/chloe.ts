import Command from "../../struct/Command";
import { Message } from "discord.js";

abstract class Chloe extends Command {
  constructor() {
    super({
      name: "chloe",
      aliases: [],
      description: "role model",
    });
  }

  exec(message: Message) {
    return message.channel.send(
      "Guys look at Chloe. She is such a role model. She got an 8 and and 7 for last assment. She writng dechnique is very imaginative and well thought. She did student comment on time. She is my dear child and I want t- UHM where was I"
    );
  }
}

export default Chloe;
