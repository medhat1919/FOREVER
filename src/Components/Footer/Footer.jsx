import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer">
    <div className=" mt-15 mb-30 flex items-center justify-center flex-col">
    <div className="text mb-20">
<h1 className='text-2xl md:text-4xl font-bold text-black mb-5 relative'>Subscribe now and get 30% off</h1>
<p className='text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></div>

<form className="input ml-10 md:ml-0 ">
<input type="text" placeholder='enter your email address' required />
<button >Subscribe</button>
</form>

</div>



<div className="end text-center mt-20 mb:ml-20 md:ml-30 mb-30 block md:grid md:grid-cols-3 md:gap-7 ">
<div className="box col-span-1.5">
    <img className='w-30 mb-7 md:m-0 mx-auto' src={assets.logo} alt="logo" />
    <p className='text-gray-400 mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ullam aut placeat fugit excepturi, rem dolor non odit expedita quo. Corrupti molestias voluptas laborum minima vel omnis est eligendi. Ad?.</p>
</div>

<div className="box mt-20 md:ml-60 md:mt-0">
    <h1 className='text-black font-bold mb-7'>Company</h1>
    <p className='text-gray-400'>About</p>
    <p className='text-gray-400'>Blog</p>
    <p className='text-gray-400'>Contact</p>
    <p className='text-gray-400'>Careers</p>

</div>



<div className="box mt-20 md:ml-20 md:mt-0">
    <h1 className='text-black font-bold mb-7'>Support</h1>
    <p className='text-gray-400'>About</p>
    <p className='text-gray-400'>Blog</p>
    <p className='text-gray-400'>Contact</p>
    <p className='text-gray-400'>Careers</p>
    </div>

</div>






    </div>
  )
}

export default Footer