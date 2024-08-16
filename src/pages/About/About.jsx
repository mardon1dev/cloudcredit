import React from 'react'
import AboutImg1 from "../../assets/about/about-us-img.avif";
import AboutImg2 from "../../assets/about/about-us-img2.avif";

const About = () => {
  return (
    <div className='mt-[100px]'>
        <section className='py-[100px]'>
            <div className="container">
                <div>
                    <h1 className='text-[40px] font-bold text-[#333]'>Why Choose<span className='text-[#2407ff]'> Us</span> ?</h1>
                    <ul className='flex flex-col gap-2 max-w-[750px] mt-5'>
                        <li className='text-lg'><span className='font-bold'>Experienced Instructors:</span> Learn from professionals with extensive industry knowledge and experience.</li>
                        <li className='text-lg'><span className='font-bold'>Cutting-Edge Technology:</span> Stay up-to-date with the latest tools and methodologies.</li>
                        <li className='text-lg'><span className='font-bold'>Community Support:</span> Join a network of like-minded individuals and grow together.</li>
                        <li className='text-lg'><span className='font-bold'>Job Assistance:</span> Benefit from job placement support and interview preparation resources.</li>
                    </ul>
                    <img src={AboutImg1} alt="About Us" className='w-full h-full object-cover mt-5' />
                    <div className='flex items-center justify-between gap-5 mt-6 md:flex-row flex-col md:items-start'>
                        <div className='flex flex-col items-start max-w-[500px] w-full'>
                            <h3 className='md:text-3xl text-xl font-bold'>Our mission</h3>
                            <p className='mt-4'>At IT Careers with Training & Internship, we are committed to bridging the gap between education and employment. Our mission is to provide high-quality training and hands-on internship opportunities that empower individuals to launch and advance their careers in IT. We collaborate with industry-leading companies to ensure our programs align with current market demands and technological advancements.</p>
                        </div>
                        <div className='flex flex-col items-start max-w-[500px] w-full'>
                            <h3 className='md:text-3xl text-xl font-bold'>Our vision</h3>
                            <p className='mt-4'>To be the leading platform that transforms aspiring individuals into industry-ready IT professionals through innovative training and real-world internship experiences.</p>
                        </div>
                    </div>
                    <img src={AboutImg2} alt="About Us" className='w-full h-auto object-cover mt-5' />
                </div>
            </div>
        </section>
    </div>
  )
}

export default About