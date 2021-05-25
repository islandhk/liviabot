import { User } from "discord.js";

export interface IBoard {
  contents: string;
  timestamp: number;
  channelID: string;
  author: User;
}

export interface Event {
  name: string;
  when: string;
  location: string;
}
