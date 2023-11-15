import React from "react";
import right_icon from "../Assets/breadcrum_arrow.png";
const BreadCrum = (props) => {
  const { product } = props;
  return (
    <section className="max-w-[1400px] mx-auto py-7 px-4 flex items-center gap-1">
      <h1 className="text-xl font-semibold">HOME</h1> <img src={right_icon} className="h-4" alt="" />
      <h1 className="text-xl font-semibold">SHOP</h1> <img src={right_icon} className="h-4" alt="" />
      <h1 className="text-xl font-semibold uppercase">{product.category}</h1> <img src={right_icon} className="h-4" alt="" />
    </section>
  );
};

export default BreadCrum;
