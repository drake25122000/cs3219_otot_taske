import "dotenv/config";
import NUSMods from "./module-model.js";
import mongoose from "mongoose";

let mongoDB = process.env.MONGO_DB_URI;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Successfully connected to MongoDB"));

export async function getAllModules(ay) {
  return await NUSMods.findOne({ay: ay});
}

