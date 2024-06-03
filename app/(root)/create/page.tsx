"use client";
import { createTournament } from "@/lib/actions/tournamentAction";
import HeroPattern from "@/public/assets/backgrounds/Pattern.png";
import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";
import QRCode from "react-qr-code";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define types for your tournament object
interface Tournament {
  _id: string;
  price: number;
  game: string;
  roomId: string;
  roomPass: string;
  date: Date; // Change the type to string
  time: Date; // Change the type to string
}

const Page: React.FC = () => {
  // Initialize state values
  const [price, setPrice] = useState<number>(5);
  const [game, setGame] = useState<string>("FreeFire");
  const [roomID, setRoomID] = useState<string>("");
  const [roomPass, setRoomPass] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<Date>(new Date());

  // Update handlers
  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  const handleGameChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setGame(event.target.value);
  };

  const handleRoomIDChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRoomID(event.target.value);
  };

  const handleRoomPassChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRoomPass(event.target.value);
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(event.target.value));
  };

  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const timeString = event.target.value;
    const [hours, minutes] = timeString.split(":").map(Number);
    const newTime = new Date();
    newTime.setHours(hours);
    newTime.setMinutes(minutes);
    setTime(newTime);
  };

  // Handle form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Create a tournament object
    const tournament: Tournament = {
      price,
      game,
      roomId: roomID, // Use the correct property name as per schema
      roomPass,
      date, // Convert date to ISO string
      time,
      _id: "",
    };

    // Log data for debugging
    console.log("Sending tournament data:", tournament);

    try {
      // Call createTournament function and await completion
      await createTournament(tournament);
      console.log("Tournament created successfully");
      toast("Tournament created");
    } catch (error) {
      console.error("Error creating tournament:", error);
      toast(`Error : ${error}`);
    }

    // Reset form values
    setPrice(5);
    setGame("FreeFire");
    setRoomID("");
    setRoomPass("");
    setDate(new Date());
    setTime(new Date());
  };

  // Render form and QR code
  return (
    <div className="relative sm:h-[80vh]  w-full flex flex-col sm:flex-row  justify-center items-center gap-8 px-8 sm:px-40 pt-16 sm:pt-0 overflow-x-hidden">
      <ToastContainer theme="dark" position={"bottom-left"} />
      <Image
        src={HeroPattern}
        alt="pattern"
        width={1000}
        height={1000}
        className="absolute -z-40 left-[25vw]"
      />
      {/* Left side */}
      <section className="sm:w-1/2">
        <h3 className="text-2xl font-semibold mb-4 sm:w-2/3">
          Ready to join the action? Fill out the form below and{" "}
          <span className="text-[#A7D129]">start your journey to victory!</span>
        </h3>
        <p className="mb-2 mx-auto w-full sm:w-auto text-center sm:text-left">
          Generated QR Code
        </p>
        <div className="flex mx-auto sm:mx-0 justify-center items-center bg-[#151515] w-2/3 sm:w-1/2 sm:px-4 py-3 sm:py-8 rounded-2xl">
          <QRCode
            size={256}
            value={`RoomID = ${roomID},Room Pass = ${roomPass}`}
            bgColor="#151515"
            fgColor="#ffffff"
          />
        </div>
      </section>
      {/* Right side */}
      <section className=" sm:w-1/2 mb-8">
        <form
          className="bg-[#151515] sm:h-[60vh] md:w-11/12 sm:w-2/3 rounded-2xl p-8"
          onSubmit={handleSubmit}
        >
          <h5 className="text-[#A7D129] text-2xl font-medium">Create Room</h5>
          <div className="flex flex-col my-2">
            <div className="mb-3 mt-4">
              <select
                name="Select Game"
                className="bg-neutral-800 p-2 rounded-md"
                onChange={handleGameChange}
                value={game}
              >
                <option value="FreeFire">FreeFire</option>
                <option value="PUBG">PUBG</option>
              </select>
            </div>
            <label htmlFor="roomID" className="text-[#676767] text-xs mb-1">
              Room ID
            </label>
            <input
              type="text"
              className="border-[#676767] border bg-[#151515] px-4 py-1 rounded-sm"
              placeholder="Enter room ID"
              onChange={handleRoomIDChange}
              value={roomID}
            />
          </div>

          <div className="flex flex-col my-2">
            <label htmlFor="roomPass" className="text-[#676767] text-xs mb-1">
              Room password
            </label>
            <input
              type="text"
              className="border-[#676767] border bg-[#151515] px-4 py-1 rounded-sm"
              placeholder="Enter room password"
              onChange={handleRoomPassChange}
              value={roomPass}
            />
          </div>

          <div className="flex flex-row gap-4 md:gap-4 sm:gap-12 flex-wrap">
            <div className="flex flex-col my-2">
              <label htmlFor="date" className="text-[#676767] text-xs mb-1">
                Date
              </label>
              <input
                type="date"
                className="border-[#676767] border bg-[#151515] px-4 py-1 rounded-sm text-white"
                onChange={handleDateChange}
                value={date.toISOString().split("T")[0]} // Convert date to string for input
              />
            </div>
            <div className="flex flex-col my-2">
              <label htmlFor="time" className="text-[#676767] text-xs mb-1">
                Time
              </label>
              <input
                type="time"
                className="border-[#676767] border bg-[#151515] px-4 py-1 rounded-sm text-white"
                onChange={handleTimeChange}
                value={time.toISOString().split("T")[1].substring(0, 5)} // Convert time to string for input
              />
            </div>
          </div>
          <div className="flex flex-col my-2 w-20">
            <label htmlFor="price" className="text-[#676767] text-xs mb-1">
              Entry Fee
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={handlePriceChange}
              className="border-[#676767] border bg-[#151515] px-4 py-1 rounded-sm"
              min="5"
              max="100"
              step="5"
              placeholder="Enter price"
            />
          </div>
          <button
            className="py-2 bg-[#A7D129] hover:bg-[#8db120] text-[#3E432E] rounded-lg font-semibold px-16 transform transition-all duration-300 hover:scale-105 mt-5 w-full sm:w-2/4"
            type="submit"
          >
            Create Tournament
          </button>
        </form>
      </section>
    </div>
  );
};

export default Page;
