"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Button from "../Button/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav className="bg-white">
        <div className="flex items-center font-medium justify-around">
          <div className="z-50 p-5 md:w-auto w-full cursor-pointer flex justify-between">
            <Image
              src="/afritechlogo.png"
              alt="Afritech Logo"
              className="dark:invert"
              width={35}
              height={30}
            />
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>

          <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppings]">
            <li>
              <Link href="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />
          </ul>
          <div className="md:block hidden">
            <Button
              style="bg-indigo-500 text-white px-6 py-2 rounded-full"
              onClick={() => console.log("Create a form")}
              text="POST A JOB"
            />
          </div>
          {/* mobile nav view */}
          <ul
            className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${
              open ? "left-0" : "left-[-100%]"
            } `}
          >
            <li>
              <Link href="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />
            <div className="py-3">
              <Button
                style="bg-indigo-500 text-white px-6 py-2 rounded-full flex justify-center"
                onClick={() => console.log("Create a form")}
                text="POST A JOB"
              />
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
