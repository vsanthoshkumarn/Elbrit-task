import React from "react";
import product from "/assets/pr-1.png"
import Bg from "/assets/bg-1.png"

const EssentialVitamins = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full bg-slate-300 shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-6 text-center md:text-left">
          <h1 className="text-8xl font-bold text-blue-900 text-nowrap max-sm:text-4xl">Essential Vitamins</h1>
          <p className="text-gray-600 mt-2">Online Medical Supplies</p>
          <p className="text-gray-800 font-semibold text-lg mt-2">Get Your Vitamins & Minerals</p>
          <button className="mt-4 px-6 py-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800">EXPLORE</button>
        </div>
        
        <div className="md:w-1/2 flex flex-col items-center">
        {/* <img src={Bg} alt="" className="w-48" /> */}
          <img
            src={product}  
            alt="Probiotics Bottle"
            className="w-88 h-88 object-contain bg-[url('/assets/bg-1.png')] bg-cover bg-center "
          />
        </div>
      </div>
      
      <div className="mt-8 flex flex-col md:flex-row gap-6">
        <div className="flex items-center bg-white p-4 shadow-md rounded-lg w-80">
          <div className="text-blue-800 text-xl"><img src="lifelimited/public/assets/bn2-2.jpg.png" alt="" /></div>
          <div className="ml-4">
            <h2 className="font-bold text-lg">Vitamins</h2>
            <p className="text-gray-600 text-sm">Increased vitamins and minerals in your diet</p>
          </div>
        </div>
        
        <div className="flex items-center bg-white p-4 shadow-md rounded-lg w-80">
          <div className="text-blue-800 text-xl">⚖️</div>
          <div className="ml-4">
            <h2 className="font-bold text-lg">Weight Loss</h2>
            <p className="text-gray-600 text-sm">Find scientifically proven solutions</p>
          </div>
        </div>
        
        <div className="flex items-center bg-white p-4 shadow-md rounded-lg w-80">
          <div className="text-blue-800 text-xl">🥦</div>
          <div className="ml-4">
            <h2 className="font-bold text-lg">Functional Foods</h2>
            <p className="text-gray-600 text-sm">From protein powders to baby formula</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssentialVitamins;