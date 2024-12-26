import { useState } from "react";
import board from "./assets/board.png";
import diceIcon from "./assets/dice-cube.png";
import "./diceOdds";
import { outcomes1V1 } from "./rounds/round1V1";
import { outcomes1V2 } from "./rounds/round1V2";
import { outcomes1V3 } from "./rounds/round1V3";
import { outcomes2V1 } from "./rounds/round2V1";
import { outcomes2V2 } from "./rounds/round2V2";
import { outcomes2V3 } from "./rounds/round2V3";
import { outcomes3V1 } from "./rounds/round3V1";
import { outcomes3V2 } from "./rounds/round3V2";
import { outcomes3V3 } from "./rounds/round3V3";

function App() {
  const [isProbabilityWindowOpen, setIsProbabilityWindowOpen] = useState(false);

  const outcomes = [
    { name: "1V1", data: outcomes1V1 },
    { name: "1V2", data: outcomes1V2 },
    { name: "1V3", data: outcomes1V3 },
    { name: "2V1", data: outcomes2V1 },
    { name: "2V2", data: outcomes2V2 },
    { name: "2V3", data: outcomes2V3 },
    { name: "3V1", data: outcomes3V1 },
    { name: "3V2", data: outcomes3V2 },
    { name: "3V3", data: outcomes3V3 },
  ];
  return (
    <>
      <div className="absolute top-4 left-4">
        <button
          onClick={() => setIsProbabilityWindowOpen(!isProbabilityWindowOpen)}
          className="flex items-center justify-center w-10 h-10 bg-gray-300 text-sm text-gray-800 rounded shadow lg:w-20 lg:h-20"
        >
          <img
            src={diceIcon}
            alt="Dice icon"
            className="w-8 h-8 lg:w-16 lg:h-16"
          />
        </button>
      </div>

      <div className="flex flex-col items-center p-6 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-4">RISK ODDS</h1>

        <img
          src={board}
          alt="Risk board game"
          className="w-full max-w-[700px] h-auto rounded-lg shadow-lg mb-6"
        />

        <div className="text-lg text-gray-700 text-center max-w-md">
          Number of attacking armies:
          <input className="w-full p-2 mb-4 border border-gray-300 rounded-lg" />
          Number of defending armies:
          <input className="w-full p-2 mb-4 border border-gray-300 rounded-lg" />
          <button className="w-full p-2 mt-4 bg-blue-500 text-white rounded-lg">
            Calculate odds
          </button>
        </div>
      </div>

      {/* Probability popup window */}
      {isProbabilityWindowOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white m-4 p-6 rounded-lg shadow-lg max-w-fit w-[90%]">
            <h2 className="text-2xl font-bold mb-4">Dice Roll Probabilities</h2>

            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">
                    Dice VS Dice
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    RED WINS 3
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    RED WINS 2
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    RED WINS 1
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    RED WINS 0
                  </th>
                  <th className="border border-gray-300 px-4 py-2">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {outcomes.map((outcome, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2 text-center align-middle">
                      {outcome.name}
                    </td>
                    {outcome.data.map((value, valueIndex) => (
                      <td
                        key={valueIndex}
                        className={`border border-gray-300 px-4 py-2  text-center align-middle ${
                          value === 0 ? "invisible" : ""
                        }`}
                      >
                        {Math.round(value * 100)} %
                      </td>
                    ))}
                    <td className="border border-gray-300 px-4 py-2 font-bold  text-center align-middle">
                      {Math.round(
                        outcome.data.reduce((sum, value) => sum + value, 0) *
                          100
                      )}{" "}
                      %
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              onClick={() => setIsProbabilityWindowOpen(false)}
              className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
