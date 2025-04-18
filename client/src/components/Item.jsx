import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const Item = ({ product }) => {
  return (
    <div className='bottom-12 relative'>
      <Link to={`/product/${product._id}`} className='flexCenter relative top-12 overflow-hidden m-2.5 rounded-x1'>
        <img src={product.image[0]} alt="productImg" className="w-[250px] h-[280px] object-cover shadow-lg rounded-lg border border-gray-200" />
      </Link>
      <div className='p-2 pt-12 bg-[#d7f9b2] shadows rounded-md'>
        <h4 className='bold-15 line-clamp-1 !my-0'>{product.name}</h4>
        <div className='flexBetween pt-1'>
          <h5 className='h5 pr-2'>₹{product.price}.00</h5>
          <div className='flex items-baseline gap-x-1'>
            <FaStar className='text-[#00DD00]' />
            <h5 className='h5 relative -bottom-0.5'>4.8</h5>
          </div>
        </div>
        <p className='line-clamp-2 py-1'>{product.descrption}</p>
      </div>
    </div>
  )
}

export default Item