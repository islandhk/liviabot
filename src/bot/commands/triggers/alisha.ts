import Command from "../../struct/Command";
import { Message } from "discord.js";

abstract class Alisha extends Command {
  constructor() {
    super({
      name: "alisha",
      aliases: ["alicia"],
      description: "idk",
    });
  }

  exec(message: Message) {
    return message.channel.send(
      "Alisha. Alisha? *click* *MARKS AS ABSENT*\nAlisha: *SCREAMS*"
    );
  }
}

export default Alisha;
