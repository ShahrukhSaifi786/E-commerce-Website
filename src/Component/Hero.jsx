import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import hero_img from "../Assets/hero_image.png";
import btn_arrow from '../Assets/arrow.png'
const Hero = () => {
  return (
    <section className="min-h-[300px] bg-gradient-to-b from-fuchsia-100 to-white py-5">
      <div className="max-w-[1300px]  mx-auto flex items-center flex-col gap-6 md:flex-row md:justify-between ">
        <div className="md:pl-20 sm:pl-10 pl-5 flex-1 order-2 sm:order-1">
          <h1 className="lg:text-4xl md:text-2xl text-xl md:font-bold my-3 sm:font-semibold">NEW ARRIVALS ONLY</h1>
          <div className="flex items-center gap-3 my-3">
            <span className="text-2xl text-semibold">New</span>
            <img src={hand_icon} alt="" className="w-10"/>
          </div>
          <p className="lg:text-5xl md:text-3xl text-2xl md:mb-5 sm:mb-3 mb-2 md:font-bold font-semibold">Collection</p>
          <p className="lg:text-5xl md:text-3xl text-2xl  md:font-bold font-semibold">For EveryOne</p>
          <div className="max-w-[250px] min-h-[50px] md:mt-9 sm:mt-8 mt-7 flex items-center justify-center bg-[#ff4141] gap-2 text-white font-bold rounded-xl">
            Latest Collection 
            <img src={btn_arrow} alt="" className="w-6" />
          </div>
        </div>
        <div className="text-center order-1 sm:order-2 flex-1 flex justify-center">
          <img src={hero_img} alt="" className="w-[60%]"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
