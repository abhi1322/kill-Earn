<<<<<<< HEAD
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const links = [
  {
    name: "Tournaments",
    link: "/tournaments",
  },
  {
    name: "About",
    link: "/about",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex sticky top-0 z-50  text-white w-full h-[10vh] items-center justify-between px-8 lg:px-40 border-b border-neutral-900 backdrop-filter backdrop-blur-md bg-opacity-50">
        <a href="/" className="font-semibold text-xl">
          Kill&Earn
        </a>

        <ul className="gap-16 hidden sm:inline-flex">
          {links.map((link, i) => (
            <li key={i}>
              <a id="links" href={link.link}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          <Button className="bg-[#A7D129] hover:bg-[#8bab2b]  text-[#3E432E] rounded-md transform transition-all duration-300 hover:scale-105">
            Join Now
          </Button>
          <Button
            className=" sm:hidden bg-[#00000000]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              src={
                "https://img.icons8.com/material-outlined/96/ffffff/menu--v4.png"
              }
              alt="menu"
              width="24"
              height="24"
            />
          </Button>
        </div>
      </nav>
      {isOpen ? (
        <ul className="z-50 sm:hidden sticky top-20 backdrop-filter backdrop-blur-md bg-opacity-50">
          {links.map((link, i) => (
            <li
              id="links"
              key={i}
              className=" flex justify-center items-center text-white border-b border-neutral-900 h-14 "
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
=======
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const links = [
  {
    name: "Tournaments",
    link: "/tournaments",
  },
  {
    name: "About",
    link: "/about",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex sticky top-0 z-50  text-white w-full h-[10vh] items-center justify-between px-8 lg:px-40 border-b border-neutral-900 backdrop-filter backdrop-blur-md bg-opacity-50">
        <a href="/" className="font-semibold text-xl">
          Kill&Earn
        </a>

        <ul className="gap-16 hidden sm:inline-flex">
          {links.map((link, i) => (
            <li key={i}>
              <a id="links" href={link.link}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          <Button className="bg-[#A7D129] hover:bg-[#8bab2b]  text-[#3E432E] rounded-md transform transition-all duration-300 hover:scale-105">
            Join Now
          </Button>
          <Button
            className=" sm:hidden bg-[#00000000]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              src={
                "https://img.icons8.com/material-outlined/96/ffffff/menu--v4.png"
              }
              alt="menu"
              width="24"
              height="24"
            />
          </Button>
        </div>
      </nav>
      {isOpen ? (
        <ul className="z-50 sm:hidden sticky top-20 backdrop-filter backdrop-blur-md bg-opacity-50">
          {links.map((link, i) => (
            <li
              id="links"
              key={i}
              className=" flex justify-center items-center text-white border-b border-neutral-900 h-14 "
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
>>>>>>> 75ca16f (commit after the pull)
