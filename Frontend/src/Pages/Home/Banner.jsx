import React from "react";
import Lottie from "lottie-react";
import bannerLottie from "../../assets/lottiefiles/banner.json";
import arrowLottie from "../../assets/lottiefiles/arrow.json";
import { FaCheck } from "react-icons/fa";
import Comment from "../../components/comment";
import { RiTimerFlashLine } from "react-icons/ri";
import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row  justify-start items-center md:h-[35rem] gap-4">
      <div className="w-full md:w-3/5 flex flex-col md:pl-12 ">
        <h2 className="capitalize text-3xl  text-center md:text-start md:text-5xl mt-4 lg:mt-0 lg:text-6xl font-black pb-4 md:leading-13 lg:leading-16 ">
          Delivery <br /> in <span className="text-red-700">30 minutes</span>
          <br /> at your doorstep
        </h2>

        <p className="capitalize  text-sm lg:text-lg text-center md:text-start ">
          we are the fastest food delivery service in your country. Search for
          your favorite Foods or Restaurants
        </p>

        <div></div>
      </div>
      <div className="w-full z-0 md:w-2xl md:z-20 relative ">
        <div className=" bg-red-800 px-2 md:pt-0 z-0 md:px-0 md:z-20 rounded-tl-full  ">
          <Lottie animationData={bannerLottie} loop={true} autoplay={true} />
          <div className="absolute top-96 md:top-120 z-10 right-64 md:right-90 animate animate-float">
            <Comment
              icon={
                <FaCheck className="text-white p-1 bg-green-500 rounded-full" />
              }
              heading={"Delivery Complete"}
            />
          </div>
          <div className="absolute top-50 right-10 animate-float">
            <Comment
              icon={
                <RiTimerFlashLine className="text-white p-1  bg-green-500 rounded-full text-xl md:text-4xl" />
              }
              heading={"Delivery 30 Min"}
            />
          </div>
          <div className="absolute flex md:top-140">
            <div className=" w-32 md:w-56  z-10 rotate-[20deg] top-90 ">
              <Lottie animationData={arrowLottie} loop={true} autoplay={true} />
            </div>
            <div className="w-l md:w-xs md:top-90">
              <BannerCard></BannerCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
