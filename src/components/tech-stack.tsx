"use client"

import StackIcon from "tech-stack-icons"

const technologies = [
  { name: "React", icon: "reactjs" },
  { name: "HTML", icon: "html5" },
  { name: "CSS", icon: "css3" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Git", icon: "git" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Next.js", icon: "nextjs" },
]

export default function TechStack() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>
          My Tech Stack
        </h1>
        <p className='mt-3 font-light text-muted-foreground'>
          Technologies I work with regularly.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center space-x-2 text-sm md:text-base"
            >
              <StackIcon name={tech.icon} className="grayscale w-6 h-6" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
