import { useState } from 'react';

export default function SkillsCard() {
    const [skills] = useState([
        { name: "JavaScript" },
        { name: "React" },
        { name: "CSS" },
        { name: "HTML" },
        { name: "PHP" },
        { name: "Tailwind" },
        { name: "Bootstrap" },
    ]);
    const [hoverSkills, setHoverSkills] = useState("");

    return (
        <div className="w-full p-4 grid gap-4 grid-cols-4">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    onMouseEnter={() => setHoverSkills(skill.name)}
                    onMouseLeave={() => setHoverSkills("")}
                    className="bg-white/10 flex flex-col items-center hover:scale-105 transition-all backdrop-blur-md rounded-lg p-4 mb-4 border border-white/20 shadow-lg"
                >
                    <img src={`/logo/${skill.name}.png`} className="size-20" alt={skill.name} />
                    <p
                        className={`text-lg font-semibold text-blue-300 transition-all duration-300
                        ${hoverSkills === skill.name
                            ? 'opacity-100 translate-y-0 scale-110'
                            : 'opacity-0 -translate-y-4 scale-90'}
                        `}
                    >
                        {skill.name}
                    </p>
                </div>
            ))}
        </div>
    );
}