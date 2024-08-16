import React, { useState } from 'react'
import Logo from "../../assets/logo.avif";
import { Link, NavLink } from 'react-router-dom';

import "./Header.css";

const Header = () => {
    const [burger, setBurger] = useState(false);
    
    function handleBurger() {
        setBurger(!burger);
    }
    
    return (
        <div className='w-full z-50 fixed top-0' id='header'>
            <div className="header-top text-center py-[10px]">
                <p className='text-[#1358E3] font-bold text-[12px] md:text-[16px]'>Welcome To Cloudcredits Technologies Pvt. Ltd.</p>
            </div>
            <div className="container">
                <div className="header flex items-center justify-between py-3">
                    <a className='max-w-[200px]' href="/">
                        <img className='w-full' src={Logo} alt="Logo"/>
                    </a>
                    <ul className={`${ burger ? "header-list": "open"} md:flex md:items-center w-full md:justify-end gap-[20px] lg:gap-[45px] items-end justify-center`}>
                        <li>
                            <NavLink className="text-gray-900 text-base font-normal leading-6 tracking-normal text-left" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-gray-900 text-base font-normal leading-6 tracking-normal text-left" to="/internship">Internship</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-gray-900 text-base font-normal leading-6 tracking-normal text-left" to="/training">Training</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-gray-900 text-base font-normal leading-6 tracking-normal text-left" to="/services">Services</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-gray-900 text-base font-normal leading-6 tracking-normal text-left" to="/about">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-gray-900 text-base font-normal leading-6 tracking-normal text-left" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className={`${!burger ? "header-burger": "change" }`} onClick={handleBurger}>
                        <span className="header-span"></span>
                        <span className="header-span"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header