import TextType from './../Components/TextType/TextType'
import Lanyard from './../Components/Lanyard/Lanyard'


export default function Home(props){
    return(
        <div className={`gap-4 justify-between flex transition-all duration-300 ease-in-out ${props.page === 'Home' ?'' :'absolute z-0 -translate-y-500'}`}>
            <div className="flex w-1/2 flex-col justify-center">
                <p className="text-md font-semibold text-blue-300">Hello World i'm</p>
                <h1 className="text-4xl font-bold text-white">Heliandra Audrey Atha Fahrezi</h1>
                <TextType 
                    className="w-100 bg-gradient-to-r from-white to-blue-600 inline-block text-transparent bg-clip-text"
                    text={["Web Developer", "Full-stack engineer", "Contact me for collaborations"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                />
                <p className="text-md font-semibold text-white">Welcome to my portofolio website🌐. 👋</p>
            </div>
            <div className="flex w-1/2">
                <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} fov={18} transparent={true} />
            </div>
        </div>
    )
}