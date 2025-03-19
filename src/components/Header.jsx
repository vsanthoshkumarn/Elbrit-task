import React from "react";
import Bgone from "/assets/bg-3.png";
import Bgtwo from "/assets/bg-4.png"
import Bgthree from "/assets/bg-5.png"
import Bgfour from "/assets/bg-6.png"
import Bgfive from "/assets/bg-7.png"



const Header = () => {
  return (
    <section className=" gap-2 grid grid-cols-3 max-sm:grid-cols-1">
      <div className="mx-10 my-10">
        <div>
          <p className="font-semibold text-sm mb-2">INGREDIENTS</p>

          <h1 className="font-bold text-3xl mb-2">Better Ingredients</h1>
          <p p className="text-xs">
            Only the best when you choose products offered on our platform -
            high-quality <br />
            ingredients for high-quality products!
          </p>
        </div>
      </div>


      <div className="flex">
        <img src={Bgone} alt=""  />
        <div className="relative right-[380px]  mt-2">
          <h1 className="font-semibold text-xl mb-2 text-nowrap">Vitamin B3</h1>
          <h6 className="font-semibold text-gray-600 text-sm mb-28 text-nowrap ">Niacin for healthy gut and skin</h6>
          <button className="underline font-bold text-blue-900">
            See More 
          </button>
        </div>
      </div>
      <div className="flex">
        <img src={Bgtwo} alt=""  />
        <div className="relative right-[380px]  mt-2">
          <h1 className="font-semibold text-xl mb-2 text-nowrap">Vitamin B3</h1>
          <h6 className="font-semibold text-gray-600 text-sm mb-28 text-nowrap ">Niacin for healthy gut and skin</h6>
          <button className="underline font-bold text-blue-900">
            See More 
          </button>
        </div>
      </div>
      <div className="flex">
        <img src={Bgthree} alt=""  />
        <div className="relative right-[380px]  mt-2">
          <h1 className="font-semibold text-xl mb-2 text-nowrap">Magnesium</h1>
          <h6 className="font-semibold text-gray-600 text-sm mb-28 text-nowrap ">For smooth, supple and soft skin!</h6>
          <button className="underline font-bold text-blue-900">
            See More 
          </button>
        </div>
      </div>
      <div className="flex">
        <img src={Bgfour} alt=""  />
        <div className="relative right-[380px]  mt-2">
          <h1 className="font-semibold text-xl mb-2 text-nowrap">Hyaluronic Acid</h1>
          <h6 className="font-semibold text-gray-600 text-sm mb-28 text-nowrap ">For smooth, supple and soft skin!</h6>
          <button className="underline font-bold text-blue-900">
            See More 
          </button>
        </div>
      </div>
      <div className="flex">
        <img src={Bgfive} alt=""  />
        <div className="relative right-[380px]  mt-2">
          <h1 className="font-semibold text-xl mb-2 text-nowrap">Lactobacillus</h1>
          <h6 className="font-semibold text-gray-600 text-sm mb-28 text-nowrap ">Invigorate your gut microbiome</h6>
          <button className="underline font-bold text-blue-900">
            See More 
          </button>
        </div>
      </div>


    </section>
  );
};

export default Header;

// import React from "react";

// // const BetterIngredients = () => {
// //   const ingredients = [

// //     {

// //       title: "Better Ingredients",
// //       description: "Only the best when you choose products offered on our platform - high-quality ingredients for high-quality products! "

// //     },
// //     {
// //       title: "Vitamin B3",
// //       description: "Niacin for healthy gut and skin",
// //       image: "/vitamin-b3.png",
// //     },
// //     {
// //       title: "Magnesium",
// //       description: "For smooth, supple and soft skin!",
// //       image: "/magnesium.png",
// //     },
// //     {
// //       title: "Hyaluronic Acid",
// //       description: "For smooth, supple and soft skin!",
// //       image: "/hyaluronic-acid.png",
// //     },
// //     {
// //       title: "Lactobacillus",
// //       description: "Invigorate your gut microbiome",
// //       image: "/lactobacillus.png",
// //     },
// //     {

// //       title: "Vitamin C",
// //       description: "Vitamin C as ascorbic acid",
// //       image: "lifelimited/public/assets/bn2-4.jpg.png",

// //     },
// //   ];

//   return (
//     // <div className="bg-gray-100 min-h-screen flex flex-col items-center p-8">
//     //   <div className="max-w-5xl text-center">
//     //     <h2 className="text-blue-900 font-bold text-lg">INGREDIENTS</h2>
//     //   </div>

//     //   <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//     //     {ingredients.map((ingredient, index) => (
//     //       <div
//     //         key={index}
//     //         className=" p-4 shadow-md rounded-lg w-80 flex flex-col items-center"  >
//     //         <img src="" alt="" />
//     //         <img src={ingredient.image} alt={ingredient.title} className="w-24 h-24 object-contain" />
//     //         <h2 className="font-bold text-lg mt-4 text-blue-900">{ingredient.title}</h2>
//     //         <p className="text-gray-600 text-sm mt-2 text-center">{ingredient.description}</p>
//     //         <button className="mt-4 px-4 py-2 text-blue-800 font-semibold">SEE MORE</button>
//     //       </div>
//     //     ))}
//     //   </div>
//     // </div>
//   );
// };

// export default BetterIngredients;
