import { useState } from 'react'
import TextType from './Components/TextType/TextType'
import ProfileCard from './Components/ProfileCard/ProfileCard'
import avatar from './assets/Avatar.png'
import logo from './assets/Lanyard.png'
import Lanyard from './Components/Lanyard/Lanyard'

import './App.css'

function App() {
  const [page, setPage]= useState("Home")
  const [lanyard, setLanyard] = useState(true)
  const funcLanyard = () => {
    setLanyard(!lanyard)
    console.log(lanyard)
  }
  const nav = [
    {name: "Home", onClick: ()=>{setPage("Home")}},
    {name: "About", onClick: ()=>{setPage("About")}},
  ]
  return (
    <div className="w-full overflow-y-hidden h-screen flex items-center flex-col bg-[#22223b]">
      <div className="flex w-full h-20 gap-12 items-center border-b border-b-blue-300 bg-[#22224b]">
        <img src={logo} alt="logo" className='size-33' />
        <div className="flex gap-8 justify-center w-full">
          {nav.map((item, i) => (
            <p key={i} onClick={item.onClick} className={`text-md cursor-pointer font-semibold ${page === item.name ?'font-bold scale-105 text-blue-300 underline' :'text-white hover:font-bold hover:scale-105 hover:text-blue-300 hover:underline'} transition-all`}>{item.name}</p>
          ))}
        </div>
        logo github
      </div>
      <div className="flex gap-4 justify-between relative">
        <button onClick={funcLanyard} className="bg-[#22224b] cursor-pointer rounded-full border-blue-300 border text-md absolute top-4 right-0 p-2">🪪</button>
        <div className="flex w-1/2 flex-col justify-center">
          <p className="text-md font-semibold text-blue-300">Hello World i'm</p>
          <h1 className="text-4xl font-bold text-white">Heliandra Audrey Atha Fahrezi</h1>
          <TextType 
            className="w-100 bg-gradient-to-r from-white to-blue-500 inline-block text-transparent bg-clip-text"
            text={["Web Developer", "Full-stack engineer", "Contact me for collaborations"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
          <p className="text-md font-semibold text-white">Welcome to my portofolio website🌐. 👋</p>
        </div>
        <div className="flex w-1/2">
          {/* <ProfileCard
            name="Heliandra A.A.F"
            title="Software Engineer"
            handle="lirezi_"
            status="Online"
            contactText="Contact Me"
            avatarUrl={avatar}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => {window.open('https:instagram.com/lirezi_', '_blank')}}
          /> */}
          {lanyard === true && <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} fov={18} transparent={true} />}
        </div>
      </div>
    </div>
  )
}

export default App
