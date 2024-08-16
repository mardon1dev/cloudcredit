import React from 'react'
import image from "../../assets/logo.avif";

const Contact = () => {
  return (
    <div className='mt-[100px]'>
        <section className="">
            <div className="container">
                <div className="w-full flex items-end justify-between py-10 gap-8 flex-col md:flex-row">
                    <div>
                        <div className='elevate-info text-black md:max-w-[500px]'>
                            <h2 className='text-2xl sm:text-3xl md:text-5xl font-bold'>Contact Us Today for Training</h2>
                            <p className='mt-2'>
                            Get in touch with us to learn more about our training programs and how they can help elevate your IT career. Our team is here to assist you.
                            </p>
                            <div className='mt-4'>
                                <p className='font-semibold'>Email</p>
                                <a href="mailto:info@cloudcreditstechnologies.in">info@cloudcreditstechnologies.in</a>
                            </div>
                            <div className='mt-4'>
                                <p className='font-semibold'>Phone</p>
                                <a href="tel:9784668018">978-466-8018</a>
                            </div>
                            <div className='mt-4'>
                                <p className='font-semibold'>Address</p>
                                <a href="mailto:info@cloudcreditstechnologies.in">Jaipur</a>
                            </div>
                        </div>
                    </div>
                    <div className='elevate-img max-w-[544px] mx-auto'>
                        <img src={image} alt="Elevate Info" className='w-full h-full object-cover object-center' />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact