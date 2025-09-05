import { createContext } from "react"
import { useState } from "react"
import { products } from "../assets/assets.js"

export const shopContext=createContext(null)


const ShopProvider = (props) => {
    const cardDefault= () => {
    let card={};
    for (let i = 0; i < products.length; i++) {
        card[products[i]._id]=0;
    }
    return card

}

const [Count, setCount] = useState(0);
const Def=() =>{
  
  setCount(Count+1);}

  const Der=() => {
    setCount(Count-1);
  }
  const Del=() => {
    setCount(0);
  }

  const [Ser, setSer] = useState(false);







    const [cardItem, setCardItem] =  useState(cardDefault())

    const addtocard=(_id) => {
        setCardItem( (prev)=>({...prev,[_id]:prev[_id]+1}))
    }
    
    const removefromcard=(_id) => {
        setCardItem((prev)=>({...prev,[_id]:prev[_id]-1}))
    }

    const Delete=(_id) => {
      setCardItem((prev)=>({...prev,[_id]:0}))



  }
    const contextvalue={products,cardItem,addtocard,removefromcard,setCardItem,Def,Count,setCount,Der,Delete,Del,Ser,setSer}

    return (
        <shopContext.Provider value={contextvalue}>
            {props.children}
        </shopContext.Provider>
        
    )
}

export default ShopProvider