import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './index.css'
import Header from './component/Header'
import Login from './pages/Login'


function App() {
  return (
    <BrowserRouter>
   <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          {/* <div className='grid w-full h-screen place-items-center bg-cyan-400'> */}
             <Route path="/login" element={<Login />} />
          {/* </div> */}
         
         

      </Routes>
    </BrowserRouter>
  )
}

export default App
