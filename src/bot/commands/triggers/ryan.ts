import Command from "../../struct/Command";
import { Message } from "discord.js";

abstract class Ryan extends Command {
  constructor() {
    super({
      name: "ryan",
      aliases: [],
      description: "idk",
    });
  }

  exec(message: Message) {
    return message.channel.send(
      "RYAN. HAND IN YOUR WORK NOW OR I WILL GIVE YOU 0. YOU THINK YOU GET 8 MAAKS YOU GET EXTEMPTIONS? NO. IDOT."
    );
  }
}

export default Ryan;
