import React, {createContext, useEffect, useState } from 'react'
import axios from './axios';


export const productcontext=createContext();


const Context = (props) => {

    const [products,setproduct]=useState(null);

    const getProduct=async ()=>{
       
            const {data}=await axios("/products")
            setproduct(data)
           console.log(data);
            
        }


        useEffect(()=>{
            getProduct();
        },[])


        
      return <productcontext.Provider value={[products,setproduct]}>
      {props.children};
      </productcontext.Provider>

}

export default Context
