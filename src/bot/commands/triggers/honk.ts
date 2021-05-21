import Command from "../../struct/Command";
import { Message } from "discord.js";

abstract class Honk extends Command {
  constructor() {
    super({
      name: "honk",
      aliases: ["goose"],
      description: "honk",
    });
  }

  exec(message: Message) {
    return message.channel.send(
      "Guys please focus in class. You will not make in through the IB if you pretend to be gose."
    );
  }
}

export default Honk;
