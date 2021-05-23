import mongoose, { Schema, Document } from "mongoose";
import { User } from "discord.js";

export interface IBoard extends Document {
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

export default mongoose.model<IBoard>("Board", BoardSchema);
