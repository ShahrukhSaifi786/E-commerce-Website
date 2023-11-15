import React, { useContext } from "react";
import dropdwon_icon from "../Assets/dropdown_icon.png";
import Item from "../Component/Item";
import { ShopContextData } from "../Context/ShopContext";
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContextData);
  return (
    <section className="my-6" key={props.iddd}>
      <img src={props.banner} alt="" />
      <div className="flex items-center justify-between mx-auto max-w-[1000px] py-5 px-2">
        <p className="sm:text-xl text-xs">
          <span className=" font-bold">Showing 1-12 </span>Out of 36 Products
        </p>
        <div className="flex items-center sm:gap-2 gap-1 sm:border-2 border border-black sm:px-6 sm:py-2 px-4 py-1 text-xs sm:text-sm rounded-2xl cursor-pointer">
          Show <img src={dropdwon_icon} alt="" />
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4 mt-7 px-3">
        {all_product.map((item, i) => {
          if (item.category === props.category) {
            return (
              <Item
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
                id={item.id}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default ShopCategory;
