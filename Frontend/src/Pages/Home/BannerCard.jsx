import React from "react";
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";

const BannerCard = () => {

  const style = `rounded-full absolute w-12 h-12 md:w-20 md:h-20 bg-red-500 border-3 md:border-6 border-white flex justify-center items-center text-white text-xl font-bold shadow-lg`;


  return (
    <div className=" h-[100px] w-[220px] md:w-[320px] md:h-[150px] p-4 md:p-6  bg-white shadow-xl rounded-xl animate-[float_4s_ease-in-out_infinite] flex gap-3 items-start">
      <div className="relative ">
        <div className="p-1 md:p-2 bg-sky-500 animate-ping fixed rounded-full text-white"></div>
        <div className="p-1 md:p-2 bg-sky-500 fixed  rounded-full text-white"></div>
      </div>
      <div className="">
        <p className=" text-sm md:text-lg font-semibold ml-3">Our Happy Customers</p>
        <div className="text-xs text-muted-foreground">
          <div className="grid grid-cols-3 relative">
            <img
              className={`${style} left-5  md:left-10 object-cover `}
              src={profile1}
              alt="Profile 1"
            />
            <img
            className={`${style}  left-12 md:left-25 object-cover `}
              src={profile2}
              alt="Profile 2"
            />
            <div className={`${style} left-18 md:left-40 `}>7K+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
