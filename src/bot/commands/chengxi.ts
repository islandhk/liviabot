import Command from "../struct/Command";
import { Message } from "discord.js";

abstract class ChengXi extends Command {
  constructor() {
    super({
      name: "sebasitan",
      aliases: ["seb"],
      description: "seb",
    });
  }

  exec(message: Message) {
    return message.channel.send(
      "Cheng xi your behaviour is becuming worst lately. Your grades is low and is disaponting. You not focusing in class. Sit in front. YOu also come from local school. What happen to you?? You now game all day at back of class. Sit-NO. not in front of Sebashen. Next to Dor-NO Cheng XI, stop talking to Doris. Who can you sit with? Sit with Ryan-NO ST-"
    );
  }
}

export default ChengXi;
