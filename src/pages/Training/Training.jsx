import React from 'react'
import  "./Training.css";
import elevateImg from "../../assets/elevate.avif"

import ApplyForm from '../../components/ApplyForm/ApplyForm';

const Training = () => {
    return (
        <div className='mt-[100px]'>
        <section className='py-[120px] training'>
        <div className="container">
        <div className='text-white text-center'>
        <h2 className='md:text-6xl text-3xl font-bold'>Boost Your Career Growth</h2>
        <div className='text-center mt-7 max-w-[400px] mx-auto'>
        <p>Elevate your IT career with expert mentorship and live project experience in various domains.</p>
        </div>
        </div>
        </div>
        </section>
        <section className="elevateWrapper">
        <div className="container">
        <div className="elevate w-full flex items-center justify-between py-10 gap-8 flex-col md:flex-row">
        <div data-aos="fade-right">
        <div className='elevate-info text-black max-w-[500px] w-full'>
        <h2 className='text-2xl sm:text-3xl md:text-5xl font-bold'>Elevate your IT Career</h2>
        <p className='mt-7'>
        At AI Innovations, we offer students the opportunity to apply for internships and training programs across various IT domains. 
        Additionally, our company provides comprehensive web development services.
        </p>
        <a className='training-button' href='https://docs.google.com/forms/u/0/d/e/1FAIpQLSdL_25hgd6naX3_GDrIiq69_gCapIRQ8NCAO56YWZOmuSyNrg/alreadyresponded?vc=0&c=0&w=1&flr=0&usp=mail_form_link' target='_blank'>Apply</a>
        </div>
        </div>
        <div className='elevate-img max-w-[544px] relative'>
        <img className='w-full rounded-3xl h-auto' src={elevateImg} alt="Elevate"  width="544px" height="544px"/>
        <div className='elevate-stats absolute bottom-0 md:bottom-2 lg:bottom-6 bg-blue-400 w-full left-0 md:left-[-20px] lg:left-[-34px] flex sm:flex-row flex-col p-7 rounded-2xl'>
        <div className='flex flex-col text-white items-start w-[50%]'>
        <span className='text-[32px] font-bold'>150+</span>
        <span className='text-[16px] font-semibold'>Certifications</span>
        </div>
        <div className='flex flex-col text-white items-start w-[50%]'>
        <span className='text-[32px] font-bold'>15</span>
        <span className='text-[16px] font-semibold'>Expert Mentorship Boost</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        <section className="elevateWrapper">
            <div className="container">
                <div className="elevate w-full flex items-start justify-between py-10 gap-8 flex-col md:flex-row">
                    <div>
                        <div className='elevate-info text-black md:max-w-[500px] w-full'>
                            <h2 className='text-2xl sm:text-3xl md:text-5xl font-bold'>Contact Us Today for Training</h2>
                            <p className='mt-2'>
                            Get in touch with us to learn more about our training programs and how they can help elevate your IT career. Our team is here to assist you.
                            </p>
                            <div className='mt-4'>
                                <p className='font-semibold'>Inquiry</p>
                                <a href="tel:9784668018">9784668018</a>
                            </div>
                            <div className='mt-4'>
                                <p className='font-semibold'>Email</p>
                                <a href="mailto:info@cloudcreditstechnologies.in">info@cloudcreditstechnologies.in</a>
                            </div>
                        </div>
                    </div>
                    <div className='elevate-img max-w-[544px] w-full mx-auto'>
                        <ApplyForm />
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Training