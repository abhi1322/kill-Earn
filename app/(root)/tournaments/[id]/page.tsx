"use client";
import { fetchTournament } from "@/lib/actions/tournamentAction";
import React, { useEffect, useState } from "react";
import FreeFire from "@/public/assets/images/free-fire-banner.jpg";
import PUBG from "@/public/assets/images/bgmi-pubg-banner.webp";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Tournament {
  _id: string;
  price: number;
  game: string;
  roomId: string;
  roomPass: string;
  date: Date;
  time: Date;
}

const tournament = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  console.log(params);

  const [tournamentId, setTournamentId] = useState(params.id);
  const [tournament, setTournament] = useState<Tournament>();

  // fetching tournament using ID
  useEffect(() => {
    const getTourament = async () => {
      try {
        const tournamentWeGet = await fetchTournament(tournamentId);
        setTournament(tournamentWeGet);
        console.log(tournamentWeGet);
      } catch (error) {
        console.log(error);
      }
    };

    getTourament();
  }, [tournamentId]);

  // time calculation
  const newDate = tournament ? new Date(tournament.date) : new Date();
  console.log(newDate);

  const formattedDate = newDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const formattedTime = newDate.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const [remainingTime, setRemainingTime] = useState<string>(() => {
    if (tournament) {
      return calculateRemainingTime();
    } else {
      return "";
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (tournament) {
        setRemainingTime(calculateRemainingTime());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [tournament]);

  function calculateRemainingTime(): string {
    const currentTime = new Date();
    const timeDifference = newDate.getTime() - currentTime.getTime();

    if (timeDifference <= 0) {
      return "Tournament ended";
    }

    const totalSeconds = Math.floor(timeDifference / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedDays = days > 0 ? `${days} days, ` : ""; // Include days if applicable
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedDays} ${formattedHours} : ${formattedMinutes} : ${formattedSeconds} left`;
  }

  return (
    <>
      <div className="mx-auto w-[100vw] h-[80vh] flex flex-col ">
        <Image
          src={tournament?.game == "FreeFire" ? FreeFire : PUBG}
          width={300}
          height={100}
          alt="banner"
          className="h-1/3 w-full bg-contain"
          style={{
            objectFit: "cover",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="px-4 p-4 w-[90vw] mx-auto flex flex-col sm:flex-row gap-10  justify-between mt-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-medium">
              {tournament?.game} Tournament
            </h2>
            <div className="flex gap-2 text-lg text-neutral-500">
              <p>
                {formattedDate} | {formattedTime}
              </p>
            </div>
          </div>

          <div>
            {/* Display remaining time */}
            <p className="mt-2 text-xl font-medium text-[#a7d129]">
              Remaining time
            </p>
            <p className="text-4xl font-semibold">{remainingTime}</p>

            {/* Join Now button */}
            {remainingTime === "Tournament ended" ? (
              <Button
                className="bg-[#A7D129] hover:bg-[#8db120] text-[#3E432E] rounded-lg font-semibold up px-12 text-sm transform transition-all duration-300 hover:scale-105 mt-3"
                disabled
              >
                Enter Now
              </Button>
            ) : (
              <Button className="bg-[#A7D129] hover:bg-[#8db120] text-[#3E432E] rounded-lg font-semibold up px-12 text-sm transform transition-all duration-300 hover:scale-105 mt-3">
                Join Now
              </Button>
            )}
          </div>
        </div>
      </div>

    </>
  );
};

export default tournament;
