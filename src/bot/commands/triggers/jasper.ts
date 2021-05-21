import Command from "../../struct/Command";
import { Message } from "discord.js";

abstract class Jasper extends Command {
  constructor() {
    super({
      name: "jasper",
      aliases: ["jasp"],
      description: "seb",
    });
  }

  exec(message: Message) {
    return message.channel.send(
      "Jasper please stop talking to Hayley. You need to focus in clas- NO, Jasper, you don't talk to Sebashen either. You are distracting class. We are in the middle of a FORMATIVE ASSESSMENT. You cannot show such behaviour. How will you make it through the IB? You talk to people you get disqualified. THen your life choices go bye. This behaviour must be stopped. i will be Emailing your Parents shortly to talk about this issue. CHENG XI STOP TALKING TO SEBASTIAN."
    );
  }
}

export default Jasper;
