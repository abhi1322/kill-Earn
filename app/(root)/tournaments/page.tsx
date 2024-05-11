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
  date: Date;
  time: Date;
}

const Page: React.FC = () => {
  const [data, setData] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Asynchronous function to fetch data
    const fetchTournaments = async () => {
      try {
        console.log("Fetching tournaments...");
        const tournaments = await fetchAllTournaments();
        console.log("Fetched tournaments:", tournaments);
        setData(tournaments);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching tournaments:", err);
        setError(err as Error);
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
    <div className="py-12 sm:min-h-[80vh] w-5/6 mx-auto">
      <div className="flex gap-6 flex-wrap justify-center">
        {data.map((tournament, index) => (
          <Card params={tournament} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Page;
