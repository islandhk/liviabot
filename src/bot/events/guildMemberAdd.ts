import Event from "../struct/Event";
import { GuildMember } from "discord.js";

abstract class GuildMemberAdd extends Event {
  constructor() {
    super({
      name: "guildMemberAdd",
    });
  }

  async exec(member: GuildMember) {
    const channel = member.guild.channels.cache.get("845141656343674881");

    if (channel!.isText()) {
      channel.send(
        "<@" +
          "845124747910184970" +
          ">" +
          "<@" +
          member.user.id +
          ">" +
          " just joined."
      );
    }
  }
}

export default GuildMemberAdd;
