import Command from "../..//struct/Command";
import { Message } from "discord.js";
import Board from "../../../models/board";
import { MessageEmbed } from "discord.js";

abstract class Submit extends Command {
  constructor() {
    super({
      name: "!submit",
      aliases: ["!s"],
      description: "Submit to the board",
      cultOnly: true,
      requiredArgs: 1,
    });
  }

  exec(message: Message, args: string[]) {
    const arg = args.join(" ");

    message.guild?.channels
      .create("approve-" + message.author.username)
      .then(async (channel) => {
        channel.setParent("846024890196951040");
        const NewBoard = new Board({
          contents: arg,
          timestamp: message.createdTimestamp,
          channelID: channel.id,
          author: message.author,
        });
        await NewBoard.save();

        const embed = new MessageEmbed()
          .setColor("RANDOM")
          .setAuthor(
            message.author.username,
            message.author.avatarURL() ??
              "https://cdn.discordapp.com/attachments/845125088604979241/845128408072978462/SPOILER_unknown.png"
          )
          .addField("Contents", arg)
          .setTimestamp()
          .setFooter(
            "Approve or deny? Run 'approve' or 'deny'.",
            message.author.avatarURL() ??
              "https://cdn.discordapp.com/attachments/845125088604979241/845128408072978462/SPOILER_unknown.png"
          );
        channel.send(embed);
        channel
          .send("<@&" + "846312598790078464" + "> ")
          .then((m) => m.delete());
        return message.channel
          .send(
            "Submitted! Your message will be shortly approved by a staff member."
          )
          .then((m) => {
            setTimeout(() => {
              message.delete();
              m.delete();
            }, 3000);
          });
      });
  }
}

export default Submit;
