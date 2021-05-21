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
      "Guys look at Teddy. He is such a role model. He got an 8 and and 7 for last assment. His writng dechnique is very imaginative and well thought. He did student comment on time. He is my dear child and I want t- UHM where was I"
    );
  }
}

export default Chloe;
