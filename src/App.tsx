import { useState } from 'react'
import TextType from './Components/TextType/TextType'
import ProfileCard from './Components/ProfileCard/ProfileCard'
import avatar from './assets/Avatar.png'
import logo from './assets/Lanyard.png'
import Lanyard from './Components/Lanyard/Lanyard'

import './App.css'

function App() {
  const [page, setPage]= useState("Home")
  const nav = [
    {name: "Home", onClick: ()=>setPage("Home")},
    {name: "About", onClick: ()=>setPage("About")},
  ]
  return (
    <div className="w-full overflow-y-hidden h-screen flex items-center flex-col bg-[#22223b]">
      <div className="flex w-full h-20 gap-12 items-center border-b border-b-blue-700 bg-[#22224b]">
        <img src={logo} alt="logo" className='size-33' />
        <div className="flex gap-8 justify-end w-full">
          {/* {nav.map(item, i=>(
            <p key={i} className={`text-white text-md cursor-pointer font-semibold`}>{item.name}</p>
          ))} */}
        </div>
        logo github
      </div>
      <div className="flex gap-4 justify-between">
        <div className="flex w-1/2 relative items-center">
          <TextType 
            className="w-100 text-center"
            text={["Welcome to my portofolio", "Explore my projects", "Contact me for collaborations"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
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
          <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} fov={18} transparent={true} />
        </div>
      </div>
    </div>
  )
}

export default App
