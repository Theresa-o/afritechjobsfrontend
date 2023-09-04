import React from "react";

const NavLinks = () => {
  const menuLinks = [
    { name: "Community" },
    { name: "Talents" },
    { name: "Employers" },
  ];

  return (
    <>
      {menuLinks.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer">
            <h1 className="py-7">{link.name}</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
