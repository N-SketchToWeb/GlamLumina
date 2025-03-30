import React from 'react'
import { FaMailBulk } from 'react-icons/fa'
import { FaLocationDot, FaPhone } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer>

            <div className='max-padd-container flex items-start justify-between flex-col lg:flex-row gap-2 py-6 mb-1 rounded bg-[#a5fc48d0]'>
                <div>
                    <h4 className='h4'>We’ve Got You Covered</h4>
                    <p>Experience an effortless shopping journey with our wide range of makeup products. </p>
                </div>
                <div className='flexStart flex-wrap gap-8'>
                    <div className='flexCenter gap-x-6'>
                        <FaLocationDot />
                        <div>
                            <h5 className='h5'>Location</h5>
                            <p>Belagavi, Karnataka.</p>
                        </div>
                    </div>
                    <div className='flexCenter gap-x-6'>
                        <FaPhone />
                        <div>
                            <h5 className='h5'>Phone</h5>
                            <p>+91 9876543210</p>
                        </div>
                    </div>
                    <div className='flexCenter gap-x-6'>
                        <FaMailBulk />
                        <div>
                            <h5 className='h5'>Email Support</h5>
                            <p>info@glamlumina.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-padd-container flex items-start justify-between flex-wrap gap-12 bg-[#f6fcf0] p-2 '>
                <div className='flex flex-col max-w-sm gap-y-5'>
                    <div className='bold-32'>
                        Glam<span className='text-[#00DD00]'>Lumina</span>
                    </div>
                    <p>Discover the essence of beauty with us. From radiant skincare to enchanting makeup, our collection is crafted to enhance your natural charm. Let beauty be your confidence, every day.</p>
                </div>
                <div className='flexStart gap-7 xl:gap-x-36 flex-wrap'>
                    <ul>
                        <h4 className='h4 mb-3'>Customer Service</h4>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Help center</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Payment methods</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Contact</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Shipping status</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Complaints</a></li>
                    </ul>
                    <ul>
                        <h4 className='h4 mb-3'>Legal</h4>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Privacy Policy</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Cookie settings</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Terms & conditions</a></li>
                    </ul>
                    <ul>
                        <h4 className='h4 mb-3'>Others</h4>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Our teams</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Sustainability</a></li>
                    </ul>
                </div>
            </div>

            <p className='max-padd-container text-black bg-[#a5fc48d0] medium-14 py-3 px-10 rounded flexBetween mb-2'><span>© 2024 GlamLumina. All rights reserved. </span><span>Designed by Nandita Nilajagi.</span></p>
            
        </footer>
    )
}

export default Footer
