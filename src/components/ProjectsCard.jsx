import React from 'react';
import "./ProjectsCard.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ProjectsCard = () => {

  useGSAP(() => {
    gsap.set(".projects-card", {width: "0%"});
    gsap.to(".projects-card", {
      width: "100%",
      duration: 1.5, 
      ease: "power3.inOut",
    });
  });


  return (
    <div className='projects-card'>
        <h1 className='txt-0'>PROJECTS</h1>
    </div>
  )
}

export default ProjectsCard