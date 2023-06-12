import React from "react";

interface InputProps {
  value?: string;
}

const Input = ({ value }: InputProps) => {
  return (
    <>
      <div className="w-full bg-green-300 h-20 flex items-center justify-end text-2xl font-roboto rounded-t-xl">
        <input
          className="w-full h-18 bg-inherit border-none outline-none flex items-center justify-end px-2.5"
          disabled
          value={value}
        />
      </div>
    </>
  );
};

export { Input };
