import Command from "../../struct/Command";
import { Message } from "discord.js";

abstract class Verify extends Command {
  constructor() {
    super({
      name: "!verify",
      aliases: ["!v"],
      description: "Verify user",
      requiredArgs: 1,
      userPermissions: ["MANAGE_ROLES"],
      cultOnly: true,
    });
  }

  exec(message: Message) {
    const member = message.mentions.members!.first();
    const role = message.guild!.roles.cache.find(
      (role) => role.id == "845139669699133450"
    )!;
    member!.roles.add(role).then(() => {
      message.channel.send("Succeeded!").then((m) => {
        setTimeout(() => {
          m.delete();
          message.delete();
        }, 3000);
      });
    });
  }
}

export default Verify;
