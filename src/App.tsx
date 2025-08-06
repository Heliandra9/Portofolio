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
    <div className="w-full overflow-y-hidden h-screen flex items-center flex-col bg-[#22223b]">
      <div className="flex w-full h-20 gap-12 z-100 items-center border-b border-b-blue-300 bg-[#22224b]">
        <img src={logo} alt="logo" className='size-33' />
        <div className="flex gap-8 justify-center w-full">
          {nav.map((item, i) => (
            <p key={i} onClick={item.onClick} className={`text-md cursor-pointer font-semibold ${page === item.name ?'font-bold scale-105 text-blue-300 underline' :'text-white hover:font-bold hover:scale-105 hover:text-blue-300 hover:underline'} transition-all`}>{item.name}</p>
          ))}
        </div>
        <img src={github} alt="logo" className='size-12 bg-white rounded-full p-0' />
      </div>
      <Home page={page}/>
      <About page={page}/>
    </div>
  )
}

export default App
