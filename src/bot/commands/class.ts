import Command from "../struct/Command";
import { Message } from "discord.js";

abstract class Sebastian extends Command {
  constructor() {
    super({
      name: "class",
      aliases: ["seb"],
      description: "seb",
    });
  }

  exec(message: Message) {
    return message.channel.send(
      "You will not make it through this class. What local school you come from?? You come from local school. Local school standard is higha that internashenal schol. I cannot tolerate such inapproprate behaviour in my class. You cannot make it through the IB if you continue this inconsidrate behavor."
    );
  }
}

export default Sebastian;
