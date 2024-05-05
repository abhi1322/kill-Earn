import Image from "next/image";
import HeroImg from "@/public/assets/images/hero-images.png";
import UIImage from "@/public/assets/images/mobile-img.png";
import HeroPattern from "@/public/assets/backgrounds/Pattern.png";
import { Button } from "@/components/ui/button";
import { whyChooseUs } from "../constants/constant";
import Link from "next/link";
import {  currentUser } from "@clerk/nextjs";


export default async function Home() {


  const user = await currentUser();
  console.log(user);

  return (
    <main>
      <section className="relative w-full sm:h-[60vh] flex flex-col items-center justify-center mt-12 mb-10">
        <Image
          src={HeroPattern}
          alt="pattern"
          width={1000}
          height={1000}
          className="absolute -z-40 -top-8 "
        />
        <Image
          src={HeroImg}
          alt="hero-img"
          className="h-[151px] w-[417px] sm:w-[833px] sm:h-[302px]"
        />
        <h1 className="text-2xl sm:text-4xl font-semibold w-11/12 sm:w-1/3 text-center -mt-8 sm:-mt-16  mb-4">
          Rise to Victory and Rewards with KILL&EARN!
        </h1>
        <p className="text-sm text-[#999] w-11/12 sm:w-1/3 text-center mb-8">
          Dive into multiplayer gaming tournaments where every kill counts
          towards rewards. Join now and turn your victories into valuable
          prizes!
        </p>

        <div className="relative flex justify-center">
          <Link href={"/sing-in"}>
            <Button className="relative bg-[#A7D129] hover:bg-[#8db120] text-[#3E432E] rounded-lg font-semibold up px-16 transform transition-all duration-300 hover:scale-105">
              Join Now
            </Button>
          </Link>

          <span className="absolute h-3 w-full -z-30 -bottom-1 blur-xl bg-[#baf604ef]"></span>
        </div>
      </section>

      {/* Service section */}
      <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mx-auto md:w-[70vw] sm:w-[50vw] mb-20">
        <div className="bg-[#151515] p-8 rounded-lg h-80 mx-8 sm:mx-0">
          <h6 className="font-semibold text-xl mb-4">
            Maximize Your Gaming Skills
          </h6>
          <p className="text-[#999]">
            Ready to turn your gaming prowess into rewards? Welcome to
            KILL&EARN, where every kill earns you valuable rewards in
            competitive multiplayer tournaments.
          </p>
        </div>

        <div className="bg-[#151515] mx-8 sm:mx-0 p-8 rounded-lg h-80">
          <h6 className="font-semibold text-xl mb-4">Join the Battle</h6>
          <p className="text-[#999]">
            Whether you're a seasoned marksman or a rising star, all levels are
            welcome. Showcase your skills, dominate, and earn rewards with each
            kill.
          </p>
        </div>

        <div className="bg-[#A7D129] mx-8 sm:mx-0 p-8 rounded-lg h-80">
          <h6 className="font-semibold text-xl mb-4 text-[#000]">
            Experience the Thrill
          </h6>
          <p className="text-[#222419]">
            From intense firefights in PUBG to tactical showdowns in Free Fire,
            our platform hosts tournaments for popular multiplayer games,
            ensuring non-stop excitement.
          </p>
        </div>
      </section>

      {/*  Why choose section Us */}
      <section className="flex flex-col items-center justify-center py-8 text-black bg-[#A7D129] mb-8">
        <div className=" md:w-[70vw] px-4 sm:px-0 sm:w-[50vw] flex flex-col gap-4">
          <h5 className="font-bold text-2xl border-b-2 border-black">
            Why Choose Us?
          </h5>
          {whyChooseUs.map((e) => (
            <div className="border-b text-[#222419] pb-2 border-black">
              <p>
                <span className="font-medium text-lg">{e.title} </span>:{" "}
                {e.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlight section */}
      <section className="flex justify-center items-center mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-3/4 items-center">
          <Image src={UIImage} alt="mobile-img" width={500} height={500} />
          <div className="flex flex-col gap-2">
            <h6 className="text-2xl font-semibold">
              Ready to Claim Your{" "}
              <span className="text-[#A7D129]">Rewards?</span>
            </h6>
            <p className="text-[#999] mb-4">
              Join KILL&EARN now and start earning rewards with every kill you
              score. Sign up today to unleash your potential, dominate the
              competition, and earn rewards like never before!
            </p>
            <div className="relative flex">
              <Link href={"/sing-in"}>
                <Button className="relative bg-[#A7D129] hover:bg-[#8db120] text-[#3E432E] rounded-lg font-semibold up px-16 transform transition-all duration-300 hover:scale-105">
                  Join Now
                </Button>
              </Link>

              <span className="absolute h-3 w-[200px] -z-30 -bottom-1 blur-xl bg-[#baf604ef]"></span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
