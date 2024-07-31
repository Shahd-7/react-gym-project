import React from "react";

const SecondaryBtn = ({
  type,
  id,
  children,
  className,
  onClick = () => {},
}) => {
  return (
    <>
      <button
        type={type}
        id={id}
        className={`text-base text-brightRed bg-indigo-600/5 font-medium px-3 py-1.5 rounded flex items-center border border-brightRed gap-x-1 hover:border-brightRed/70
           hover:bg-indigo-600/10 ease-out duration-500 ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default SecondaryBtn;
