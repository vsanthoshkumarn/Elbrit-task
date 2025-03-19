import React from "react";

const Features = () => {
  return (
    <section className="bg-gray-900 text-white p-10 text-center rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-xl font-bold">⚗️ Clinically Studied</p>
          <p>All products that we offer have undergone lab and safety tests</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-xl font-bold">🌱 Vegetarian Friendly</p>
          <p>We have a wide selection of vegetarian products to meet your needs</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-xl font-bold">🇮🇳 Made in India</p>
          <p>Shop local and explore health products made right here in India</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-xl font-bold">🚚 Free Shipping</p>
          <p>We deliver to your door with no shipping costs on your orders</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-xl font-bold">📦 No Risk</p>
          <p>We ensure that all products are safe and within their use-by date</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-xl font-bold">🌾 GMO Free</p>
          <p>Natural, no modified products and derivatives for those who need it</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
