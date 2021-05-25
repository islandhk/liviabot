import mongoose, { Schema } from "mongoose";
import { IBoard } from "../interfaces";

const BoardSchema = new Schema<IBoard>({
  contents: { type: String, required: true },
  timestamp: { type: Number, required: true },
  channelID: { type: String, required: true },
  author: { type: Object, required: true },
});

const Board = mongoose.model<IBoard>("Board", BoardSchema);
export default Board;
