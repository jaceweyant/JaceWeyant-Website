import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import './Name.css';

const rusty = "#a92500";
const tawny = "#d45a18";
const powder = "#fffef7";

// name animation
const nameAnimation = () => {
    gsap.set(".name-ctn", {scaleX: 1.0});
    gsap.timeline().to(".name-ctn", {
        scaleX: 1.2, 
        duration: 2.6,
        ease: "power3.out",
    }).to(".name-ctn", {
        scaleX: 1.0,
        duration: 1.8, delay: -1.4,
        ease: "power3.inOut",
    })
}

// logo animation
const logoAnimation = () => {
    gsap.set(".a-logo", {
        opacity: 0.0,
        scale: 0.0,
        rotation: 0.0,
    });
    gsap.timeline().to(".a-logo", {
        opacity: 1.0,
        scale: 1.0,
        rotation: "+=540",
        duration: 2.6,
        repeat: 0, ease: "power3.out",
    })
    .to(".a-logo", {
        opacity: 0.0,
        scale: 0.0,
        rotation: "-=360",
        duration: 1.8, delay: -0.6,
        repeat: 0, ease: "power3.inOut",
    })
}

// jce animation
const jceAnimation = () => {
    gsap.set(".jce-txt", {
        opacity: 0.0, 
        //scaleY: 0.0, 
        color: rusty, 
        textShadow: "0px 0px 0px var(--rusty)"
    });
    // jce fly in
    gsap.timeline()
        .to(".jce-txt", {
            opacity: 1.0, //scaleY: 1.0,
            duration: 1.0, delay: 0.0,
            repeat: 0, ease: "power3.out",
        })
        .to(".name-txt", {
            color: powder, textShadow: "0px 0px 40px var(--rusty)",
            duration: 1.0, delay: 1.6,
            repeat: 0, ease: "ease-in-out",
        })
        .to(".name-txt", {
            color: tawny,
            duration: 2.0,
            repeat: 0, ease: "ease-in-out", 
        })
}

// a animation
const aAnimation = () => {
    gsap.set(".a-txt", {
        opacity: 0.0, scaleY: 0.0,
        color: rusty, textShadow: "0px 0px 0px var(--rusty)"
    });
    gsap.timeline().to(".a-txt", {
        opacity: 1.0, scaleY: 1.0, 
        //color: powder, textShadow: "0px 0px 40px var(--rusty)",
        duration: 0.8, delay: 2.6, 
        repeat: 0, ease: "ease-in",
    })
}

// weyant animation
const weyantAnimation = () => {
    gsap.set(".weyant-txt", {
        opacity: 0.0, //height: 0.0,
    });
    gsap.to(".weyant-txt", {
        opacity: 1.0, //height: 1.0,
        duration: 3.0, delay: 0.2,
        repeat: 0, ease: "power3.in",
    });
}


const Name2 = () => {

    useGSAP(() => {
        nameAnimation();
        logoAnimation();
        jceAnimation();
        aAnimation();
        weyantAnimation();
    });

    return (
        <div className='name-ctn'>
            <h1 className='j-txt jce-txt name-txt txt-0'>J</h1>
            <div className='a-or-logo-ctn'>
                <h1 className='a-txt name-txt txt-0'>A</h1>
                <img src="JaceWeyant-Website/assets/icosLogo_0.svg" className=" a-logo filter-rufous"></img>
            </div>
            <h1 className='ce-txt jce-txt name-txt txt-0'>CE</h1>
            <h1 className='weyant-txt not-a-txt name-txt txt-0'>WEYANT</h1>
            
        </div>

    )
}

export default Name2