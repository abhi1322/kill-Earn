"use client";
import Card from "@/app/components/Card";
import { fetchAllTournaments } from "@/lib/actions/tournamentAction";
import React, { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";

// Define the type of a tournament
interface Tournament {
  _id: string;
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
    return (
      <div className="mx-auto w-[60vw] sm:h-[80vh]  flex-col  flex sm:flex-row justify-center ">
        <div className="bg-black rounded p-2">
          <MyLoader />
        </div>
        <div className=" rounded p-2">
          <MyLoader />
        </div>
        <div className=" rounded p-2">
          <MyLoader />
        </div>
        <div className="rounded p-2">
          <MyLoader />
        </div>
      </div>
    );
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

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#171717"
    foregroundColor="#707070"
  >
    <rect x="0" y="241" rx="2" ry="2" width="265" height="13" />
    <rect x="-1" y="261" rx="2" ry="2" width="265" height="24" />
    <rect x="0" y="62" rx="2" ry="2" width="312" height="172" />
    <rect x="2" y="333" rx="0" ry="0" width="221" height="57" />
  </ContentLoader>
);

export default Page;
