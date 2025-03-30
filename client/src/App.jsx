import React from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home'
import Collection from './pages/Collection'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Favorites from './pages/Favorites'
import MyOrders from './pages/MyOrders'
import Payment from './pages/Payment'


const App = () => {
  return (

    <main className='overflow-hidden text-[#404040]'>
      <ToastContainer/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/delivery_info' element={<PlaceOrder />}/>
        <Route path='/orders' element={<Orders />}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/my_orders' element={<MyOrders />}/>
        <Route path='/payment' element={<Payment />}/>
      </Routes>
    </main>

  )
}

export default App