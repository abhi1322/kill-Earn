import { Schema, model, models } from "mongoose";

// Define the Tournament schema
const TournamentSchema = new Schema({
  game: { type: String, required: true },
  roomId: { type: String, required: true },
  roomPass: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: Date, required: true }, // Use Date type for both date and time
  price: { type: Number, required: true },
});

// Create and export the Tournament model
const TournamentModel =
  models.Tournament || model("Tournament", TournamentSchema);

export default TournamentModel;
