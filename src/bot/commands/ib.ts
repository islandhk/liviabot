import Command from "../struct/Command";
import { Message } from "discord.js";

abstract class IB extends Command {
  constructor() {
    super({
      name: "ib",
      aliases: ["internationalbachelorette"],
      description: "IB",
    });
  }

  exec(message: Message) {
    return message.channel.send(
      "Sebastian, you need to focus in class or you will not make it through IB. It is important that you focus in class and bring all equipment. Or I will fucking whack you with a traffic light you idiot fuck off"
    );
  }
}

export default IB;
