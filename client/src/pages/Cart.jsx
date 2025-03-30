import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import CartTotal from '../components/CartTotal'
import Title from '../components/Title'
import { FaRegWindowClose } from 'react-icons/fa'
import { FaMinus, FaPlus } from 'react-icons/fa6'



const Cart = () => {

    const { products, currency, cartItems, getCartAmount, getCartCount, navigate, updateQuantity } = useContext(ShopContext)
    const [cartData, setCartData] = useState([])
    const [quantities, setQuantities] = useState([])

    const totalAmount = getCartAmount ? getCartAmount() : 0;

    const increment = (id) => {
        const newValue = quantities[id] + 1
        setQuantities(prev => ({ ...prev, [id]: newValue }))
        updateQuantity(id, newValue)
    }

    const decrement = (id) => {
        if (quantities[id] > 1) {
            const newValue = quantities[id] - 1
            setQuantities(prev => ({ ...prev, [id]: newValue }))
            updateQuantity(id, newValue)
        }

    }

    useEffect(() => {
        if (products.length > 0) {
            const tempData = []
            const initialQuantities = {}

            for (const items in cartItems) {
                if (cartItems[items] > 0) {
                    tempData.push({
                        _id: items,
                        quantity: cartItems[items]
                    })
                    initialQuantities[items] = cartItems[items]
                }
            }
            setCartData(tempData)
            setQuantities(initialQuantities)
        }
    }, [cartItems, products])

    return (
        <div>
            <div className='bg-[#f6fcf0]  m-14 mt-8 '>
                <div className='max-padd-container py-10'>
                    <div className='flexStart gap-x-4'>
                        <Title title1={'Cart'} title2={'List'} title1Styles={'h3'} />
                        <h5 className='medium-15 text-gray-30 relative top-1.5'>({getCartCount()} Items)</h5>
                    </div>


                    <div className='mt-6'>
                        {cartData.map((item, i) => {
                            const productData = products.find(product => product._id === item._id)

                            return (
                                <div key={item._id} className='rounded-lg bg-white p-2 mb-3'>
                                    <div className='flex items-center gap-x-3'>
                                        <div className='flex items-start gap-6'>
                                            <img src={productData.image[0]} alt="productImg" className='w-16 sm:w-18 rounded' />
                                        </div>
                                        <div className='flex flex-col w-full'>
                                            <div className='flexBetween '>
                                                <h5 className='h5 !my-0 line-clamp-1'>{productData.name}</h5>
                                                <FaRegWindowClose onClick={() => updateQuantity(item._id, 0)}
                                                    className='cursor-pointer text-[#00DD00]' />
                                            </div>
                                            <div className='flexBetween'>
                                                <div className='flex items-center ring-1 ring-slate-900/5 rounded-full overflow-hidden bg-[#00DD00] '>
                                                    <button onClick={() => decrement(item._id)}
                                                        className='p-1.5 bg-white text-black rounded-full shadow-md'><FaMinus className='text-xs' /></button>
                                                    <p className='px-2'>{quantities[item._id]}</p>
                                                    <button onClick={() => increment(item._id)}
                                                        className='p-1.5 bg-white text-black rounded-full shadow-md'><FaPlus className='text-xs' /></button>
                                                </div>
                                                <h4 className='h4'>{currency}{productData.price}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                    <div className='flex my-20'>
                        <div className='w-full sm:w-[450px]'>
                            <CartTotal />
                            {totalAmount > 0 ? (
                                <button className='btn-secondary mt-7' onClick={() => navigate('/delivery_info')}>Proceed to Checkout</button>
                            ) : (
                                <button className='mt-7 text-[20px]' disabled>Add items to proceed</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-padd-container bg-[#a5fc48d0] py-6 mt-12 rounded-lg text-center">
        <p className="text-gray-600">
          © 2024 GlamLumina. All rights reserved. Designed by Nandita Nilajagi.
        </p>
      </div>
        </div>
    )
}

export default Cart
