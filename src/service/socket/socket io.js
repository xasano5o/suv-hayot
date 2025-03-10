import { io } from "socket.io-client";

// WebSocket ulanishi
const socket = io("wss://water-seller.ucrm.uz", {
  transports: ["websocket"],
  debug: true,
  reconnectionAttempts: 5,    // 5 marta qayta ulanishga harakat qiladi
  reconnectionDelay: 2000,    // Qayta ulanish harakati 2 soniya kutib turadi
  timeout: 5000,              // 5 soniyadan keyin ulanishni to‘xtatadi
});

// Ulanish muvaffaqiyatli bo‘lganda
socket.on("connect", () => {
  console.log("WebSocket serveriga ulanish muvaffaqiyatli");
});

// Ulanishda xatolik yuzaga kelganda
socket.on("connect_error", (err) => {
  console.log("WebSocket serveriga ulanishda xatolik:", err);
});

// Ulanish uzilganda
socket.on("disconnect", () => {
  console.log("WebSocket serveridan uzildi");
});

export default socket;
