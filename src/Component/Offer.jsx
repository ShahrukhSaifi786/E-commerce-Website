import React from "react";
import Offer_img from "../Assets/exclusive_image.png";
const Offer = () => {
  return (
    <section className="min-h-[200px]  my-10 bg-gradient-to-b from-fuchsia-100 to-white">
      <div className="max-w-[1400px] mx-auto flex md:items-center md:flex-row flex-col gap-5">
        <div className="flex-1 md:order-1 order-2 flex flex-col items-center">
          <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-3 font-bold">Exclusive Offers For You</h1>
          <h3 className="md:text-xl mb-3 ">ONLY ON THE BEST SELLER PRODUCTS</h3>
          <button className="px-7 py-2 bg-[#ff4141] text-white rounded-lg mb-3">Check Now</button>
        </div>
        <div className="flex-1 md:order-2 order-1 flex justify-center">
          <img src={Offer_img} alt="" className="md:w-[30%] w-[50%]"  />
        </div>
      </div>
    </section>
  );
};

export default Offer;
