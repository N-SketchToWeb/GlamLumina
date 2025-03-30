import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { FaStar, FaStarHalfStroke, FaTruckFast } from 'react-icons/fa6'
import { FaHeart } from 'react-icons/fa'
import { TbShoppingBagPlus } from 'react-icons/tb'
import ProductFeatures from '../components/ProductFeatures'



const Product = () => {

  const { productId } = useParams()
  const { products, currency, addToCart, addToFavorites } = useContext(ShopContext)
  const [product, setProduct] = useState(null)
  const [image, setImage] = useState("")


  const fetchProductData = async () => {
    const selectedProduct = products.find((item) => item._id === productId)
    if (selectedProduct) {
      setProduct(selectedProduct)
      setImage(selectedProduct.image[0])
    }
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  if (!product) {
    return <div>...Loading</div>
  }

  return (
    <div>
      <div className='max-padd-container mt-6'>
        {/* Product data */}
        <div className='flex gap-12 flex-col xl:flex-row bg-[#f6fcf0] rounded-2xl p-3'>
          {/* Product image */}
          <div className='flex flex-1 gap-x-2 xl:flex-1'>
            <div className='flexCenter flex-col gap-[7px] flex-wrap'>
              {product.image.map((item, i) => (
                <img onClick={() => setImage(item)} key={i} src={item} alt="productImg"
                  className='max-h-[89px] rounded-lg' />
              ))}
            </div>
            <div className='max-h-[400px] w-[400px] flex'>
              <img src={image} alt="productImg" className='rounded-xl bg-gray-10' />
            </div>
          </div>
          {/* Product info */}
          <div className='flex-[1.5] rounded-2xl xl:px-7'>
            <h3 className='h3 leading-none'>{product.name}</h3>
            <div className='flex items-baseline gap-x-5'>
              <div className='flex items-center gap-x-2 text-[#00DD00]'>
                <div className='flex gap-x-2'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                </div>
                <span className='medium-14'>(122)</span>
              </div>
            </div>
            <h4 className='h4 my-2'>{currency}{product.price}.00</h4>
            <p className='max-w-96 my-4 pb-20'>{product.descrption}</p>
            <div className='flex items-center gap-x-4'>
              <button onClick={() => addToCart(product._id)} className='btn-secondary !rounded-lg sm:w-1/2 flexCenter gap-x-2 capitalize'>Add to Bag <TbShoppingBagPlus /></button>
              <button onClick={() => addToFavorites(product._id)} className='btn-secondary !rounded-lg !py-3.5'><FaHeart /></button>
            </div>
            <div className='flex items-center gap-x-2 mt-3 pb-3'>
              <FaTruckFast className='text-lg' />
              <span className='medium-14'>Free delivery on orders over ₹500</span>
            </div>
            <hr className='my-3 w-2/3 ' />
            <div className='mt-2 flex flex-col gap-1 text-gray-30 text-[14px]'>
              <p>Authenticy You Can Trust</p>
              <p>Enjoy Cash on Delivery for Your Convenience</p>
              <p>Easy Returns and Exchange Within 7 Days</p>
            </div>
          </div>
        </div>
        <ProductFeatures />
        <div className="max-padd-container bg-[#a5fc48d0] py-6 mt-12 rounded-lg text-center">
        <p className="text-gray-600">
          © 2024 GlamLumina. All rights reserved. Designed by Nandita Nilajagi.
        </p>
      </div>
      </div>
    </div>

  )
}

export default Product