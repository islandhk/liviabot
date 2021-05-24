import Command from "../../struct/Command";
import { Message } from "discord.js";

abstract class Kacey extends Command {
  constructor() {
    super({
      name: "kacey",
      aliases: [],
      description: "idk",
    });
  }

  exec(message: Message) {
    return message.channel.send(
      "KAZY. YOu are missing evidencer work!! *STOMPS* HOW DARE YOU. EVIDENCER IS GRADE AND IF YOU LATE FOR 1 SECOND I DEDUCT YOU MARK TO 0. This is unacceptable. You must submit in 1 second. NO? NO EVEEDENZ? -69420 MAAKS FOR U. UNACCEPTABLE. COURSE ATTITOOD -1. UNACCEPTABLE."
    );
  }
}

export default Kacey;
