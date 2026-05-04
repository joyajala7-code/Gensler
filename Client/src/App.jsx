import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './index.css'
import Login from './pages/Login'
import Logout from './pages/Logout'




// Protected route component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />

          {/* <div className='grid w-full h-screen place-items-center bg-cyan-400'> */}
             <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          {/* </div> */}
     
         
         <Route path="/logout" element={<Logout />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
