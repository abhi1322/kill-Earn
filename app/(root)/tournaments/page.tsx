"use client";
import Card from "@/app/components/Card";
import { fetchAllTournaments } from "@/lib/actions/tournamentAction";
import React, { useState, useEffect } from "react";

// Define the type of a tournament
interface Tournament {
  price: number;
  game: string;
  roomId: string;
  roomPass: string;
  date: string;
  time: string;
}

const Page: React.FC = () => {
  const [data, setData] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Asynchronous function to fetch data
    const fetchTournaments = async () => {
      try {
        const tournaments = await fetchAllTournaments();
        setData(tournaments);
        setLoading(false);
      } catch (err: any) {
        console.error("Error fetching tournaments:", err);
        setError(err);
        setLoading(false);
      }
    };

    // Call the function
    fetchTournaments();
  }, []);

  if (loading) {
    return <p>Loading tournaments...</p>;
  }

  if (error) {
    return <p>Error loading tournaments: {error.message}</p>;
  }

  return (
    <div className="h-[80vh] w-5/6 mx-auto pt-12">
      <div className="flex gap-6">
        {data.map((tournament, index) => (
          <div key={index}>
            <Card params={tournament} />
            {/* <h6>Tournament: {tournament.game}</h6>
          <p>Price: {tournament.price}</p>
          <p>Room ID: {tournament.roomId}</p>
          <p>Room Password: {tournament.roomPass}</p>
          <p>Date: {new Date(tournament.date).toLocaleDateString()}</p>
        <p>Time: {new Date(tournament.time).toLocaleTimeString()}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
