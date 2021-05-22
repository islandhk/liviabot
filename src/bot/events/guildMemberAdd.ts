import Event from "../struct/Event";
import { GuildMember, TextChannel } from "discord.js";
import settings from "../settings";

abstract class GuildMemberAdd extends Event {
  constructor() {
    super({
      name: "guildMemberAdd",
    });
  }

  async exec(member: GuildMember) {
    if (member.guild.id !== settings.CULT_ID) return;
    const channel = member.guild.channels.cache.get("845141656343674881");

    if (channel instanceof TextChannel) {
      return channel.send(
        "<@&" +
          "845124747910184970" +
          ">, " +
          "<@" +
          member.user.id +
          ">" +
          " just joined."
      );
    }
  }
}

export default GuildMemberAdd;
