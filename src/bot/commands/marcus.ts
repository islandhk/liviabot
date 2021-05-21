import Command from "../struct/Command";
import { Message } from "discord.js";

abstract class Marcus extends Command {
  constructor() {
    super({
      name: "marcus",
      aliases: ["maakus"],
      description: "seb",
    });
  }

  exec(message: Message) {
    return message.channel.send(
      "Maakus you must stop talking to Cheng Xi. HOw you make through the IB? YOu forget to bring book and forget dictation. I will be downgrading your course attitude shortly."
    );
  }
}

export default Marcus;
