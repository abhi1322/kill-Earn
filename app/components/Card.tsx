"use client"
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
}

interface CardProps {
  params: TournamentParams;
}
interface TournamentCardProps {
  endTime: string; // ISO 8601 date-time string representing the end time of the card
}

const Card: React.FC<CardProps> = ({ params }) => {
  const { game, date, time } = params;
  console.log(date);

  const newDate = new Date(date);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // Format the time as "hh:mm:ss a" in 12-hour format
  const formattedTime = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="bg-neutral-900 w-72 rounded-xl overflow-hidden">
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
        <p className="text-2xl font-semibold">00 : 00 left</p>

        {/* Join Now button */}
        <Button className="bg-[#A7D129] hover:bg-[#8db120] text-[#3E432E] rounded-lg font-semibold up px-12 text-sm transform transition-all duration-300 hover:scale-105 mt-3">
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default Card;
