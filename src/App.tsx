import { useState } from 'react'
import logo from './assets/Lanyard.png'
import github from './assets/Github.png'
import './App.css'
import Home from './pages/home'
import About from './pages/about'

function App() {
  const [page, setPage]= useState("Home")
  const nav = [
    {name: "Home", onClick: ()=>{setPage("Home")}},
    {name: "About", onClick: ()=>{setPage("About")}},
  ]
  return (
    <div className={`w-full min-h-screen flex items-center flex-col bg-[#22223b]`}>
      <div className={`flex w-full h-20 gap-12 z-100 fixed top-0 items-center border-b border-b-blue-300 ${page === 'Home' ? 'bg-[#22224b]' : 'bg-[#22225b]/50 backdrop-blur-md'} justify-between px-8 transition-all duration-300 ease-in-out`}>
        <img src={logo} alt="logo" className='size-33' />
        <div className="flex gap-8 justify-center w-full">
          {nav.map((item, i) => (
            <p key={i} onClick={item.onClick} className={`text-md cursor-pointer font-semibold ${page === item.name ?'font-bold scale-105 text-blue-300 underline' :'text-white hover:font-bold hover:scale-105 hover:text-blue-300 hover:underline'} transition-all`}>{item.name}</p>
          ))}
        </div>
        <img src={github} alt="logo" className='size-12 bg-white rounded-full p-0' />
      </div>
      <div className={`relative overflow-hidden`}>
        <Home page={page}/>
        <About page={page}/>
      </div>
    </div>
  )
}

export default App
