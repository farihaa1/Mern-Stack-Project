import React from "react";

const QualitySection = () => {
  const quality = [
    {
      id: 1,
      link: "AAA",
      heading: "Super fast Delivery",
      description:
        "Faster than your cravings can blink. Experience the super-fast delivery and get fresh food.",
    },
    {
      id: 2,
      link: "AAA",
      heading: "Live Order Tracking",
      description:
        "Track your order while it is delivered to your doorstep from the restaurant.",
    },
    {
      id: 3,
      link: "Your Favorite Restaurants",
      heading: "Your Favorite Restaurants",
      description:
        "Find the best and nearest top your favorite restaurants from your selected location.",
    },
  ];
  return (
    <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-3 md:gap-6 hover:shadow-md">
      {quality.map((item) => (
        <div className="p-3 md:p-6 lg:p-8 " key={item.id}>
          <h3 className="text-lg md:text-xl font-semibold">{item.heading}</h3>
          <p className="text-sm md:text-[1rem] text-gray-400">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default QualitySection;
