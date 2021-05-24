import Command from "../../struct/Command";
import { Message } from "discord.js";

abstract class Quinton extends Command {
  constructor() {
    super({
      name: "quinton",
      aliases: ["quinny"],
      description: "idk",
    });
  }

  exec(message: Message) {
    return message.channel.send(
      "Quinton. Stop watching Ball Stars vido. It is inaproprate to watch these vidos in glass because we are focusing. I will be emailing your parents shortly abotu this issue. Also you are not supposed to be sitting with Hayley and Jespar. Or Sebashun. Sebashun Cannot talk to Quinton."
    );
  }
}

export default Quinton;
