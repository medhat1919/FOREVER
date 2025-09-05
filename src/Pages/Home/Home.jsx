import React from 'react'
 import Model from '../../Components/mode/Model'
 import LatestCollections from '../../Components/LatestCollections/LatestCollections'
import Bestsellers from '../../Components/Bestsellers/Bestsellers'
import Subscribe from '../../Components/Subscribe/Subscribe'
 
const Home = () => {
  return (
    <div className='home'>
      <Model/>
      <LatestCollections/>
      <Bestsellers/>
      <Subscribe/>
      </div>
  )
}

export default Home