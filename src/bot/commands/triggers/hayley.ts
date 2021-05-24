import Command from "../../struct/Command";
import { Message } from "discord.js";

abstract class Hayley extends Command {
  constructor() {
    super({
      name: "hayley",
      aliases: [],
      description: "idk",
    });
  }

  exec(message: Message) {
    return message.channel.send(
      "Hayley. You are very good student with very good potential. But because you always not focusing in class and talk to Jasiper and Sebashun, you cannot reach your highest potential. Hayley can you move and sit with Doris, my dear ch- UHM. They are very good influences. *awkward pat'"
    );
  }
}

export default Hayley;
