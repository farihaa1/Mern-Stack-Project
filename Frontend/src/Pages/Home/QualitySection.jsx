import React from "react";
import { assets } from "../../assets/assets";

const QualitySection = () => {
  const quality = [
    {
      id: 1,
      img: assets.superFast,
      heading: "Super fast Delivery",
      description:
        "Faster than your cravings can blink. Experience the super-fast delivery and get fresh food.",
    },
    {
      id: 2,
      img: assets.orderTrack,
      heading: "Live Order Tracking",
      description:
        "Track your order while it is delivered to your doorstep from the restaurant.",
    },
    {
      id: 3,
      img: assets.favorite_res,
      heading: "Your Favorite Restaurants",
      description:
        "Find the best and nearest top your favorite restaurants from your selected location.",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-3 md:gap-6 px-4 md:px-12">
      {quality.map((item) => (
        <div className="p-3 md:p-6 lg:p-8  hover:shadow-md transition flex flex-col justify-center items-center text-center border" key={item.id}>
          <div className="w-32 h-32 py-2 my-2"><img className="w-full h-full object-contain" src={item.img} alt="" /></div>
          <h3 className="text-lg md:text-xl font-semibold">{item.heading}</h3>
          <p className="text-sm md:text-[1rem] text-gray-500">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default QualitySection;
