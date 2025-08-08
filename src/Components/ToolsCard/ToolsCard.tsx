import { useState } from 'react';

export default function ToolsCard(props) {
    const [Tools] = useState([
        { name: "Git" },
        { name: "npm" },
    ]);
    const [hoverTools, setHoverTools] = useState("");

    return (
        <div className={`w-full p-4 grid gap-4 grid-cols-4 transition-all duration-300 ease-in-out ${props.description === "Skills" ?'absolute top-0 left-0 translate-x-500' :''}`}>
            {Tools.map((tool, index) => (
                <div
                    key={index}
                    onMouseEnter={() => setHoverTools(tool.name)}
                    onMouseLeave={() => setHoverTools("")}
                    className="bg-white/10 flex flex-col items-center hover:scale-105 transition-all backdrop-blur-md rounded-lg p-4 mb-4 border border-white/20 shadow-lg"
                >
                    <img src={`/logo/${tool.name}.png`} className="size-20" alt={tool.name} />
                    <p
                        className={`text-lg font-semibold text-blue-300 transition-all duration-300
                        ${hoverTools === tool.name
                            ? 'opacity-100 translate-y-0 scale-110'
                            : 'opacity-0 -translate-y-4 scale-90'}
                        `}
                    >
                        {tool.name}
                    </p>
                </div>
            ))}
        </div>
    );
}