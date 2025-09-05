import React from 'react'
 import './LatestCollections.css'
import { useContext } from 'react'
import { shopContext } from '../../Context/Context'
import { Link } from 'react-router-dom'


const LatestCollections = () => {
    const { products } = useContext(shopContext);
  return (
    <div className='latest-collections'>
      <div className="text">
        <h1 className='text-4xl font-medium text-black mb-5 relative'> <span className='text-gray-400 text-4xl'>Latest</span> Collections</h1>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati cumque ea?</p>
      </div>
      <div className="collections grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.filter(product => product.bestseller === false).slice(0, 8).map((asset,_id) =>
          <div key={_id} className="card">
        <Link to={`/Products/${asset._id}`}>    <img className='w-full rounded-2xl hover:scale-90 transition ease-in-out duration-300 cursor-pointer' src={asset.image[0]} alt="image" /></Link>
            <p className='text-gray-600'> {asset.name}</p>
            <p className='text-black font-bold '>${asset.price}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default LatestCollections