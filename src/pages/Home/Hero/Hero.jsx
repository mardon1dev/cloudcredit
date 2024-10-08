import React from 'react'
import video from "../../../assets/video.mp4"

import Video from '../../../components/Video/Video';

import "./Hero.css";
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className='hero w-full relative'>
      <div className='container'>
        <div className='hero-content text-center h-[100vh] py-[100px] flex items-center justify-center'>
          <div className='text-white max-w-[500px] md:max-w-[700px] flex items-center justify-center flex-col'>
            <h1 className='text-[32px] sm:text-5xl font-bold md:text-[64px]'>Elevate Your IT Career with AI Innovations</h1>
            <div className='max-w-[400px] md:max-w-[500px] text-center'>
              <p className='py-6'>Apply for IT internships and training programs to boost your career growth with expert mentorship.</p>
            </div>
            <div className='flex items-center gap-[20px] flex-col sm:flex-row'>
              <Link className='explore' to='/internship' >Explore</Link>
              <Link className='apply' to='https://docs.google.com/forms/u/0/d/e/1FAIpQLSdL_25hgd6naX3_GDrIiq69_gCapIRQ8NCAO56YWZOmuSyNrg/alreadyresponded?vc=0&c=0&w=1&flr=0&usp=mail_form_link' target='_blank'>Apply</Link>
            </div>
          </div>
        </div>
      </div>
      <Video src={video} />
    </div>
  )
}

export default Hero