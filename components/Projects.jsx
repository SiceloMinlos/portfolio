import React from 'react'
import sassaImg from '../public/assets/projects/sassa.jpg'
import motivationImg from '../public/assets/projects/motivation.jpg'
import pacmanImg from '../public/assets/projects/pacman.png'
import ProjectsItems from './ProjectsItems'

const Projects = () => {
    return (
        <div id="projects" className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                    Projects
                </p>
                <h2>
                    Work I have done
                </h2>
                <div className='grid md:grid-cols-2 gap-2'>
                    <ProjectsItems title="PACMAN" backgroundImg={pacmanImg} projectUrl="/pacman" />
                    <ProjectsItems title="SASSA SRD Grant Manager" backgroundImg={sassaImg} projectUrl="/sassa" />
                    <ProjectsItems title="Daily Motivation Web Scraper" backgroundImg={motivationImg} projectUrl="/motivation" />
                </div>
            </div>
        </div>
    )
}

export default Projects