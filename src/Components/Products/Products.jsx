 import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { shopContext } from '../../Context/Context';
import { assets } from '../../assets/assets';
import './Products.css'
import { Link } from 'react-router-dom';


const Products = () => {
     const { products , addtocard ,Def,Count,setCount} = useContext(shopContext);
    
    const { productsid } = useParams();
  
    const product = products.find(p => p._id ===   productsid);

    if (!product) {
        return <div> Product not found</div>;
    }

  
    return (
        <div className='sm:pl-[135px] pl-[33px]'>
            <div className="cart cart flex flex-col sm:flex-row">
            <div className="left sm:flex sm:flex-row flex flex-col-reverse ">
             
                    <img className='w-[150px] sm:w-[100%] sm:h-[150px] mr-5 rounded-2xl' src={product.image[0]} alt="image" />

                                    <img className=' w-[480px] rounded-2xl hover:scale-110 transition ease-in-out duration-300 cursor-pointer' src={product.image[0]} alt="image" />

    
            </div>
            <div className="right sm:ml-10 flex flex-col">
                <h1 className='text-4xl font-medium text-black mb-5 relative'> <span className='text-black-400 text-4xl'>{product.name}</span></h1>
         <div className="images flex w-[15px] h-[15px] gap-1 items-center">
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_dull_icon} alt="" />
                                 <span>(122)</span>

         </div>

                <p className='text-black text-xl font-bold  mt-7 mb-7 '>${product.price}</p>
                <p className='text-gray-600 w-[450px]' >{product.description}</p>
                        

                        <div className="size mb-7">
                            <p className='text-black  font-bold mt-7 mb-7 '>Select Size</p>
                            <ul className='flex gap-2'>
                                <li className='py-2 px-4 bg-gray-200  cursor-pointer active:bg-black active:text-white focus: '>S</li>
                                <li className='py-2 px-4 bg-gray-200 cursor-pointer'>M</li>
                                <li className='py-2 px-4 bg-gray-200 cursor-pointer'>L</li>
                                <li className='py-2 px-4 bg-gray-200 cursor-pointer'>XL</li>
                                <li className='py-2 px-4 bg-gray-200 cursor-pointer'>XXL</li>
                            </ul>
                        </div>
                        <div className="button">
                            <button onClick={() => {addtocard(product._id) ; Def()} }  className='bg-black text-white py-3 px-5 rounded-xl shadow-2xl cursor-pointer hover:text-white hover:bg-black transition ease-in-out duration-300'>Buy Now</button>
                        </div>
                        <hr className='my-7 text-gray-200' />
                        <div className="desc italic text-gray-400">
                            <p>100% Original product.

</p>
                            <p>Pay on delivery might be available</p>
                            <p>Easy 30 days returns and exchanges</p>
                        </div>
</div>
</div>


<div className="de mt-20">
<div className="p flex ">
    <p className='font-bold border-2 border-gray-400 py-4 px-7'>Description</p>
    <p className='font-bold ml-[-1px] border-2 border-gray-400 py-4 px-7 '> Reviews(122)</p>
    
</div>
<div className="d border-2 border-gray-400 py-4 px-7 w-[90%] mt-[-1px] ">
    <p className='text-gray-400 mb-3 text-300'>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
    <p className='text-gray-400'> E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
 </div>



</div>



<div className="related ">
<h1 className='text-4xl text-center mr-[100px] mt-30 font-medium text-black mb-5 relative'> <span className='text-gray-400 text-4xl'>Related</span> Products</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-[90%]">

{ products.filter(p => p.category === product.category && p._id !== product._id).slice(0, 4).map((asset,_id) =>
                <div key={_id} className="card">
          <Link to={`/Products/${asset._id}`}>    <img onClick={window.scrollTo(0, 0)} className=' w rounded-2xl hover:scale-105 transition ease-in-out duration-300 cursor-pointer' src={asset.image[0]} alt="image" /></Link>   
                    <p className='text-gray-600'>{asset.name}</p>
                    <p className='text-black font-bold '>${asset.price}</p>
                </div>
            )}

                </div>

</div>













        </div>
    );
}

export default Products;

