import TextType from './Components/TextType/TextType'
import ProfileCard from './Components/ProfileCard/ProfileCard'
import avatar from './assets/Avatar.png'
import Folder from './Components/Folder/Folder'

import './App.css'

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-gradient-to-br from-[#23272f] to-[#5227FF]">
      <div className="flex gap-4 justify-between">
        <div className="flex flex-col w-1/2 gap-[50%] relative items-center">
          <TextType 
            className="w-100 text-center"
            text={["Welcome to my portofolio", "Explore my projects", "Contact me for collaborations"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
          <div className='relative'>
            <Folder size={1} color="#0a192f" className="custom-folder " />
          </div>
        </div>
        <div className="flex w-1/2">
          <ProfileCard
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
          />
        </div>
      </div>
    </div>
  )
}

export default App
