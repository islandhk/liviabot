import Command from "../struct/Command";
import { Message } from "discord.js";

abstract class IB extends Command {
  constructor() {
    super({
      name: "livia",
      aliases: ["leeeeeveea", "levea", "leeveea"],
      description: "livia",
    });
  }

  exec(message: Message) {
    return message.channel.send("Yes?");
  }
}

export default IB;
