import React, { useContext } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import {productcontext} from '../utils/Context'
import Loading from '../utils/Loading'

const Home = () => {

const [products]=useContext(productcontext);


  return products? (
    <>
    <Nav></Nav>
    <div className='flex  flex-wrap h-full w-[85%] p-10 pt-[5%] overflow-x-hidden overflow-y-auto'>
     
    {products.map((p,i)=>(<Link key={i} to={`/details/${p.id}`} className='mb-3 mr-4 flex flex-col justify-center items-center card w-[18%] h-[30vh] p-3 border shadow rounded'>


    <div className=' hover:scale-110 mb-1 w-full bg-center h-[100%] bg-contain bg-no-repeat ' style={{backgroundImage:`URL(${p.image})`}}></div>
   
   <h1 className='hover:text-blue-300 text-center text-sm'>{p.title}</h1>
   </Link>))}
    
    
    
    

    
    </div>
    </>
  ):(
    <Loading></Loading>
    
  );
}

export default Home
