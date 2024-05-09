"use server";

interface Tournament {
  price: number;
  game: string;
  roomId: string;
  roomPass: string;
  date: string;
  time: string;
}

import TournamentModel from "../models/tournament.model";
import { connectDB } from "../database";

export default async function createTournament(
  tournament: Tournament
): Promise<Tournament | null> {
  try {
    // Connect to the database
    await connectDB();

    // Create a new tournament in the database
    const newTournament = await TournamentModel.create(tournament);

    // Return the created tournament
    return newTournament;
  } catch (error) {
    console.error("Error creating tournament:", error);

    // You can either throw the error to be handled upstream or return null
    throw new Error("Failed to create tournament.");
  }
}
