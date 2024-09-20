"use client"

import StackIcon from "tech-stack-icons"

const technologies = [
  { name: "React", icon: "reactjs" },
  { name: "HTML", icon: "html5" },
  { name: "CSS", icon: "css3" },
  { name: "JavaScript", icon: "js" },
  { name: "Photoshop", icon: "ps" },
  { name: "Figma", icon: "figma" },
  { name: "Bootstap", icon: "bootstrap5" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "WordPress", icon: "wordpress" },
  { name: "Sass", icon: "sass" },
]

export default function TechStack() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-start'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>
          My Tech Stack
        </h1>
        <div className='flex flex-wrap gap-4 mt-4'>
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center text-sm md:text-base"
            >
              <StackIcon
                name={tech.icon}
                className="w-6 h-6 grayscale mr-1"
              />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
