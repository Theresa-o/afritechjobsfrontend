import React, { useState } from "react";
import Link from "next/link";
import { menuLinks } from "./NavLinksList";
import Image from "next/image";
// import circle from "../public/circle.svg";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  return (
    <>
      {menuLinks.map((link) => (
        <div key={link.id}>
          <div className="px-3 text-left cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() =>
                heading !== link.name ? setHeading(link.name) : setHeading("")
              }
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:mb-2">
                <ion-icon name="chevron-down"></ion-icon>
                {/* <img src="/circle.svg" alt="Hello" /> */}
              </span>
            </h1>
            {link.subMenu && (
              <div>
                <div className="absolute top-14 hidden group-hover:md:block hover:md:block">
                  <div>
                    {link.subLinks.map((subLinks, subIndex) => (
                      <div key={subIndex}>
                        {subLinks.subLink.map((eachlink) => (
                          <li
                            key={eachlink.id}
                            className="text-sm text-gray-600 my-2.5"
                          >
                            <Link
                              className="hover:text-indigo-500"
                              href={eachlink.link}
                            >
                              {eachlink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* mobile menu */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {/* sublinks */}
            {link.subLinks.map((navsublinks, subIndex) => (
              <div key={subIndex}>
                <div>
                  {navsublinks.subLink.map((eachlink) => (
                    <li key={eachlink.id} className="py-3 pl-14">
                      <Link
                        className="hover:text-indigo-500"
                        href={eachlink.link}
                      >
                        {eachlink.name}
                      </Link>
                    </li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
