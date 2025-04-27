import React from "react";

const DeliverLocations = () => {
  const locations = [
    {
      id: 1,
      restaurantsName: "Dhaka",
      restaurantsNumber: 3522,
    },
    {
      id: 2,
      restaurantsName: "Chattogram",
      restaurantsNumber: 348,
    },
    {
      id: 3,
      restaurantsName: "Khulna",
      restaurantsNumber: 157,
    },
    {
      id: 3,
      restaurantsName: "Khulna",
      restaurantsNumber: 157,
    },
  ];
  return (
   <div>
    <h3 className="capitalize text-xl">We deliver to:</h3>
     <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-3 md:gap-6 hover:shadow-md">
      {locations.map((item) => (
        <div className="p-3 md:p-6 lg:p-8 " key={item.id}>
          <h3 className="text-lg md:text-xl font-bold">{item.restaurantsName}</h3>
          <p className="text-sm md:text-[1rem] text-gray-400">
            {item. restaurantsNumber} Restaurants
          </p>
        </div>
      ))}
    </div>
   </div>
  );
};

export default DeliverLocations;
