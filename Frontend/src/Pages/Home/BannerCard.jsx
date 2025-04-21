import React from "react";
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";

const BannerCard = () => {
  return (
    <div className="w-[320px] h-[150px] p-6  bg-white shadow-xl rounded-xl animate-[float_4s_ease-in-out_infinite] flex gap-3 items-start">
     <div className="relative ">
     <div className="p-2 bg-sky-500 animate-ping fixed rounded-full text-white">
       
       </div>
       <div className="p-2 bg-sky-500 fixed  rounded-full text-white">
        
       </div>
     </div>
      <div className="">
        <p className="text-lg font-semibold ml-3">Our Happy Customers</p>
        <div className="text-xs text-muted-foreground">
          <div className="grid grid-cols-3 relative">
            <img
              className="rounded-full absolute w-20 h-20 left-10 object-cover border-6 border-white"
              src={profile1}
              alt="Profile 1"
            />
            <img
              className="rounded-full absolute left-25 w-20 h-20 object-cover border-6 border-white"
              src={profile2}
              alt="Profile 2"
            />
            <div className="rounded-full absolute left-40 w-20 h-20 bg-red-500 border-6 border-white flex justify-center items-center text-white text-xl font-bold shadow-lg">
              7K+
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
