import React, {createContext, useEffect, useState } from 'react'
import axios from './axios';


export const productcontext=createContext();


const Context = (props) => {

    const [AllProduct,setAllProduct]=useState(null);

    const getProduct=async ()=>{
       
            const {data}=await axios("/products")
            setAllProduct(data)
         
            
        }


        useEffect(()=>{
            getProduct();
        },[])


        
      return <productcontext.Provider value={[AllProduct,setAllProduct]}>
      {props.children};
      </productcontext.Provider>

}

export default Context
