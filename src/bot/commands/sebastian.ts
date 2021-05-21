import Command from "../struct/Command";
import { Message } from "discord.js";

abstract class Sebastian extends Command {
  constructor() {
    super({
      name: "sebasitan",
      aliases: [],
      description: "seb",
    });
  }

  exec(message: Message) {
    return message.channel.send(
      "Sebastian please stop talking to Hayley. You cannot sit with Jespar, haley or Quinten. Move to sit with Doris. SEBASHEN. NOW. STOP TALKING TO FUCKING JASPER"
    );
  }
}

export default Sebastian;
