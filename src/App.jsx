import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail'

const App = () => {
  return (
  <div className='h-screen w-screen flex'>  
  
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route  path='/details/:id' element={<Detail/>}></Route>

</Routes>


   
    
  </div>
   
  )
}

export default App
