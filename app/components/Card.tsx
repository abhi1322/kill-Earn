"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import FreeFire from "@/public/assets/images/card/freefire-cover.png";
import PUBG from "@/public/assets/images/card/pubg-cover.png";
import { Button } from "@/components/ui/button"; // Import the Button component

// Define the expected type of the `params` prop
interface TournamentParams {
  game: string;
  date: string;
  time: string;
  price: number;
}

interface CardProps {
  params: TournamentParams;
}
interface TournamentCardProps {
  endTime: string; // ISO 8601 date-time string representing the end time of the card
}

const Card: React.FC<CardProps> = ({ params }) => {
  const { game, date, price } = params;
  const newDate = new Date(date);
  const formattedDate = newDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());
  const [tournamentEnded, setTournamentEnded] = useState(false);
  // Format the time as "hh:mm:ss a" in 12-hour format
  const formattedTime = newDate.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
    <div className="relative bg-neutral-900 w-72 rounded-xl overflow-hidden">
      <p className="absolute flex justify-center  top-2 right-2 bg-[#a7d129] w-14 text-[#3E432E] font-semibold rounded-xl shadow-[0px_10px_70px_10px_#a7d129]">
        ₹ {price}
      </p>
      <Image
        objectFit="cover"
        src={game == "FreFire" ? FreeFire : PUBG} // Use imageSrc from params or fallback to FreeFire
        width={300}
        height={300}
        alt="Tournament image"
      />
      <div className="px-4 py-4">
        <h2 className="text-lg font-medium">{game} Tournament</h2>
        <div className="flex gap-2 text-xs text-neutral-500">
          {/* <p>{date.toString()}</p> */}
          <p>
            {formattedDate} | {formattedTime}
          </p>
          {/* <p>{time}</p> */}
        </div>

        {/* Display remaining time */}
        <p className="mt-2 font-medium text-[#a7d129]">Remaining time</p>
        <p className="text-2xl font-semibold">{remainingTime}</p>

        {/* Join Now button */}
        {remainingTime == "Tournament ended" ? (
          <Button
            className="bg-[#A7D129] hover:bg-[#8db120] text-[#3E432E] rounded-lg font-semibold up px-12 text-sm transform transition-all duration-300 hover:scale-105 mt-3"
            disabled
          >
            Enter Now
          </Button>
        ) : (
          <Button className="bg-[#A7D129] hover:bg-[#8db120] text-[#3E432E] rounded-lg font-semibold up px-12 text-sm transform transition-all duration-300 hover:scale-105 mt-3">
            Enter Now
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;
