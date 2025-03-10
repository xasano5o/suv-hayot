import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";

const waterTypes = [
  {
    id: 1,
    tur: "Muzsiz",
    price: "3000",
  },
  {
    id: 2,
    tur: "Muzli",
    price: "3000",
  },
];

const HomeIdPage = () => {
  const { id } = useParams();
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();
  const handleSelect = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="min-h-screen flex flex-col  justify-evenly items-center bg-water-pattern bg-cover bg-center  bg-gradient-to-br from-blue-400 to-indigo-600 p-6">
      {/* Card container */}
      <div className="flex gap-6 mt-16">
        {waterTypes.map((water) => (
          <div
            key={water.id}
            onClick={() => handleSelect(water.id)}
            className={`p-6 w-72 h-40 shadow-2xl rounded-2xl bg-white/80 backdrop-blur-lg border transition cursor-pointer flex flex-col justify-center items-center gap-3 text-center ${
              selectedId === water.id
                ? "border-[7px] border-green-600"
                : "border-blue-300"
            }`}
          >
            <h1 className="text-4xl font-semibold text-blue-800 drop-shadow-lg">
              {water.tur}
            </h1>
          </div>
        ))}
      </div>

      {/* Price display */}
      <div className="mt-10">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Umumiy: 3,000 s'om
        </h1>
      </div>

      {/* Buttons */}
      <div className="w-full flex  justify-center items-center gap-4 mt-10 mb-6">
        <button
          onClick={() => navigate("/")}
          className="w-80 h-14 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Orqaga
        </button>
        <button
          onClick={() => navigate("/pay")}
          className="w-80 h-14 bg-green-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-green-700 transition"
        >
          Oldinga
        </button>
      </div>
    </div>
  );
};

export default HomeIdPage;
