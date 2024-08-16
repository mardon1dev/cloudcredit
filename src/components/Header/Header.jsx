import React, { useState } from 'react'
import Logo from "../../assets/logo.svg";

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
                    <a href="/">
                        <img src={Logo} alt="Logo"/>
                    </a>
                    <ul className={`${ burger ? "header-list": "open"} md:flex md:items-center w-full md:justify-end gap-[10px] lg:gap-[45px] items-end justify-center`}>
                        <li>
                            <a className="text-gray-900 text-base font-normal leading-6 tracking-normal text-left pb-1 hover:border-b-2 border-black" href="/">Home</a>
                        </li>
                        <li>
                            <a className="text-gray-900 text-base font-normal leading-6 tracking-normal text-left pb-1 hover:border-b-2 border-black" href="/">Internship</a>
                        </li>
                        <li>
                            <a className="text-gray-900 text-base font-normal leading-6 tracking-normal text-left pb-1 hover:border-b-2 border-black" href="/">Training</a>
                        </li>
                        <li>
                            <a className="text-gray-900 text-base font-normal leading-6 tracking-normal text-left pb-1 hover:border-b-2 border-black" href="/">Services</a>
                        </li>
                        <li>
                            <a className="text-gray-900 text-base font-normal leading-6 tracking-normal text-left pb-1 hover:border-b-2 border-black" href="/">About Us</a>
                        </li>
                        <li>
                            <a className="text-gray-900 text-base font-normal leading-6 tracking-normal text-left pb-1 hover:border-b-2 border-black" href="/">Contact</a>
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