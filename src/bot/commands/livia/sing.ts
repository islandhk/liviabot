import Command from "../..//struct/Command";
import { Message } from "discord.js";
import fs from "fs";

abstract class Sing extends Command {
  constructor() {
    super({
      name: "!sing",
      aliases: ["!song", "!wap"],
      description: "WAP WAP WAP",
    });
  }

  async exec(message: Message, args: string[]) {
    if (!args[0]) {
      return message.channel.send(
        "What do you want me to sing you horrifying students who want me to sing or else you kill me with a barrel gun?"
      );
    }

    if (
      args[0].toLowerCase() == "wap" ||
      args.join(" ").toLowerCase() == "wet ass pussy"
    ) {
      if (!message.member?.voice.channel) {
        return message.channel.send(
          "hey " +
            message.author.username +
            ", you need to join the vc in order to make me sing wap. *ugh stupid students*"
        );
      }
      const connection = await message.member.voice.channel.join();

      const dispatcher = connection.play(
        fs.createReadStream(__dirname + "/../../../../audio/wap.mp3")
      );

      dispatcher.on("start", () => {
        message.channel.send("FINE i'm singing WAP");
      });

      dispatcher.on("finish", () => {
        message.channel.send(
          "i am so done imma get outta here you annoying students"
        );
        return connection.disconnect();
      });

      dispatcher.on("error", (error) => {
        console.error;
        connection.disconnect();

        return message.channel.send(
          "OOPS, VOICE CRACK! there was an error. \n\nNote to my stupid owner geneva:\n```" +
            error +
            "```"
        );
      });
    } else if (
      args[0].toLowerCase() == "china" ||
      args.join(" ").toLowerCase() == "chinese anthem"
    ) {
      if (!message.member?.voice.channel) {
        return message.channel.send(
          "hey " +
            message.author.username +
            ", you need to join the vc in order to make me sing the song of my dear dear country. *ugh stupid students*"
        );
      }
      const connection = await message.member.voice.channel.join();

      const dispatcher = connection.play(
        fs.createReadStream(__dirname + "/../../../../audio/china.mp3")
      );

      dispatcher.on("start", () => {
        message.channel.send(
          "FINE i'm singing the song of my dear dear country"
        );
      });

      dispatcher.on("finish", () => {
        message.channel.send(
          "i am so done imma get outta here you annoying students"
        );
        return connection.disconnect();
      });

      dispatcher.on("error", (error) => {
        console.error;
        connection.disconnect();

        return message.channel.send(
          "OOPS, VOICE CRACK! there was an error. \n\nNote to my stupid owner geneva:\n```" +
            error +
            "```"
        );
      });
    }
  }
}

export default Sing;
