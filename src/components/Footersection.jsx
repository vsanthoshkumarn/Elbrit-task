import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4">
        <div className="bg-gray-600 p-4 rounded-lg shadow-lg w-64 text-center">
          <p className="font-bold">📞 Phone</p>
          <p>+974 3118 1843</p>
        </div>
        <div className="bg-gray-600 p-4 rounded-lg shadow-lg w-64 text-center">
          <p className="font-bold">✉️ Email</p>
          <p>Elbrithcqhr@gmail.com</p>
        </div>
        <div className="bg-gray-600 p-4 rounded-lg shadow-lg w-64 text-center">
          <p className="font-bold">📍 Address</p>
          <p>Ambassador Street, Zone 61</p>
        </div>
      </div>
      <div><img src="lifelimited/public/assets/Logo.png" alt="" /></div>
      <p className="text-sm">
        Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.
      </p>
      <p className="mt-2 text-xs">© Elbrit Life Sciences Pvt. Ltd., Mumbai 400051</p>
    </footer>
  );
};

export default Footer;