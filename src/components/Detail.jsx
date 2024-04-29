import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from '../utils/axios'
import Loading from '../utils/Loading'
const Detail = () => {
  const [Product,setproduct]=useState(" ");

   let {id}=useParams();
  
   
    let singleData= async ()=>{ 
      try {
      const {data}=await axios.get( `/products/${id}`)
      setproduct(data)

      } catch (error) {
        console.log(error)
      }

    } 
  

  useEffect(()=>{
       singleData();
       
  },[])
  return Product?(
    <>
    <div className='w-[70%] flex justify-between items-center  h-full  m-auto p-[10%] '>


    <img 
    className='object-contain h-[100%] w-[40%]' 
    src={`${Product.image}`} alt="" /> 
    
    
    <div className='content w-[50%]'>
    <h1 className='text-3xl'>
          {Product.title}
    </h1>

    <h3 className='text-zinc-400 my-5'>{Product.category}</h3>

    <h2 className='text-red-300 mb-3'>$ {Product.price}</h2>

    <p className='mb-[5%]'>
    {Product.description}

          
    </p>  
    <Link  className='mr-5 py-2 px-5 border border-blue-200 text-blue-300 rounded '>
    Edit
    </Link>   
    <Link  className='py-2 px-5 border border-blue-200 text-red-300 rounded '>
    Delete
    </Link>
    </div>
    </div>
    </>
  ):(
    <Loading></Loading>
    
  );
}

export default Detail
