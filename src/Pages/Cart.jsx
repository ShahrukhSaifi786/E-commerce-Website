import React, { useContext } from "react";
import { ShopContextData } from "../Context/ShopContext";
import cross_icon from "../Assets/cart_cross_icon.png";
const Cart = () => {
  const { cartItem, all_product, removeFromCart,Total } = useContext(ShopContextData);
  return (
    <section className="w-full my-7 ">
      <div className="overflow-x-auto w-full">
        <div className="xl:w-[1400px] px-3 lg:w-[1200px] md:w-[1000px] sm:w-[900px] w-[500px] py-4 border-b-2 mx-auto  grid grid-cols-6">
          <p className="md:text-xl md:font-bold font-semibold text-xs">
            Products
          </p>
          <p className="md:text-xl md:font-bold font-semibold text-xs">Title</p>
          <p className="md:text-xl md:font-bold font-semibold text-xs">Price</p>
          <p className="md:text-xl md:font-bold font-semibold text-xs">
            Quantity
          </p>
          <p className="md:text-xl md:font-bold font-semibold text-xs">Total</p>
          <p className="md:text-xl md:font-bold font-semibold text-xs">
            Remove
          </p>
        </div>
        {all_product.map((e) => {
          if (cartItem[e.id] > 0) {
            return (
              <div className="xl:w-[1400px] lg:w-[1200px] md:w-[1000px] sm:w-[900px] w-[500px] py-4 px-3 border-b-2 mx-auto  grid grid-cols-6 items-center">
                <img src={e.image} className="md:w-16 rounded-lg w-10" alt="" />
                <p>Clothes</p>
                <p className="sm:text-xl font-semibold">${e.new_price}</p>
                <div className="sm:w-14 sm:h-14 w-10 h-10 cursor-pointer rounded-lg border flex items-center justify-center">
                  {cartItem[e.id]}
                </div>
                <p className="sm:text-xl font-semibold">
                  ${cartItem[e.id] * e.new_price}
                </p>
                <img
                  src={cross_icon}
                  className="cursor-pointer"
                  alt=""
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
            );
          }
        })}
      </div>
      <div className="max-w-[1400px] mx-auto flex lg:justify-around lg:flex-row flex-col gap-5 my-14 px-4">
        <div className="flex flex-col gap-6 lg:w-[400px] w-full">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">Cart Total</h1>
          <div className="flex justify-between border-b-2 border-black pb-2">
            <p className="text-xl font-semibold">Subtotal</p>
            <h2 className="text-xl font-bold">${Total()}</h2>
          </div>
          <div className="flex justify-between border-b-2 border-black pb-2">
            <p className="text-xl font-semibold">Shipping Fee</p>
            <h2 className="text-xl font-bold">Free</h2>
          </div>
          <div className="flex justify-between border-b-2 border-black pb-2">
            <h2 className="text-3xl font-bold ">Total</h2>
            <h2 className="text-3xl font-bold ">${Total()}</h2>
          </div>
        <button className="sm:w-[250px] sm:font-semibold text-xs rounded-3xl px-2 py-4 bg-[#ff4141] text-white">PROCEED TO CHECKOUT</button>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-bold sm:text-xl">Enter Your PromoCode</p>
          <div className="flex items-center w-full">
            <input type="text" placeholder="Enter Promocode"  className=" p-2 outline-none border-2 border-black border-r-0 sm:w-[340px] w-[70%] h-12 rounded-s-3xl" />
            <button className="sm:w-[150px] w-[30%] border-2 border-black h-12 border-l-0 outline-none bg-black text-white rounded-e-3xl">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
