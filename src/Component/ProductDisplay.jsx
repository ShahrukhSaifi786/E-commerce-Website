import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContextData } from "../Context/ShopContext";
const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContextData);
  return (
    <section className="my-7 px-4">
      <div className="max-w-[1400px] mx-auto flex  xl:justify-between flex-col xl:flex-row gap-4 ">
        <div className="flex flex-1 md:flex-row flex-col gap-3 md:items-center">
          <div className="basis-1/4 flex md:flex-col gap-1">
            <div className="flex-1">
              <img src={product.image} className="w-full" alt="" />
            </div>
            <div className="flex-1">
              <img src={product.image} className="w-full" alt="" />
            </div>
            <div className="flex-1">
              <img src={product.image} className="w-full" alt="" />
            </div>
          </div>
          <div className="basis-3/4 ">
            <img src={product.image} alt="" className="w-full" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6 xl:pl-4">
          <h1 className="md:text-2xl lg:text-3xl sm:text-xl md:font-semibold">
            {product.name}
          </h1>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_dull_icon} alt="" />
            </div>
            <p>(122)</p>
          </div>
          <div className="flex gap-4 items-center">
            <h2 className="lg:text-3xl md:text-2xl sm:text-xl lg:font-bold sm:font-semibold text-[#ff4141]">
              ${product.new_price}
            </h2>
            <h2 className="md:text-xl font-semibold">${product.old_price}</h2>
          </div>
          <h3 className="md:text-xl">
            A lightweight, usually knitted, pullover shirt, close-fitting and
            with a round neckline and short sleeves, worn as an undershirt or
            outer garment.
          </h3>
          <h1 className="lg:text-3xl md:text-2xl text-xl lg:font-bold font-semibold">
            Select Size
          </h1>
          <div className="flex gap-4 items-center mb-3">
            <div className="sm:w-14 sm:h-14 w-10 h-10 rounded-lg font-semibold duration-500 hover:bg-[#ff4141] hover:text-white cursor-pointer border flex items-center justify-center">
              S
            </div>
            <div className="sm:w-14 sm:h-14 w-10 h-10 rounded-lg font-semibold duration-500 hover:bg-[#ff4141] hover:text-white cursor-pointer border flex items-center justify-center">
              M
            </div>
            <div className="sm:w-14 sm:h-14 w-10 h-10 rounded-lg font-semibold duration-500 hover:bg-[#ff4141] hover:text-white cursor-pointer border flex items-center justify-center">
              L
            </div>
            <div className="sm:w-14 sm:h-14 w-10 h-10 rounded-lg font-semibold duration-500 hover:bg-[#ff4141] hover:text-white cursor-pointer border flex items-center justify-center">
              XL
            </div>
            <div className="sm:w-14 sm:h-14 w-10 h-10 rounded-lg font-semibold duration-500 hover:bg-[#ff4141] hover:text-white cursor-pointer border flex items-center justify-center">
              XXL
            </div>
          </div>
          <button
            className="w-[200px] py-3 bg-[#ff4141] text-white rounded-lg"
            onClick={() => {
              addToCart(product.id);
            }}
          >
            ADD TO CART
          </button>
          <p className="">
            <span className="text-xl font-bold">Category :</span> Women ,
            T-Shirt , Crop Top
          </p>
          <p className="">
            <span className="text-xl font-bold">Tags :</span> Modern , Latest
          </p>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto mt-7 xl:pl-2">
        <div className="flex items-center ">
          <div className="border border-r-0 px-9 py-3 ">Description</div>
          <div className="border px-9 py-3 bg-gray-100">Review (122)</div>
        </div>
        <div className="border p-7">
          <p className="pb-3">
            You have a multitude of options to choose from. And, it is
            imperative to choose a good quality monitor as it will not only
            provide you with great clarity (so that you get an immersive
            experience every time), but will also protect your eyes from damage
            even after extended use. Popular brands such as Samsung, LG, HP,
            Dell, Acer, Lenovo.
          </p>
          <p>
            It is imperative to choose a good quality monitor as it will not
            only provide you with great clarity (so that you get an immersive
            experience every time), but will also protect your eyes from damage
            even after extended use. Popular brands such as Samsung, LG, HP,
            Dell, Acer, Lenovo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
