import React from "react";

const NewsSection = () => {
  return (
    <section className=" bg-gradient-to-b from-fuchsia-100 to-white my-10 px-5 py-10">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-3 md:font-bold font-semibold">
          Get Exclusive Offers On Your Email
        </h2>
        <h3 className="lg:text-xl mb-5 md:font-semibold">
          Subscribe to our NewsLetter and stay updated
        </h3>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter Your E-mail "
            className="outline-none pl-5 p-3 border-2 border-black md:w-[400px] w-[70%] h-12 rounded-s-3xl border-r-0"
          />
          <button className="md:w-[150px] w-[30%] h-12  border-2 border-black border-l-0 bg-black text-white rounded-r-3xl">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
