import React from 'react'
import './ScrollingPanels.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import constants from "../constants/constants.js";
import ProjectsCard from './ProjectsCard.jsx';

var {colors, projects} = constants;


const ScrollingPanels = () => {
  return (
    <div className='scrolling-panels'>
        <Panel index={1} name={"Treasury of Light"} text={projects.tol.title} photo={projects.tol.coverPhoto}/>
        <Panel index={2} name={"Now Lettest Thou Depart"} text={projects.nltd.title} photo={projects.nltd.coverPhoto}/>
        <Panel index={3} name={"House of Blessings"} text={projects.hob.title} photo={projects.hob.coverPhoto}/>
        <Panel index={4} name={"The Nephilim"} text={projects.neph.title} photo={projects.neph.coverPhoto}/>
    </div>
  )
}

const Panel = ({index, text, photo}) => {

    const panelAnimation = (ctn, panel, text) => {
        gsap.set(panel, {
            scale: 1.0,
            transform:"translateX(0px) translateZ(0px) rotateY(0deg)",
            zIndex: 2*(-index + 4),
        });
        gsap.set(text, {left: "50vw"});

        // next panel move up
        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ctn,
                start: "top 75%",
                end: "top 50%",
                scrub: 1,
                toggleActions: "resume pause reverse pause",
            }
        });
        tl1.fromTo(panel, {scale: 0.6},{scale: 1.0});

        // current panel rotate out
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ctn,
                start: "bottom bottom",
                end: "bottom 25%",
                scrub: 1,
                toggleActions: "resume pause reverse pause",
            },
        });
        tl2.to(panel, {transform: "translateX(100%) translateZ(-200px) rotateY(60deg)",});
    }

    const textInAnimation = (ctn, text) => {
        gsap.set(text, {
            left: "50vw",
            zIndex: 2*(-index + 4) + 1,
        });
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ctn,
                start: "top bottom",
                end: "top 50%",
                scrub: 1,
                toggleActions: "resume pause reverse pause",
            }
        });
        tl.fromTo(text, {left: "50vw", opacity: 0.0}, {left: "0vw", opacity: 1.0,});
    }

    const textOutAnimation = (ctn, text) => {
        gsap.set(text, {
            //left: "0vw",
            //zIndex: 2*(-index + 4),
        });
        // text flies out
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ctn,
                start: "bottom bottom",
                end: "bottom top",
                scrub: 1,
                toggleActions: "resume pause reverse pause",
            }
        });
        tl.fromTo(text, {left: "0vw", opacity: 1.0}, { left: "-100vw", opacity: 0.0});
    }

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        panelAnimation(`.sc${index}`, `.pc${index}`, `.text${index}`);
        textOutAnimation(`.sc${index}`, `.text${index}`);
        textInAnimation(`.sc${index}`, `.text${index}`);
    });

    return (
        <div className={"screen-ctn sc" + index}>
            <div className={'panel-ctn pc' + index}>
                <div className={'panel p' + index}>
                    <img src={photo} className={'photo img' + index}></img>
                </div>
            </div>
            <h1 className={'title txt-1 text' + index}>{text}</h1>
        </div>
    )
}

export default ScrollingPanels