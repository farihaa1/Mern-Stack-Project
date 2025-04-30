import React from "react";
import asstes from "../../assets/assets";

const DeliverLocations = () => {
  const {
    dhaka,
    khulna,
    chattogram,
    sylhet,
    narayanganj,
    rajshahi,
    mymensingh,
    bogra,
    cumilla,
    tangail,
    gazipur,
    coxsbazar,
  } = asstes;
  const locations = [
    {
      id: 1,
      restaurantsName: "Dhaka",
      img: dhaka,
      restaurantsNumber: 3522,
    },
    {
      id: 2,
      restaurantsName: "Chattogram",
      img: chattogram,
      restaurantsNumber: 348,
    },
    {
      id: 3,
      restaurantsName: "Khulna",
      img: khulna,
      restaurantsNumber: 157,
    },
    {
      id: 4,
      restaurantsName: "Sylhet",
      img: sylhet,
      restaurantsNumber: 180,
    },
    {
      id: 5,
      restaurantsName: "Narayanganj",
      img: narayanganj,
      restaurantsNumber: 188,
    },
    {
      id: 6,
      restaurantsName: "Rajshahi",
      img: rajshahi,
      restaurantsNumber: 232,
    },
    {
      id: 7,
      restaurantsName: "Mymensingh",
      img: mymensingh,
      restaurantsNumber: 262,
    },
    {
      id: 8,
      restaurantsName: "Bogra",
      img: bogra,
      restaurantsNumber: 32,
    },
    {
      id: 9,
      restaurantsName: "Cumilla",
      img: cumilla,
      restaurantsNumber: 222,
    },
    {
      id: 10,
      restaurantsName: "Tangail",
      img: tangail,
      restaurantsNumber: 123,
    },
    {
      id: 11,
      restaurantsName: "Gazipur",
      img: gazipur,
      restaurantsNumber: 282,
    },
    {
      id: 12,
      restaurantsName: "Coxs Bazar",
      img: coxsbazar,
      restaurantsNumber: 32,
    },
  ];

  return (
    <div>
      <h3 className="capitalize text-xl">We deliver to:</h3>
      <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-3 md:gap-6 hover:shadow-md">
        {locations.map((item) => (
          <div className="p-3 md:p-6 lg:p-8 " key={item.id}>
            <div className="w-48 h-72 object-cover">
              <img src={item.img} alt="" />
            </div>
            <h3 className="text-lg md:text-xl font-bold">
              {item.restaurantsName}
            </h3>
            <p className="text-sm md:text-[1rem] text-gray-400">
              {item.restaurantsNumber} Restaurants
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliverLocations;
