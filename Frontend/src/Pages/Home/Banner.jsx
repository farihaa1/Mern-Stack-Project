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
    <div className="flex justify-start items-center">
      <div className="w-3/5 pl-8">
        <h2 className="capitalize text-5xl lg:text-6xl font-black pb-4 leading-13 lg:leading-16 ">
          Delivery <br /> in <span className="text-red-700">30 minutes</span>{" "}
          <br /> at your doorstep
        </h2>
        <p className="capitalize">
          we are the fastest food delivery service in your country. Search for
          your favorite FOODS OR Restaurants
        </p>
        <div></div>
      </div>
      <div className="w-full md:w-2xl z-20">
        <div className=" bg-red-800 z-20 rounded-tl-full relative ">
          <Lottie animationData={bannerLottie} loop={true} autoplay={true} />
          <div className="fixed top-120 z-10 right-90 animate animate-float">
            <Comment
              icon={
                <FaCheck className="text-white p-1 bg-green-500 rounded-full" />
              }
              heading={"Delivery Complete"}
            />
          </div>
          <div className="fixed top-50 right-10 animate-float">
            <Comment
              icon={
                <RiTimerFlashLine className="text-white p-1  bg-green-500 rounded-full text-4xl" />
              }
              heading={"Delivery 30 Min"}
            />
          </div>
          <div className="fixed w-56 bottom-60 right-80 z-10 rotate-[20deg]">
            <Lottie animationData={arrowLottie} loop={true} autoplay={true} />
          </div>
          <div className="fixed w-xs right-10 bottom-50">
            <BannerCard></BannerCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
