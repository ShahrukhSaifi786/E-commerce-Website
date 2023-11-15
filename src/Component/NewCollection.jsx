import React from 'react'
import Item from './Item';
import data_product from '../Assets/new_collections';
const NewCollection = () => {
  return (
    <section className="my-6 px-4 ">
    <h1 className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl pb-4">
      New Collection Arrival's
    </h1>
    <hr className="max-w-[400px]  mx-auto border-2 border-[#555]" />
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4 mt-7">
      {data_product.map((item, i) => {
        return (
          <Item
            image={item.image}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
            id={item.id}
          />
        );
      })}
    </div>
  </section>
  )
}

export default NewCollection
