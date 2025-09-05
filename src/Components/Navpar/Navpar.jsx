import React from 'react'
import './Navpar.css'
 import {assets} from '../../assets/assets.js'
 import { useState } from 'react'
 import { Link } from 'react-router-dom'
 import { useContext } from 'react'
 import { shopContext } from '../../Context/Context'
const Navpar = () => {
const{Def, Count,Search , Ser, setSer }=useContext(shopContext)
const [Menu, setMenu] = useState(false)

const [isOpen, setIsOpen] = useState("home");

   return (
    <div className='navpar px:20 mt-10  flex justify-between items-center sm:px-26 sm:mt-7 mb-10 w-full'>
      <div className="logo w-20 ml-10 sm:w-40 sm:ml-7">
     <Link to='/'>   <img src={assets.logo} alt="logo" /></Link>   
       </div>
{ Menu===false ?       <div className="mid flex md:block">
<ul className='hidden lg:flex mx-10 cursor-pointer relative uppercase ' >
  <Link to='/'> <li onClick={() => setIsOpen("home")}  className={`mr-5 ${isOpen === "home" ? "border-b-2 border-black-500 " : ""} transition ease-in-out duration-300`}>Home</li></Link>
  
  <Link to='/collection'> <li onClick={() => setIsOpen("collection")}
   className={`mr-5 ${isOpen === "collection" ? "border-b-2 border-black-500 " : ""} `}> collection  </li></Link>

   <Link to='/about'> <li onClick={() => setIsOpen("about")} className={`mr-5 ${isOpen === "about" ? "border-b-2 border-black-500 " : ""}`}>About</li></Link>

 <Link to='/contact'> <li onClick={() => setIsOpen("contact")} className={`mr-5 ${isOpen === "contact" ? "border-b-2 border-black-500 " : ""} `}>contact</li></Link>
 </ul>
       </div> 
       
       : 
       
       
       
       
       <div className="mid flex flex-col w-[100%] h-[100vh] z-10 absolute top-0 left-0 bg-white ">
       <ul className='flex flex-col flex-10  w-[100%] h-[100%]  mx-10 cursor-pointer relative uppercase ' >
        <li onClick={() => setMenu(false)} className=' mb-5 cursor-pointer'>Back </li>
        <hr className='border-1 border-gray-200  mt-3' />
  <Link to='/'> <li onClick={() => {setIsOpen("home") , setMenu(false)}}  className={`mr-5 ${isOpen === "home" ? " mb-5 cursor-pointer  bg-black text-amber-50 h-[30px] " : ""} transition ease-in-out duration-300`}>Home</li></Link>
  <hr className='border-1 border-gray-200  mt-3' />
  <Link to='/collection'> <li onClick={() => {setIsOpen("collection") ; setMenu(false); Ser(false)} }
   className={`mr-5 ${isOpen === "collection" ? " mb-5 cursor-pointer  bg-black text-amber-50 h-[30px] " : ""} `}> collection  </li></Link>   
<hr className='border-1 border-gray-200  mt-3' />
   <Link to='/about'> <li onClick={() => {setIsOpen("about") , setMenu(false)}} className={`mr-5 ${isOpen === "about" ? " mb-5 cursor-pointer  bg-black text-amber-50 h-[30px] " : ""}`}>About</li></Link>
<hr className='border-1 border-gray-200  mt-3' />
 <Link to='/contact'> <li onClick={() => {setIsOpen("contact") , setMenu(false)}} className={`mr-5 ${isOpen === "contact" ? " mb-5 cursor-pointer bg-black text-amber-50 h-[30px] " : ""} `}>contact</li></Link>
 </ul> 
  </div>
}



   
       
       

       <div className="right flex ml-10 sm:mr-0 mr-10 ">
   <Link to='/collection'>    <img className='mr-7 h-5 cursor-pointer' onClick={() => setSer(!Ser)} src={assets.search_icon} alt="search" /></Link>
      <Link to='/login'>  <img className='mr-7 h-5 cursor-pointer' src={assets.profile_icon} alt="profile" /></Link>
      <div className="cart relative">
    <Link to='/Card'>     <img className='mr-7 h-5 cursor-pointer ' src={assets.cart_icon} alt="cart" /></Link>
<span> {Count}</span>
    </div>
    <img className='mr-7 h-5 cursor-pointer block lg:hidden' onClick={() => setMenu(!Menu)} src={assets.menu_icon} alt="" />

       </div>
    </div>
  )
}

export default Navpar