import React from 'react'
import ApplyForm from '../../components/ApplyForm/ApplyForm'

const OurServices = () => {
    const services =[
        {
            id:1,
            image: "/assets/services/training.avif",
            title:"Apply to Training",
            description: "Explore opportunities in software development, data science, cybersecurity, web development, AI, and machine learning."
        },
        {
            id: 2,
            image: "/assets/services/internship.avif",
            title: "Apply to Internship",
            description: "Work on live projects, receive expert mentorship, and boost your career growth."
        },
        {
            id: 3,
            image: "/assets/services/web-development.avif",
            title: "Web Development Services",
            description: "Custom responsive websites with SEO optimization and continuous support."
        }
    ]
  return (
    <div className='mt-[100px]'>
        <section className='bg-[#1E1E1E] py-[100px]'>
            <div className="container">
                <div>
                    <h1 className='text-[#F7F7F7] text-[40px] font-bold mb-[20px] text-center'>Boost Your IT Career</h1>
                    <p className='text-center text-white'>Elevate your IT career with our internships, training programs, and web development services.</p>
                    <div className='mt-7 flex lg:justify-between justify-center flex-wrap gap-3 pt-10'>
                        {
                            services && services.map(item => {
                                return (
                                    <div className='sm:max-w-[50%] md:max-w-[40%] lg:max-w-[31%] w-full items-center justify-start flex-col' key={item.id}>
                                    <img className='w-full rounded-t-xl rounde h-[250px] object-cover' src={item.image} alt={item.description} />
                                    <div className='w-full text-center md:text-left bg-white p-7'>
                                    <h3 className='font-bold text-xl md:text-2xl'>{item.title}</h3>
                                    <p className='mt-5 md:mt-7'>{item.description}</p>
                                    </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
        <section className='py-[100px]'>
            <div className="container">
                <div className="flex flex-col items-center">
                    <div className='max-w-[550px] mx-auto text-center'>
                        <h2 className='md:text-5xl text-2xl font-bold'>Contact Us for IT Internships and Training Programs</h2>
                        <p className='mt-7'>Get in touch with us to apply for exciting internship opportunities.</p>
                    </div>
                    <div className='max-w-[550px] w-full bg-[#E1F5FE] p-6 flex justify-center rounded-xl mt-7'>
                        <ApplyForm />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default OurServices