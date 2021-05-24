import Command from "../../struct/Command";
import { Message, TextChannel } from "discord.js";
import Board from "../../../models/board";
import { MessageEmbed } from "discord.js";

abstract class Approve extends Command {
  constructor() {
    super({
      name: "approve",
      aliases: ["!a", "!approve"],
      description: "Approve [admin only]",
      cultOnly: true,
    });
  }

  async exec(message: Message) {
    const data = await Board.findOne({
      channelID: message.channel.id,
    });

    if (!data) return message.channel.send('dear you\'re not in "the channel"');

    const channel = message.guild!.channels.cache.get("845962706850152448");

    const date = new Date(data.timestamp).toLocaleString("en-GB");

    if (channel instanceof TextChannel) {
      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .addField("Message", data.contents)
        .setFooter("Submitted at " + date);

      channel.send(embed);
    }

    data.delete();
    message.channel.delete();
  }
}

export default Approve;
