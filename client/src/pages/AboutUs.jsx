import React from 'react'
import Title from '../components/Title'
import img1 from '../assets/about.jpg'
import img2 from '../assets/about1.png'
import img3 from '../assets/about2.jpg'
import img4 from '../assets/about3.jpg'

const AboutUs = () => {
    return (
        <div>

            <div className="bg-[#f6fcf0] m-9 ">
                <div className="max-padd-container py-10">
                    <div className="flexStart gap-x-4">
                        <Title title1={'About'} title2={'Us'} title1Styles={'h3'} />
                    </div>
                    <div className="mt-2">
                        <img src={img1} alt="About Us Hero" className="rounded-lg shadow-lg w-full h-[400px] object-cover" />
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="max-padd-container my-12">
                <div className="flex items-center gap-8 bg-[#f6fcf0] rounded-lg p-6 shadow-lg">
                    <img src={img2} alt="Our Mission" className="w-1/2 h-[250px] rounded-lg object-cover" />
                    <div>
                        <h4 className="h4 mb-4">Our Mission</h4>
                        <p className="medium-15 text-gray-30 leading-relaxed">
                            At GlamLumia,  our mission is to bring the world of beauty closer to you by offering a curated selection of premium brands from across the globe.
                            We aim to inspire confidence, celebrate individuality, and provide access to products that enhance your natural beauty while staying true to ethical and sustainable practices.
                        </p>
                    </div>
                </div>
            </div>

            {/* Vision Section */}
            <div className="max-padd-container my-12">
                <div className="flex items-center gap-8 bg-[#f6fcf0] rounded-lg p-6 shadow-lg flex-row-reverse">
                    <img src={img3} alt="Our Vision" className="w-1/2 h-[250px] rounded-lg object-cover" />
                    <div>
                        <h4 className="h4 mb-4">Our Vision</h4>
                        <p className="medium-15 text-gray-30 leading-relaxed">
                            We envision a world where beauty is diverse, inclusive, and accessible to everyone. Our goal is to become the ultimate destination for beauty enthusiasts, offering products that cater
                            to every skin type, tone, and need while driving positive change in the industry through innovation and responsibility.
                        </p>
                    </div>
                </div>
            </div>

            {/* Story Section */}
            <div className="max-padd-container my-12">
                <div className="bg-[#f6fcf0] rounded-lg p-6 shadow-lg">
                    <h4 className="h4 mb-4 text-center">Our Story</h4>
                    <div className="flex items-center gap-8">
                        <img src={img4} alt="Our Story" className="w-1/2 h-[250px] rounded-lg object-cover" />
                        <p className="medium-15 text-gray-30 leading-relaxed">
                            Founded in 2024, GlamLumina started with a love for beauty and a goal to make finding great products easier. We saw how confusing and unclear
                            the beauty world could be, so we created a place where customers can find trusted brands and products that really work. Now, we proudly work with global and local brands chosen for their quality, creativity, and values.
                        </p>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="max-padd-container my-12">
                <div className="bg-[#f6fcf0] rounded-lg p-6 shadow-lg text-center">
                    <h4 className="h4 mb-4">Our Values</h4>
                    <ul className="list-disc pl-6 inline-block text-left medium-15 text-gray-30 leading-relaxed">
                        <li>Quality First: Curating top-tier, safe, and effective products.</li>
                        <li>Inclusivity: Celebrating diversity in all its forms.</li>
                        <li>Sustainability: Championing eco-friendly beauty practices.</li>
                        <li>Transparency: Building trust through honesty and clarity.</li>
                        <li>Empowerment: Inspiring confidence and self-expression.</li>
                    </ul>
                </div>
            </div>

            {/* Footer */}
            <div className="max-padd-container bg-[#a5fc48d0] py-6 mt-12 rounded-lg text-center">
        <p className="text-gray-600">
          © 2024 GlamLumina. All rights reserved. Designed by Nandita Nilajagi.
        </p>
      </div>
        </div>
    )
}

export default AboutUs
