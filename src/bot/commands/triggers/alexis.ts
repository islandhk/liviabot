import Command from "../../struct/Command";
import { Message } from "discord.js";

abstract class Alexis extends Command {
  constructor() {
    super({
      name: "alexis",
      aliases: ["alesis", "alesus"],
      description: "idk",
    });
  }

  exec(message: Message) {
    return message.channel.send(
      "Alesis. In assessment you get 4 and 5. You need to try harder. Because with this grade you cannot go to the IB. The IB is very good and determines your life choices. IB is life. IB is god."
    );
  }
}

export default Alexis;
