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
      channel.send("<@" + member.user.id + ">").then((m) => {
        channel.send("<@" + "845124747910184970" + ">");
        m.delete();
      });
    }
  }
}

export default GuildMemberAdd;
