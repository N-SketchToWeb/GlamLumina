import React from 'react'
import img1 from '../assets/brands/colorbar.jpeg'
import img2 from '../assets/brands/lakme.png'
import img3 from '../assets/brands/LOreal.png'
import img4 from '../assets/brands/Mac.png'
import img5 from '../assets/brands/Maybelline.jpg'
import img6 from '../assets/brands/Sugar.png'

const Brands = () => {
  return (
    <section className='max-padd-container p-14 '>
      <div className='grid grid-cols-1 x1:grid-cols-[1.5fr_2fr] gap-6 gap-y-12 rounded-x1'>
        <div className='flexCenter gap-x-10'>
          <div>
            <img src={img1} alt="brandImg" height={80} width={150} className='rounded-full' />
          </div>
          <div>
            <img src={img2} alt="brandImg" height={80} width={150} className='rounded-full' />
          </div>
          <div>
            <img src={img3} alt="brandImg" height={80} width={150} className='rounded-full' />
          </div>
          <div>
            <img src={img4} alt="brandImg" height={80} width={150} className='rounded-full' />
          </div>
          <div>
            <img src={img5} alt="brandImg" height={80} width={150} className='rounded-full' />
          </div>
          <div>
            <img src={img6} alt="brandImg" height={80} width={150} className='rounded-full' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands