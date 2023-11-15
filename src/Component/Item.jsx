import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='border'>
      <div className='w-full overflow-hidden'>
        <Link to={`/product/${props.id}`}><img src={props.image} className='w-full transition-all duration-500 hover:scale-[1.15] cursor-pointer' onClick={()=>{window.scrollTo(0,0)}} alt="" /></Link>
      </div>
      <div className='p-2'>
        <h2 className='sm:text-xl mb-3 font-semibold cursor-pointer'>{props.name}</h2>
        <div className='flex items-center gap-3 mb-3'>
            <h3 className='text-3xl text-[#ff4141] font-bold'>${props.new_price}</h3>
            <h3 className='text-xl font-semibold line-through'>${props.old_price}</h3>
        </div>
        <p className='font-semibold mb-3 text-sm'>Free Delivery by Shopper</p>
      </div>
    </div>
  )
}

export default Item
