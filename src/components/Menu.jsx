import React from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Menu.css';

const rusty = "#a92500";
const tawny = "#d45a18";
const powder = "#fffef7";

const Menu = (props) => {
  return (
    <nav className='menu'>
        <div className='menu-items'>
            
            <MenuItem name="home" link="/" />
            <MenuItem name="About" link="/about" />
            <MenuItem name="projects" link="/projects" />
            <MenuItem name="Contact" link="/contact" />
        </div>
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
        <Link to={link}>
            <button className={'menu-item txt-1 ' + name}>{name}</button>
        </Link>
    )
}

export {Menu, MenuItem};