import Command from "../../struct/Command";
import { Message } from "discord.js";

abstract class Peony extends Command {
  constructor() {
    super({
      name: "peony",
      aliases: [],
      description: "idk",
    });
  }

  exec(message: Message) {
    return message.channel.send(
      "Hello new student. Which local school you come from? I am asking you question. Hello? Oh. That school is ok. Oh... What is your name..PEONY! In this class I do not tolerate reckless behaviour *looks at sebashun* and I expect you to bring everything without me telling you. I expect you to bring 10 pounds of lesson materials every lesson and print 69420 pages with 1 day of prior notification. Is that understood? Hello? Hello????? (ugh annoying new student)"
    );
  }
}

export default Peony;
