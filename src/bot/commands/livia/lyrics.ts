import Command from "../..//struct/Command";
import { Message, MessageEmbed } from "discord.js";
import fs from "fs";

abstract class Lyrics extends Command {
  constructor() {
    super({
      name: "!lyrics",
      aliases: ["!l"],
      description: "WAP WAP WAP",
    });
  }

  async exec(message: Message, args: string[]) {
    if (!args[0]) {
      return message.channel.send(
        "What do you want me to say you horrifying students who want me to say the lyrics or else you kill me with a barrel gun?"
      );
    }

    if (args[0].toLowerCase() == "wap") {
      const data = fs.readFileSync(__dirname + "/../../../../text/wap.txt", {
        encoding: "utf8",
      });

      return message.channel.send(data, { split: true });
    }
  }
}

export default Lyrics;
