import React from 'react'

const Nav = () => {
  return (
    <nav className='w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5'>
    
      <a className='py-2 px-5 border border-blue-200 text-blue-300 rounded ' href='/create'>Add New Product</a>
      <hr className='w-[80%] my-3'/>
      <h1 className='text-2xl mb-3 w-[80%]'>Categary</h1>
      <ul className='w-[80%]'>

      <li className='flex items-center mb-3'><span className='rounded-full mr-2 w-[15px] h-[15px] bg-blue-100'></span>{" "}Cart 1</li>
      <li className='flex items-center mb-3'><span className='rounded-full mr-2 w-[15px] h-[15px] bg-green-300'></span>{" "}Cart 2</li>
      <li className='flex items-center mb-3'><span className='rounded-full mr-2 w-[15px] h-[15px] bg-yellow-100'></span>{" "}Cart 3</li>
      <li className='flex items-center mb-3'><span className='rounded-full mr-2 w-[15px] h-[15px] bg-red-100'></span>{" "}Cart 4</li>
      
      </ul>
       
    </nav> 
  )
}

export default Nav
