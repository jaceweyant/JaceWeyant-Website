import React from 'react';
import ScrollingPanels from '../components/ScrollingPanels.jsx';
import ProjectsCard from "../components/ProjectsCard.jsx";

const Projects = () => {
  return (
    <main className='projects-ctn'>
        <ProjectsCard />
        <ScrollingPanels />
    </main>
  )
}

export default Projects;