import React from 'react'
import { assets } from '../../assets/assets'
import './About.css'
const About = () => {
  return (
    <div className='about   w-[83%] mx-auto '>
    <h1 className='text-4xl font-medium text-black   relative text-center mb-10'> <span className='text-gray-400'>About</span> us</h1>
    <div className="cont  flex flex-col md:flex-row  md:justify-center md:items-center gap-14">
<div className="left">
    <img className='' src={assets.about_img} alt="" />
</div>
<div className="right">
    <p className='mb-3' >Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
<p className='mb-3'>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>

<h2 className='text-1xl font-bold mb-3'>our mission</h2>
<p >Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>

</div>
    </div>
    <div className="foot">
    <h2 className='text-2xl font-medium text-black   relative  mt-20 mb-10'> <span className='text-gray-400'>Why</span> choose us </h2>

<div className="boxes md:grid md:grid-cols-3 md:gap-7 md:border-1 md:border-gray-400 md:p-10">
    <div className="text md:border-r-1 border-r-gray-400">
        <h3 className='mb-3 md:text-left md:ml-5 font-bold'>Quality Assurance:</h3>
        <p className='md:text-left md:ml-5 text-gray-400'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
    </div>

    <div className="text  md:border-r-1 border-r-gray-400">
<h3 className='mb-3 md:text-left md:ml-5 font-bold'>Convenience:
</h3>
        <p className='md:text-left md:mr-5 md:ml-5 text-gray-400'>We meticulously select and vet each product to ensure it meets our stringent quality standards
With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>

    </div>
    <div className="text">
<h3 className='mb-3 md:text-left md:ml-5 font-bold'>Exceptional Customer Service:
</h3>
<p className='md:text-left md:ml-5 text-gray-400'> Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.

</p>

    </div>
</div>

    </div>
    
    
    
    
    </div>
  )
}

export default About