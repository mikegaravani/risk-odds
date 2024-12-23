import { useState } from "react";
import board from "./assets/board.png";
import "./diceOdds";
import "./round3V3";

function App() {
  return (
    <>
      <div className="flex flex-col items-center p-6 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-4">RISK ODDS</h1>

        <img
          src={board}
          alt="Risk board game"
          className="w-100 h-auto rounded-lg shadow-lg mb-6"
        />

        <p className="text-lg text-gray-700 text-center max-w-md">
          Number of attacking armies:
          <input className="w-full p-2 mb-4 border border-gray-300 rounded-lg" />
          Number of defending armies:
          <input className="w-full p-2 mb-4 border border-gray-300 rounded-lg" />
          <button className="w-full p-2 mt-4 bg-blue-500 text-white rounded-lg">
            Calculate odds
          </button>
        </p>
      </div>
    </>
  );
}

export default App;
