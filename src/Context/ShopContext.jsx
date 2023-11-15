import React, { createContext, useState } from "react";
import all_product from "../Assets/all_product";
const getData = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
export const ShopContextData = createContext();
const ShopContext = (props) => {
  const [cartItem, setCartItem] = useState(getData());
  const addToCart = (itemId) => {
    setCartItem({ ...cartItem, [itemId]: cartItem[itemId] + 1 });
  };
  const removeFromCart = (itemId) => {
    setCartItem({ ...cartItem, [itemId]: cartItem[itemId] - 1 });
  };
  const Total = () => {
    let total = 0;
    for (let item in cartItem) {
      if (cartItem[item] > 0) {
        let total_item = all_product.find(
          (product) => product.id === Number(item)
        );
        total += total_item.new_price * cartItem[item];
      }
    }
    return total;
  };
  const ItemCount = () => {
    let total = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        total += cartItem[item];
      }
    }
    return total;
  };
  const createContext = {
    all_product,
    addToCart,
    removeFromCart,
    cartItem,
    Total,
    ItemCount
  };
  return (
    <>
      <ShopContextData.Provider value={createContext}>
        {props.children}
      </ShopContextData.Provider>
    </>
  );
};

export default ShopContext;
