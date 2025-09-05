 import React from 'react'
 import Home from './Pages/Home/Home'
import Navpar from './Components/Navpar/Navpar'
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Login from './Pages/Login/Login'
import Collection from './Pages/Collection/Collection'
import Products from './Components/Products/Products'
import Card from './Pages/Card/Card'
 
 const App = () => {
   return (
    <>
    <Navpar/>
     <div>
      <Routes>
       <Route path='/' element={<Home/>}/> 
       <Route path='/about' element={<About/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/collection' element={<Collection/>}/>
       <Route path='/card' element={<Card/>}/>
       <Route path='/Products/:productsid' element={< Products/>}/>


       </Routes>
       <Footer/>
     </div>
     </>
   )
 }
 
 export default App