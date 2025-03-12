import React, { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

const WaterList = () => {
  const socketUrl = "wss://water-seller.ucrm.uz/api/waters/";
  const [waterTypes, setWaterTypes] = useState([]);

  const { lastMessage, readyState } = useWebSocket(socketUrl, {
    shouldReconnect: () => true, // WebSocket uzilib qolsa, qayta ulanish
  });

  // Yangi kelgan ma'lumotlarni qayta ishlash
  useEffect(() => {
    if (lastMessage !== null) {
      try {
        const data = JSON.parse(lastMessage.data);
        setWaterTypes(data);
      } catch (error) {
        console.error("Xatolik: JSON format noto‘g‘ri", error);
      }
    }
  }, [lastMessage]);

  // WebSocket statusi
  const connectionStatus = {
    [ReadyState.CONNECTING]: "🔄 Ulanmoqda...",
    [ReadyState.OPEN]: "✅ Ochiq",
    [ReadyState.CLOSING]: "⚠️ Yopilmoqda...",
    [ReadyState.CLOSED]: "❌ Yopiq",
    [ReadyState.UNINSTANTIATED]: "⏳ Ishga tushirilmagan",
  }[readyState];

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">💧 Suv Turlari</h1>

      <p className="text-lg mb-4">
        📡 WebSocket holati: <strong>{connectionStatus}</strong>
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
        {waterTypes.length > 0 ? (
          waterTypes.map((water) => (
            <div
              key={water.id}
              className="p-6 shadow-lg rounded-2xl bg-white border border-blue-300"
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
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-5">⏳ Yuklanmoqda...</p>
        )}
      </div>
    </div>
  );
};

export default WaterList;
