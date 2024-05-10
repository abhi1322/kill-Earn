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

export async function createTournament(
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

export async function fetchAllTournaments(): Promise<Tournament[]> {
  try {
    // Connect to the database
    await connectDB();

    // Fetch all tournaments from the database
    const tournaments = await TournamentModel.find();

    // Return the array of tournaments
    return tournaments;
  } catch (error) {
    console.error("Error fetching tournaments:", error);
    // Throw a custom error with a message
    throw new Error("Failed to fetch tournaments.");
  }
}
