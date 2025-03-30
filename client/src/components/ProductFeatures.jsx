import React from 'react'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { TbArrowBackUp, TbTruckDelivery } from 'react-icons/tb'

const ProductFeatures = () => {
  return (
    <section className='bg-[#f6fcf0] rounded-xl mt-4 mb-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 rounded-xl'>
            <div className='flexCenter gap-x-4 p-2 rounded-3xl'>
                <div className='text-3xl'>
                    <TbArrowBackUp className='mb-3 text-yellow-300'/>
                </div>
                    <div>
                        <h4 className='h4 capitalize'>Easy Return</h4>
                        <p>
                        Our easy return policy is designed to make your shopping experience seamless. If you're not completely satisfied with your purchase, you can return it within 7 days for a full refund or exchange. 
                        </p>
                    </div>
            </div>  

            <div className='flexCenter gap-x-4 p-2 rounded-3xl'>
                <div className='text-3xl'>
                    <TbTruckDelivery className='mb-3 text-red-500'/>
                </div>
                    <div>
                        <h4 className='h4 capitalize'>Fast delivery</h4>
                        <p>
                        Our fast delivery service ensures that your order reaches you in the shortest possible time. We prioritize speed and efficiency to bring your purchases right to your doorstep.Experience the convenience of quick shipping and get what you need when you need it, without delays.
                        </p>
                    </div>
            </div>   

            <div className='flexCenter gap-x-4 p-2 rounded-3xl'>
                <div className='text-3xl'>
                    <RiSecurePaymentLine className='mb-3 text-secondary'/>
                </div>
                    <div>
                        <h4 className='h4 capitalize'>Secure payment</h4>
                        <p>
                        Our secure payment system ensures that your personal and financial information is always protected.We use advanced encryption technology and trusted payment gateways to safeguard every transaction. 
                        </p>
                    </div>
            </div>    
            
        </div>
    </section>
  )
}

export default ProductFeatures