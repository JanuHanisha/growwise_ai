import React, { useEffect } from "react";
import "../assets/style.css"; // ✅ Import CSS

const AgroMarket = () => {
  useEffect(() => {
    // ✅ Load external script dynamically
    const script = document.createElement("script");
    script.src = "/script.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // ✅ Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100 p-6">
      <div className="market-container">
        <h1 className="text-2xl font-bold text-green-700">🌾 Agro Market</h1>
        <p className="text-gray-600 mt-2">Buy & Sell Fresh Produce Easily!</p>
      </div>
    </div>
  );
};

export default AgroMarket;
