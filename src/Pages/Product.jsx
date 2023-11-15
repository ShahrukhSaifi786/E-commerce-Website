import React, { useContext } from "react";
import { ShopContextData } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrum from "../Component/BreadCrum";
import ProductDisplay from "../Component/ProductDisplay";
import RelatedProduct from "../Component/RelatedProduct";

const Product = () => {
  const {all_product} = useContext(ShopContextData);
  const { productId } = useParams();
  const product = all_product.find((item) => item.id === Number(productId));
  return (
    <>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <RelatedProduct product={product}/>
    </>
  );
};

export default Product;
