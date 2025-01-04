import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Menu.css';

const rusty = "#a92500";
const tawny = "#d45a18";
const powder = "#fffef7";

const Menu = (props) => {
  return (
    <nav className='menu'>
        <ul className='menu-items'> {props.children} </ul>  
    </nav>
  )
}

const MenuItem = ({name, link}) => {

    useGSAP(() => {
        gsap.set(".menu", {width: "0%"});
        gsap.set(".menu-item", {opacity: 0.0, color: rusty,});
        gsap.timeline().to(".menu", {
            width: "240px", 
            duration: 2.0, delay: 3.0, 
            ease: "power3.inOut",
        }).to(".menu-item", {
            opacity: 1.0, 
            duration: 2.4, delay: -3.0, 
            ease: "power3.inOut",
        })
    })

    return (
        <button className='menu-item txt-1' href={link}>{name}</button>
    )
}

export {Menu, MenuItem};