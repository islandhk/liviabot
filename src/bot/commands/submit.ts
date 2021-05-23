import Command from "../struct/Command";
import { Message } from "discord.js";

abstract class Submit extends Command {
  constructor() {
    super({
      name: "!submit",
      aliases: ["!s"],
      description: "Submit to the board",
      cultOnly: true,
    });
  }

  exec(message: Message, args: string[]) {
    const arg = args.join(" ");
    

  }
}

export default Submit;
