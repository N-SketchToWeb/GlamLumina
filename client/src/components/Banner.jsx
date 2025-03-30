import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import banner from '../assets/banner.png'

const Banner = () => {
  return (
    <section className='mx-auto max-w-[1440px]'>
      <div className='flexBetween bg-white'>
        
        <div className=' lg:block flex-1 px-6 x1:px-12'>
          <h2 className='h2 uppercase'>Bold Confidence, Lasting Impressions</h2>
          <h3 className='h3 uppercase'>Unlock Your Fashion Potential</h3>
          <div className='flex mt-5'>
            <Link to={'/collection'} className='btn-secondary !py-0 !pr-0 rounded-full flexCenter gap-x-2 group'>
              Explore Collection
              <FaArrowRight className='bg-white text-tertiary rounded-full h-9 w-9 p-2.5 m-[3px] group-hover:-rotate-[-20deg] translate-all duration-500' />
            </Link>
          </div>
        </div>

        <div >
          <img src={banner} alt="" className="w-[600px] h-[350px]" />
        </div>

      </div>
    </section>
  )
}

export default Banner


