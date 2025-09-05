import React from 'react'
import './Card.css'
import { useContext } from 'react'
import { shopContext } from '../../Context/Context'
  

const Card = () => {
  const { products, cardItem, addtocard, removefromcard, setCardItem ,Der,Delete,Del} = useContext(shopContext);

  


   return (
    <div className='card '>
      <h1 className='pl-[130px] text-2xl font-medium text-black mb-5 relative'> <span className='text-gray-400 text-2xl'>YOUR</span> CARD</h1>
<hr className='border-1 border-gray-200 w-[1260px] ml-[130px] mt-9' />
<div className="product mt-5  ">
  
  {products.map((e) => {
      
     if(cardItem[e._id] > 0){
        let product = e;
        let item = cardItem[e._id];
        return (
            <div className=" grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4  xl:grid-cols-5 gap-5 items-center"
       key={product._id} >
                <img className='pl-[130px] h-[100px] rounded-1xl cursor-pointer mb-5' src={product.image[0]} alt="image" />
                <div className="details flex flex-col ">
                <p className='text-black font-bold'>{product.name}</p>
                <p className='text-gray-900 '>${product.price}</p></div>
                <div className="quantity flex items-center ml-[100px]">
                    <button className='cursor-pointer  py-2 px-2 rounded-2xl bg-gray-300' onClick={() => {removefromcard(product._id) , Der()}}>-</button>
                    <button className='px-3 font-bold'>{item}</button>
                    <button className='cursor-pointer  py-2 px-2 rounded-2xl bg-gray-300' onClick={() => addtocard(product._id)}>+</button>
                </div>
                <div className="total  ">
                    <p className='text-black font-bold'>${product.price * item}</p>
                </div>
                <div className="delete  ">
                    <button className='cursor-pointer  py-2 px-2 rounded-2xl bg-gray-300' onClick={() => {Delete(product._id), Del() }}>Delete</button>
                </div>

 <div className="total pl-[130px] flex flex-col w-[600px]"  >
<h1 className='text-4xl mr-[100px] mt-30 font-medium text-black mb-5  relative flex'> <span className='text-gray-400 text-4xl'>  CARD</span> TOTALS</h1>
<div className="sub flex justify-between mb-3">
    <p>subtotal</p>
<p>${product.price * item}</p>
</div>
<hr className='border-1 border-gray-200 mb-2' />
<div className="sub flex justify-between mb-3">
    <p>shipping</p>
<span>$10.00</span>
</div>
<hr className='border-1 border-gray-200 mb-2' />
<div className="sub flex justify-between mb-5">
    <p>total</p>
<span>${product.price*item + 10.00}</span>
                </div>
                <div className="button">
                    <button className='cursor-pointer text-amber-50 py-3 px-5 rounded-2xl bg-black'>CHECKOUT</button>
                </div>

</div>








            </div>
        );
     }
  })}
    




</div>


    </div>
  )
}

export default Card