import React, { useState } from 'react'
import Logo from "../../assets/logo.avif";
import { Link, NavLink, Outlet } from 'react-router-dom';

import "./Header.css";

const Header = () => {
    const [burger, setBurger] = useState(false);

    function handleMenuOpen() {
        setBurger(false);
        window.scrollTo(0, 0);
    }
    
    function handleBurger() {
        setBurger(!burger);
    }
    
    return (
        <div id='header'>
            <div className="container">
                <div className="header-top text-center py-[10px] w-full">
                    <p className='text-[#1358E3] font-bold text-[12px] md:text-[16px]'>Welcome To Cloudcredits Technologies Pvt. Ltd.</p>
                </div>
                <div className="header flex items-center justify-between py-3 w-full">
                    <a className='max-w-[200px]' href="/">
                        <img className='w-full' src={Logo} alt="Logo"/>
                    </a>
                    <ul className={`${ burger ? "header-list": "open"} md:flex md:items-center w-full md:justify-end gap-[20px] lg:gap-[45px] items-end justify-center`}>
                        <li>
                            <NavLink className="text-gray-900 text-base font-normal leading-6 tracking-normal text-left" to="/" onClick={handleMenuOpen}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-gray-900 text-base font-normal leading-6 tracking-normal text-left" to="/internship" onClick={handleMenuOpen}>Internship</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-gray-900 text-base font-normal leading-6 tracking-normal text-left" to="/training" onClick={handleMenuOpen}>Training</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-gray-900 text-base font-normal leading-6 tracking-normal text-left" to="/services" onClick={handleMenuOpen}>Services</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-gray-900 text-base font-normal leading-6 tracking-normal text-left" to="/about" onClick={handleMenuOpen}>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-gray-900 text-base font-normal leading-6 tracking-normal text-left" to="/contact" onClick={handleMenuOpen}>Contact</NavLink>
                        </li>
                    </ul>
                    <Outlet />
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