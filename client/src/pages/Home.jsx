import React from 'react'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import NewArrivals from '../components/NewArrivals'
import Banner from '../components/Banner'
import PopularProducts from '../components/PopularProducts'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <NewArrivals />
      <Banner />
      <PopularProducts />
      <Footer />
    </>
  )
}

export default Home