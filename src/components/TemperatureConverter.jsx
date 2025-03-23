import React, { useState } from "react";
import { FaTemperatureHigh } from "react-icons/fa";

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("C");
  const [convertedTemp, setConvertedTemp] = useState(null);

  // Temperature conversion logic
  const convertTemperature = () => {
    if (temperature === "" || isNaN(temperature)) {
      setConvertedTemp("❌ Enter a valid number!");
      return;
    }

    let temp = parseFloat(temperature);
    if (scale === "C") {
      setConvertedTemp(`${((temp * 9) / 5 + 32).toFixed(2)} °F`);
    } else {
      setConvertedTemp(`${(((temp - 32) * 5) / 9).toFixed(2)} °C`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="bg-gray-900 text-white rounded-2xl shadow-lg p-8 w-96 text-center transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2 mb-5">
          <FaTemperatureHigh className="text-red-500" /> Temperature Converter
        </h2>

        <input
          type="text"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          placeholder="Enter Temperature"
          className="w-full p-3 text-lg text-white bg-gray-700 rounded-lg mb-4 focus:ring-2 focus:ring-blue-400 border-none shadow-md"
        />

        <select
          className="w-full p-3 rounded-lg bg-gray-700 text-white text-lg mb-4 shadow-md cursor-pointer"
          value={scale}
          onChange={(e) => setScale(e.target.value)}
        >
          <option value="C">Celsius to Fahrenheit</option>
          <option value="F">Fahrenheit to Celsius</option>
        </select>

        <button
          onClick={convertTemperature}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Convert 🔄
        </button>

        {convertedTemp && (
          <p className="text-xl mt-5 font-semibold bg-gray-700 p-4 rounded-lg shadow-lg">
            {convertedTemp}
          </p>
        )}
      </div>
    </div>
  );
};

export default TemperatureConverter;
