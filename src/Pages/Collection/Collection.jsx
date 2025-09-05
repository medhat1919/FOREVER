import './Collection.css'
import { useContext } from 'react'
import { shopContext } from '../../Context/Context'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
 const Collection = () => {

    const { products ,Ser , setSer} = useContext(shopContext);

const [category, setCategory] = useState([]);
const [subCategory, setSubcategory] = useState([]);
const[filteredProducts, setFilteredProducts] = useState([]);
 
const handleFilter = (e) => {
    const value = e.target.value;
    if(category.includes(value)){
        setCategory((prev)=>prev.filter((c) => c !== value));
    }else{
        setCategory(prev=>[...prev, value]);
    }
}

const handleSubFilter = (e) => {
    const value=e.target.value;
    if (subCategory.includes(value)) {
        setSubcategory((prev)=>prev.filter((c) => c !== value));
    }else{
        setSubcategory(prev=>[...prev, value]);
    }
}

const filterproducts = () => {
    let filtered = products.slice();

    if (category.length > 0) {
        filtered = filtered.filter(product => category.includes(product.category));
    }

    if (subCategory.length > 0) {
        filtered = filtered.filter(product => subCategory.includes(product.subCategory));
    }

    setFilteredProducts(filtered);
};


useEffect(()=>{
    filterproducts();
    if (category.length === 0 && subCategory.length === 0) {
        setFilteredProducts(products);
    }
},[category, subCategory, products])


const [SearchTerm, setSearchTerm] = useState('');
useEffect(() => {

    const newProducts = products.filter((p) => p.name.toLowerCase().includes(SearchTerm.toLowerCase()))
    
    setFilteredProducts(newProducts)  
}, [SearchTerm, products])




  return (
    <div className='collection  '>
{Ser===true?              
<div className="search bg-gray-100 mx-[128px]  mt-5 h-[80px]  border-t-2 border-b-2 border-gray-200 flex items-center justify-center">
    <div className="input mx-auto">
        <form action="" className='flex justify-between items-center'>     
            <input onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder='Search for products...' className='w-[500px] h-[50px] rounded-2xl border-2 border-gray-200 pl-5 mr-5' /> 
            <img src={assets.search_icon}  alt=""  className='h-[20px] w-[20px] cursor-pointer'/>
        </form>
        <img src={assets.cross_icon} onClick={() => setSer(false)} className='h-[20px] w-[20px] cursor-pointer ' alt="" />

    </div>





</div>
: <></>}



<div className="div sm:flex">

<div className="left pl-[60px] sm:pl-[135px] sm:pr-[50px] mt-5">
    <h1 className='text-3xl hidden md:block font-bold'>Filters</h1>
    <div className="forms mt-10 hidden md:flex sm:flex-col  ">
    <form action="" className='mb-5 flex flex-col border-2 border-gray-200 p-5'>
<p className='mb-3 mr-2 text-xl'>Categories</p>
<label  htmlFor="" className='text-gray-400'>
        <input onChange={handleFilter} type="checkbox" value={"Men"} />
        <span className='ml-2'>Men</span>
        </label>
        <label htmlFor="" className='text-gray-400'>
        <input onChange={handleFilter} type="checkbox" value={"Women"} /> 
        <span className='ml-2'>Women</span>
    
        </label >

        <label htmlFor="" className='text-gray-400'>
        <input onChange={handleFilter}  type="checkbox" value={"Kids"} />
        <span className='ml-2'>Kids</span>
        </label>
    </form>




    <form action="" className='mb-5 flex flex-col border-2 border-gray-200 p-5 w-[300px] '>
<p className='mb-3 mr-2 text-xl'>Type</p>
<label  htmlFor="" className='text-gray-400'>
        <input onChange={ handleSubFilter} type="checkbox" value={"Topwear"} />
        <span className='ml-2'>Topwear</span>
        </label>
        <label htmlFor=""  className='text-gray-400'>
        <input onChange={ handleSubFilter} type="checkbox" value={"Bottomwear"} /> 
        <span className='ml-1'>Bottomwear</span>
    
        </label >

        <label htmlFor="" className='text-gray-400'>
        <input onChange={ handleSubFilter} type="checkbox" value={"Winterwear"} />
        <span className='ml-2'>Winterwear</span>
        </label>
    </form>
    </div>
</div>

<div className="right w-[910px] mt-[15px] mb-[15px] ">
<div className="title flex  justify-between ">
<h1 className='text-4xl font-medium text-black mb-5 relative ml-[40px] sm:-ml-0'><span className='text-gray-400 text-4xl'>All</span> Collections</h1>
<select name="" id="" className='border-2 border-gray-200 text-center mr-[400px] sm:mr-[200px] lg:mr-0 '>
     <option value="Relevant">sort by: Relevant</option>
    <option value=" Hight to Low">sort by: High to Low</option>
    <option value=" Low to High" >sort by: Low to High</option>
</select>
</div>

<div className="collections ml-[70px] sm:mx-0  w-[300px] sm:w-[100%] sm:mt-[15px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5  mt-[20px]">

{filteredProducts.map((asset, _id) =>
                <div key={_id} className="card ">
                <Link to={`/Products/${asset._id}`}>      <img  onClick={() => { window.scrollTo(0, 0) }} className='w-full rounded-2xl hover:scale-90 transition ease-in-out duration-300 cursor-pointer' src={asset.image[0]} alt="image" />  </Link>
                    <p className='text-gray-600' >{asset.name}</p>
                    <p className='text-black font-bold '  >{asset.price}</p>
                </div>
            )}

</div>



</div>




</div>



    </div>
  )
}

export default Collection