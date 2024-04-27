import React from 'react'

import ProjectMessi from './../assets/ProjectMessi.webp'
import Project1 from './../assets/Project1.jpg'
import Project2 from './../assets/Project2.jpg'
import Projectgame from './../assets/Projectgame.jpg'
import ProjectItem from './ProjectItem'
const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        lionl messi la 1 cau thu noi tieng nhat the gio , toi la 1 fan ham mo cua lionl messi tu luc 8 tuoi , den bay gio cug da dc 11 nam .....
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={ProjectMessi} title="Lionel messi"/>
        <ProjectItem img={Project1} title="Game Onl"/>
        <ProjectItem img={Projectgame} title="Game hay"/>
        <ProjectItem img={Project2} title="King of the game"/>
      </div>
    </div>
  )
}

export default Projects