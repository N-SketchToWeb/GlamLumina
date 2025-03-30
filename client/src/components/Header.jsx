import React, { useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import {FaBarsStaggered} from "react-icons/fa6"
import { MdFavoriteBorder } from "react-icons/md";
import { TbShoppingBagPlus } from "react-icons/tb";
import {TbUserCircle} from 'react-icons/tb'
import {RiUserLine} from 'react-icons/ri'
import { ShopContext } from '../context/ShopContext'


const Header = () => {
  const {token, user, setToken, setUser, getCartCount, getFavoritesCount , navigate} = useContext(ShopContext)
  const [menuOpened, setMenuOpened] = useState(false)
  const toggleMenu = ()=> setMenuOpened((prev)=> !prev)
  const logout = ()=>{

     setToken(null);
     setUser(null);
     localStorage.removeItem('token');
     localStorage.removeItem('user');
     navigate('/');
  }

  return (
    <header className='max-padd-container w-full '>
        <div className='flexBetween py-3'>
            <Link to={'/'} className='flex flex-1 '>
            <div className='bold-36'>
                Glam<span className="text-[#00DD00]">Lumia</span>
            </div>
            </Link>

            <div className='flex-1'>
              <Navbar containerStyles={`${menuOpened ? "flex justify-center items-center  flex-row gap-x-6 top-16 right-6 p-6 bg-white rounded-full shadow-md w-150 h-12 z-50" : "hidden x1:flex gap-x-5 x1:gap-x-10 medium-15 ring-1 ring-slate-900/5 rounded-full p-1"}`}/>
            </div>

            <div className='flex-1 flex items-center justify-end gap-x-2 xs:gap-x-8 '>
              <FaBarsStaggered onClick={toggleMenu}
              className='x1:hidden cursor-pointer text-x1'/>
              <Link to={'/favorites'} className='flex relative'>
              <MdFavoriteBorder className='text-[24px]'/> 
              <span className='bg-[#00DD00]  text-white text-[12px] font-semibold absolute left-3.5 -top-2.5 flexCenter w-4 h-4 rounded-full shadow-md'>{getFavoritesCount()}</span>  
              </Link>
              <Link to={'/cart'} className='flex relative'>
              <TbShoppingBagPlus  className='text-[22px]'/> 
              <span className='bg-[#00DD00]  text-white text-[12px] font-semibold absolute left-1 -top-3.5 flexCenter w-4 h-4 rounded-full shadow-md'>{getCartCount()}</span>  
              </Link>
              
              <div className='group relative'>
                <div>
                  {token ? (
                    <div className='flex items-center'>
                      <TbUserCircle className='text-[29px] cursor-pointer'/>
                      <span className='ml-2 text-[14px] font-medium'>{user?.name || "Guest"}</span>
                      </div>
                    ) : (
                    <button 
                    className='btn-light flexCenter gap-x-2'><RiUserLine className='text-xl'/></button>
                    )}
                  </div>
                  
                {/* Dropdown */}
                {token && (
                  <ul className='bg-white p-2.5 w-32 ring-1 ring-slate-900/5 rounded absolute right-0 top-7 hidden group-hover:flex flex-col regular-14 shadow-md z-50 items-center'>
                    <li onClick={()=> navigate('/login')} className='p-2 text-tertiary rounded-2xl hover:bg-[#9FFE36]  cursor-pointer' >Login</li>
                    <li onClick={()=> navigate('/my_orders')} className='p-2 text-tertiary rounded-2xl hover:bg-[#9FFE36]  cursor-pointer' > My Orders</li>
                    <li onClick={logout} className='p-2 text-tertiary rounded-2xl hover:bg-[#9FFE36]  cursor-pointer'>Logout</li>
                  </ul>
                )}
              </div>
            </div>
        </div>
    </header>
  )
}

export default Header
