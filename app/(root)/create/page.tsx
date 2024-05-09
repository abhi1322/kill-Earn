import HeroPattern from "@/public/assets/backgrounds/Pattern.png";
import Image from "next/image";
import QRCode from "react-qr-code";

const page = () => {
  return (
    <div className="relative h-[80vh] w- flex justify-center items-center gap-8 px-40">
      <Image
        src={HeroPattern}
        alt="pattern"
        width={1000}
        height={1000}
        className="absolute -z-40 left-[25%] "
      />
      {/* left side */}
      <section className="w-1/2">
        <h3 className="text-2xl font-semibold mb-4 w-2/3">
          Ready to join the action? Fill out the form below and{" "}
          <span className="text-[#A7D129]">Start your journey to victory!</span>
        </h3>
        <p className="mb-2">Generated OR</p>
        <div className=" flex justify-center items-center bg-[#151515] w-1/2 px-4 py-8 rounded-2xl">
          <QRCode value="gey" className="" bgColor="#151515" />
        </div>
      </section>
      {/* right side */}
      <section className="w-1/2">
        <form action="" className="bg-[#151515] h-[60vh] w-2/3 rounded-2xl p-8">
          <h5 className="text-[#A7D129] text-2xl font-medium">Create Room</h5>
          <div className="flex flex-col my-2">
            <div>
              <div className="mb-3 mt-4">
                <select
                  name="Select Game"
                  className=" bg-neutral-800 p-2 rounded-md"
                >
                  <option value="FreeFire">FreeFire</option>
                  <option value="PUBG">PUBG</option>
                </select>
              </div>
            </div>
            <label htmlFor="roomID" className="text-[#676767] text-xs mb-1">
              Room ID
            </label>
            <input
              type="text"
              className="border-[#676767] border bg-[#151515] px-4 py-1 rounded-sm"
              placeholder="Enter room id"
            />
          </div>

          <div className="flex flex-col my-2">
            <label htmlFor="roomID" className="text-[#676767] text-xs mb-1">
              Room password
            </label>
            <input
              type="password"
              className="border-[#676767] border bg-[#151515] px-4 py-1  rounded-sm"
              placeholder="Enter room password"
            />
          </div>

          <div className=" flex flex-row gap-12">
            <div className="flex flex-col my-2">
              <label htmlFor="roomID" className="text-[#676767] text-xs mb-1">
                Date
              </label>
              <input
                type="date"
                className=" border-[#676767] border bg-[#151515] px-4 py-1  rounded-sm text-white"
              />
            </div>
            <div className="flex flex-col my-2">
              <label htmlFor="roomID" className="text-[#676767] text-xs mb-1">
                Time
              </label>
              <input
                type="time"
                className=" border-[#676767] border bg-[#151515] px-4 py-1  rounded-sm text-white"
              />
            </div>
          </div>
          <button className="py-2 bg-[#A7D129] hover:bg-[#8db120] text-[#3E432E] rounded-lg font-semibold up px-16 transform transition-all duration-300 hover:scale-105 mt-5">
            Join Now
          </button>
        </form>
      </section>
    </div>
  );
};

export default page;
