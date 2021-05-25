import Command from "../..//struct/Command";
import { Message } from "discord.js";
import axios from "axios";
import settings from "../../settings";
import { parseICS } from "ical";
import { Event } from "../../../interfaces";
import { MessageEmbed } from "discord.js";

abstract class Torture extends Command {
  constructor() {
    super({
      name: "!torture",
      aliases: ["!torturewhen", "!torturewen"],
      description: "HELP WHEN",
    });
  }

  async exec(message: Message) {
    const ics: string = await axios
      .get(settings.ICS)
      .then((stuff) => stuff.data);

    const data = parseICS(ics);

    let result: Event | undefined;

    let date = new Date();

    for (let event in data) {
      let info = data[event];
      if (info.description == "Subject: Chinese") {
        if (info.start!.getTime() >= date.getTime()) {
          result = {
            name: info.summary!,
            when: info.start!.toLocaleString(),
            location: info.location!,
          };
          break;
        }
      }
    }

    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .addField(
        "The next time I get to torture you is at...",
        result!.when +
          " at " +
          result!.location +
          ". Don't be late or I will downgrade your course attitude to -69420 and whack you with a literal traffic light on your head."
      );

    return message.channel.send(embed);
  }
}

export default Torture;
