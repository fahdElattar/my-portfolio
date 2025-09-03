import Button from '@/components/Buttons/Button'
import { ScrambleButton } from '@/components/Buttons/ScrambleButton'
import { ProjectItem } from '@/components/ProjectItem/ProjectItem'
import { SectionHead } from '@/components/SectionHead/SectionHead'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Projects = () => {
    return (
        <section id="Projects">
            <SectionHead
                title={"Creative Design Showcase"}
                iconName={"rocket"}
                description={"Explore a collection of my most innovative and visually stunning design works."}
            />
            <div className="projects-list grid grid-cols-1 gap-3">
                <ProjectItem 
                    projectImg="project-1.png"
                    projectName="Devcraft"
                    projectLink="devcraft.com"
                    projectType="porfolio"
                    projectPages="4 Pages"
                    projectTheme="Dark Theme"
                    projectDesc="Showcasing expertise, passion, and innovation in the realm of development."
                />
                <ProjectItem 
                    projectImg="project-2.jpg"
                    projectName="Zenith Gym"
                    projectLink="zenith.com"
                    projectType="Fitness"
                    projectPages="5 Pages"
                    projectTheme="Light Theme"
                    projectDesc="Empowering fitness enthusiasts with an immersive online experience."
                />
                <Link href="services" className='w-full'>
                    <ScrambleButton text={"View all projects"} className="w-full">
                        <Image src="/icons/arrow-up.svg" alt="icon" width={20} height={20} className='opacity-80 [transform:rotate(45deg)]'/>
                    </ScrambleButton>
                </Link>
            </div>
        </section>
    )
}
