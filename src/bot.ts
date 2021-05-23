import Client from "./bot/client/Client";
import { connect } from "mongoose";
import settings from "./bot/settings";

const client: Client = new Client();
client.start();

connect(settings.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("[Database] Connected to MongoDB."));
