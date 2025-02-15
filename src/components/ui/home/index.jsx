import React from "react";
import "./index.css"; // Custom CSS file for animations
import { useNavigate } from "react-router";

const waterTypes = [
  {
    id: 1,
    name: "Gazli Suv",
    image: "https://source.unsplash.com/200x200/?sparkling-water",
  },
  {
    id: 2,
    name: "Gazsiz Suv",
    image: "https://source.unsplash.com/200x200/?water",
  },
  {
    id: 3,
    name: "Muzli Suv",
    image: "https://source.unsplash.com/200x200/?ice-water",
  },
  {
    id: 4,
    name: "Vitaminli Suv",
    image: "https://source.unsplash.com/200x200/?vitamin-drink",
  },
  {
    id: 5,
    name: "Mineral Suv",
    image: "https://source.unsplash.com/200x200/?mineral-water",
  },
  {
    id: 6,
    name: "Oqova Suv",
    image: "https://source.unsplash.com/200x200/?tap-water",
  },
  {
    id: 7,
    name: "Sport Suvi",
    image: "https://source.unsplash.com/200x200/?sports-drink",
  },
  {
    id: 8,
    name: "Limonli Suv",
    image: "https://source.unsplash.com/200x200/?lemon-water",
  },
  {
    id: 9,
    name: "Yumshoq Suv",
    image: "https://source.unsplash.com/200x200/?soft-water",
  },
  {
    id: 10,
    name: "Alkogolsiz Kokteyl",
    image: "https://source.unsplash.com/200x200/?mocktail",
  },
  {
    id: 11,
    name: "Gazlangan Kokteyl",
    image: "https://source.unsplash.com/200x200/?carbonated-drink",
  },
  {
    id: 12,
    name: "Sutli Ichimlik",
    image: "https://source.unsplash.com/200x200/?milk-drink",
  },
  {
    id: 13,
    name: "Tarkibli Suv",
    image: "https://source.unsplash.com/200x200/?infused-water",
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-water-pattern bg-cover bg-center px-6 py-12  mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-6 drop-shadow-lg">
        Suvlarni Tanlang
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
        {waterTypes.map((water) => (
          <div
            onClick={() => navigate(`/home/${water.id}`)}
            key={water.id}
            className="p-6 shadow-xl rounded-4xl bg-white/80 backdrop-blur-lg border border-blue-300"
          >
            <img
              src={water.image}
              alt={water.name}
              className="w-full h-40 object-cover rounded-4xl mb-3"
            />
            <div className="text-center">
              <h2 className="text-xl font-semibold text-blue-800 drop-shadow">
                {water.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
