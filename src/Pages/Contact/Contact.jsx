import React from 'react'
import { assets } from '../../assets/assets'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact w-[83%] mx-auto  '>
<h1 className='text-4xl font-medium text-black   relative text-center mb-10'><span className='text-gray-400'>Contact</span> Us</h1>
<div className="cont md:w-[50%]  md:mx-auto  md:flex md:flex-row flex-col  ">
    <div className="left md:mr-10">
        <img className='w-2xl ' src={assets.contact_img} alt="" />
    </div>
    <div className="right md:mt-10 ">
        <h2 className='text-2xl font-bold mb-3'>Our Store</h2>
        <div className="f text-gray-400 mb-3">
                    <p>54709 Willms Station</p>
        <p>Suite 350, Washington, USA</p>
        </div>
        
   <div className="s text-gray-400 mb-5">
                    <p>Tel: (415) 555-0132</p>
        <p>Email: admin@forever.com</p>
        </div>

<div className="button">
    <h2 className='text-xl font-bold mb-3'>Careers at Forever</h2>
    <p className='text-gray-400 mb-3'>Learn more about our teams and job openings. </p>
    <button className='border-2 border-gray-400 bg-white text-black py-3 
    px-5 rounded-xl shadow-2xl cursor-pointer hover:text-white hover:bg-black transition ease-in-out duration-8 00'>Apply Now</button>

</div>
        </div>
</div>
    </div>
  )
}

export default Contact