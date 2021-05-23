import mongoose, { Schema } from "mongoose";
import { User } from "discord.js";

export interface IBoard {
  contents: string;
  timestamp: string;
  channelID: string;
  author: User;
}

const BoardSchema = new Schema<IBoard>({
  contents: { type: String, required: true },
  timestamp: { type: String, required: true },
  channelID: { type: String, required: true },
  author: { type: Object, required: true },
});

const Board = mongoose.model<IBoard>("Board", BoardSchema);
export default Board;
