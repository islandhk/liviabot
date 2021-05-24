import Command from "../../struct/Command";
import { Message } from "discord.js";
import Board from "../../../models/board";

abstract class Deny extends Command {
  constructor() {
    super({
      name: "approve",
      aliases: ["!a", "!approve"],
      description: "Approve [admin only]",
      cultOnly: true,
      userPermissions: ["ADMINISTRATOR"],
    });
  }

  async exec(message: Message) {
    const data = await Board.findOne({
      channelID: message.channel.id,
    });

    if (!data) return message.channel.send('dear you\'re not in "the channel"');

    data.delete();
    message.channel.delete();
  }
}

export default Deny;
