import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
           <div className="bg-[#050414] h-screen relative overflow-hidden">
                 <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_2px),linear-gradient(to_bottom,#4f4f4f2e_2px,transparent_2px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
           <div className='relative pt-20'>
              <Navbar/> 
           </div>
       </div>
    </>
  )
}     

export default App
