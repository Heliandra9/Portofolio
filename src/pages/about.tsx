import ProfileCard from "../Components/ProfileCard/ProfileCard";
import Avatar from "../assets/Avatar.png";
import lanyard from "../assets/Lanyard.png"

export default function About(props) {
    return (
        <div className={`gap-4 justify-between w-full px-4 flex transition-all duration-300 ease-in-out ${props.page === 'Home' ? 'absolute z-0 -translate-y-500' : props.page === "About" && ''}`}>
            <div className="flex w-full h-full p-4 gap-12 mt-8 border border-blue-300 rounded-2xl justify-between">
                <div className="relative">
                    <ProfileCard
                        name="Heliandra A.A.F"
                        title="Software Engineer"
                        handle="lirezi_"
                        status="Online"
                        contactText="Contact Me"
                        avatarUrl={Avatar}
                        iconUrl={lanyard}
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={false}
                        onContactClick={() => { window.open('https:instagram.com/lirezi_', '_blank') }}
                    />
                </div>
                <div className="w-full">
                    <h1 className="font-semibold text-2xl text-blue-300">About Me</h1>
                    <p className="bg-gradient-to-r text-lg from-white to-blue-500 inline-block text-transparent bg-clip-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet pulvinar magna. Donec tristique justo lacus. Mauris finibus nisl sit amet sapien porta, ut sagittis purus mattis. Curabitur euismod risus eget nisl convallis commodo. Sed vulputate varius purus, sed dignissim nunc vulputate lobortis. Integer sodales consequat suscipit. Sed purus felis, consequat eget semper sed, malesuada ut ex. Suspendisse hendrerit leo nec tempus fringilla. Maecenas vitae eros nisi. Vivamus euismod, urna at commodo elementum, mi leo hendrerit dolor, nec accumsan erat nibh eget dolor. In vel accumsan quam, quis mollis ligula.
                        Quisque a turpis ex. Sed pharetra, est sed tristique finibus, neque ante eleifend ipsum, quis feugiat lorem est et sapien. Vivamus fringilla nunc quis euismod porta. Pellentesque egestas pharetra quam id gravida. Suspendisse in erat ornare, tincidunt libero a, auctor magna. Aenean id iaculis nisl. Maecenas efficitur tincidunt pretium. Phasellus tincidunt tincidunt vehicula.
                        Phasellus varius varius ligula, ac bibendum sem venenatis sed. Nullam sit amet ullamcorper augue. Sed non sollicitudin nisi, nec pretium nisl. Nullam neque ex, vestibulum volutpat enim ac, dignissim porta felis. Aliquam tempor elementum ex, eu ullamcorper quam porta volutpat. Nullam sollicitudin, felis in placerat ultrices, urna mauris dictum purus, eu hendrerit leo sem nec elit. Maecenas nibh mauris, pharetra in massa vel, consequat facilisis diam.</p>
                </div>
            </div>
        </div>
    )
}