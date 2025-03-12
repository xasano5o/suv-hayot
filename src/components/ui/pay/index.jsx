import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PayPage = () => {
  const [payment, setPayment] = useState(0);
  const [paid, setPaid] = useState(false);
  const [ws, setWs] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // LocalStorage-dan ma’lumotni olish
    const orderData = JSON.parse(localStorage.getItem("orderData"));

    if (!orderData) {
      alert("Buyurtma ma’lumoti topilmadi!");
      return;
    }

    // WebSocket ulanishi
    const socket = new WebSocket(
      `wss://water-seller.ucrm.uz/ws/payment/?ProductID=${orderData.productID}&Ice=${orderData.ice}`
    );

    socket.onopen = () => {
      console.log("WebSocket ulanib, ma’lumot yuborildi.");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "ws_message") {
        if (data.payment) {
          setPayment(data.payment); // Paymentni ekranga chiqarish
        }
        if (data.paid) {
          setPaid(data.paid); // Agar paid true bo‘lsa, tugma faollashadi
        }
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket xato berdi:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket yopildi.");
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-water-pattern bg-cover bg-center p-6">
      <h1 className="text-3xl font-bold text-white drop-shadow-lg">To‘lov sahifasi</h1>

      <div className="mt-10 bg-white/90 p-6 rounded-2xl shadow-xl text-center w-80">
        <h2 className="text-xl font-semibold text-green-600">
          Kiritilgan pul: {payment} so‘m
        </h2>
      </div>

      {/* "Oldinga" tugmasi */}
      <button
        onClick={() => navigate("/nextPage")} // Keyingi sahifaga o'tish
        disabled={!paid} // Agar paid true bo‘lmasa, disable
        className={`mt-8 w-80 h-14 text-white text-lg font-semibold rounded-xl shadow-md transition ${
          paid ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Oldinga
      </button>
    </div>
  );
};

export default PayPage;
