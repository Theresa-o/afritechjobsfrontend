import React from "react";

const ButtonComponent = ({ text, onClick, style }) => {
  return (
    <div className={`px-10 py-2 ${style}`} onClick={onClick}>
      {text}
    </div>
  );
};

export default ButtonComponent;
