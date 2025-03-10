import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import socket from "../../../service/socket/socket io";

const Home = () => {
  const [waterTypes, setWaterTypes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Backenddan suv turlarini olish uchun so‘rov yuborish
    socket.emit("get_waters");

    // 'waters_list' hodisasini tinglash
    socket.on("waters_list", (data) => {
      console.log("Yangi ma'lumot:", data);
      setWaterTypes(data);
    });

    // Komponent unmount bo‘lganda eventlarni tozalash
    return () => {
      socket.off("waters_list");
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-water-pattern bg-cover bg-center px-6 py-12">
      <h1 className="text-4xl font-bold text-white text-center mb-6 drop-shadow-lg">
        Suvlarni Tanlang
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
        {waterTypes.map((water) => (
          <div
            key={water.id}
            onClick={() => navigate(`/home/${water.id}`)}
            className="p-6 shadow-xl rounded-2xl bg-white/80 backdrop-blur-lg border border-blue-300 cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={water.image}
              alt={water.name}
              className="w-full h-40 object-cover rounded-2xl mb-3"
            />
            <h2 className="text-xl font-semibold text-blue-800 text-center">
              {water.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
