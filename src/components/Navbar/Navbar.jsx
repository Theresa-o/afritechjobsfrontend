import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Button from "./Button";
// import afritechlogo from "afritechlogo.png";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full cursor-pointer">
          <Image
            src="/afritechlogo.png"
            alt="Afritech Logo"
            className="dark:invert"
            width={35}
            height={30}
          />
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
          <Button />
        </div>
        {/* mobile nav view */}
        <ul
          className={
            "md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4"
          }
        >
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-3">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
