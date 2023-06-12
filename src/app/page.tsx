"use client";

import { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

export default function Home() {
  const [currentNumber, setCurrentNumber] = useState<string>("0");
  const [firstNumber, setFirstNumber] = useState<string>("0");
  const [operation, setOperation] = useState<string>("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleInput = (number: string) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handleSumNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber.toString());
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(sum.toString());
      setOperation("");
    }
  };

  const handleMinusNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber.toString());
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(minus.toString());
      setOperation("");
    }
  };

  const handlePlusNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber.toString());
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const plus = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(plus.toString());
      setOperation("");
    }
  };

  const handleDivideNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber.toString());
      setCurrentNumber("0");
      setOperation("÷");
    } else {
      const divide = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(divide.toString());
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "0" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumber();
          break;
        case "-":
          handleMinusNumber();
          break;
        case "*":
          handlePlusNumber();
          break;
        case "÷":
          handleDivideNumber();
          break;
        default:
          break;
      }
    }
  };

  return (
    <main className="w-full h-[calc(100vh_-_48px)] bg-gray-500 flex items-center  justify-center">
      <div className="bg-gray-400 w-2/4 min-h-[350px] rounded-xl">
        <Input value={currentNumber} />
        <div className="flex flex-col p-2 gap-1">
          <div className="flex justify-center gap-1">
            <Button label="0" onClick={() => handleInput("0")} />
            <Button label="÷" onClick={handleDivideNumber} />
            <Button label="*" onClick={handlePlusNumber} />
            <Button label="=" onClick={handleEquals} />
          </div>
          <div className="flex justify-center gap-1">
            <Button label="7" onClick={() => handleInput("7")} />
            <Button label="8" onClick={() => handleInput("8")} />
            <Button label="9" onClick={() => handleInput("9")} />
            <Button label="-" onClick={handleMinusNumber} />
          </div>
          <div className="flex justify-center gap-1">
            <Button label="4" onClick={() => handleInput("4")} />
            <Button label="5" onClick={() => handleInput("5")} />
            <Button label="6" onClick={() => handleInput("6")} />
            <Button label="+" onClick={handleSumNumber} />
          </div>
          <div className="flex justify-center gap-1">
            <Button label="1" onClick={() => handleInput("1")} />
            <Button label="2" onClick={() => handleInput("2")} />
            <Button label="3" onClick={() => handleInput("3")} />
            <Button label="C" onClick={handleOnClear} />
          </div>
        </div>
      </div>
    </main>
  );
}
