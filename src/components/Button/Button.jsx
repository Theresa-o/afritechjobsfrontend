import Link from "next/link";
import React from "react";

const ButtonComponent = ({ text, style, url }) => {
  return (
    <Link href={url}>
      <div className={`px-10 py-2 ${style}`}>{text}</div>
    </Link>
  );
};

export default ButtonComponent;
