import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import  "./index.css"

const WaterList = () => {
  const navigate = useNavigate()
  const apiUrl = "https://water-seller.ucrm.uz/api/waters/";
  const [waterTypes, setWaterTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setWaterTypes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API so‘rovda xatolik:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 bg-water-pattern h-[100vh]  min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">💧 Suv Turlari</h1>

      {loading ? (
        <p className="text-gray-600 text-center">⏳ Yuklanmoqda...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
          {waterTypes?.map((water) => (
            <div
            onClick={() => navigate(`home/${water.id}`)}
              key={water?.id}
              className="p-6 shadow-lg rounded-2xl bg-white border border-blue-300"
            >
              <img
                src={water?.image}
                alt={water.name}
                className="w-full h-40 object-cover rounded-2xl mb-3"
              />
              <h2 className="text-xl font-semibold text-blue-800 text-center">
                {water?.name}
              </h2>
              <h2 className="text-xl font-semibold text-blue-800 text-center">
                {water?.price} so'm
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WaterList;
