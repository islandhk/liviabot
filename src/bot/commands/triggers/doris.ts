import Command from "../../struct/Command";
import { Message } from "discord.js";

abstract class Doris extends Command {
  constructor() {
    super({
      name: "peony",
      aliases: [],
      description: "idk",
    });
  }

  exec(message: Message) {
    return message.channel.send(
      "Ai yah~~ Doris. You forgot to hand in work for 17th time! But I will not punish you because I love you. You are my precious child."
    );
  }
}

export default Doris;
