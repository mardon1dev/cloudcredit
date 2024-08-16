import React from 'react';
import intern from "../../assets/internship.avif";
import internElevate from "../../assets/internship-elevate.avif";

import "./InternShip.css"

import ApplyForm from '../../components/ApplyForm/ApplyForm';

const InternShip = () => {
    const internShips = [
        {
            id: 1,
            title: "Frontend Web Development",
            description: "Learn the basics of HTML, CSS, and JavaScript to build responsive and interactive web applications.",
            image: "/assets/intern/frontend.avif"
        },
        {
            id: 2,
            title: "Backend Web Development",
            description: "Learn the basics of Node.js, Express.js, and MongoDB to build scalable and secure backend applications.",
            image: "/assets/intern/backend.avif"
        },
        {
            id: 3,
            title: "Pthyon Programming",
            description: "Learn the basics of Python to build data-driven applications and automate tasks.",
            image: "/assets/intern/python.avif"
        },
        {
            id: 4,
            title: "Data Science",
            description: "Python, Pandas, Numpy, Advanced Excel, Power Bi, SQL",
            image: "/assets/intern/data-science.avif"
        },
        {
            id: 5,
            title: "Machine Learning & AI",
            description: "Deep Learning, NLP, Computer Vision, Pytorch",
            image: "/assets/intern/machine-learning.avif"
        },
        {
            id: 6,
            title: "Cloud AI with AWS",
            description: "AWS, Azure, Google Cloud, Cloud Security, Cloud Architecture",
            image: "/assets/intern/cloud-ai.avif"
        },
        {
            id: 7,
            title: "Java Core",
            description: "Foundations of Java, Integrated Development Environments (IDEs), Object-Oriented Programming (OOP), Java Tools & Packages",
            image: "/assets/intern/java-core.avif"
        },
        {
            id: 8,
            title: "Artificial Intelligence",
            description: "Deep Learning, NLP, Computer Vision, Pytorch",
            image: "/assets/intern/artificial-intelligance.avif"
        },
        {
            id: 9,
            title: "Data Analythics",
            description: "Explore opportunities in software development, data science,Mysql, AI, and machine learning.",
            image: "/assets/intern/data-analythics.avif"
        }
    ]
    return (
        <main className='internship'>
        <section className='pt-[120px]'>
        <div className="container">
        <div className="flex items-center justify-between md:flex-row flex-col gap-[30px]">
        <div className='intern-info max-w-[500px]'>
        <h2 className='text-5xl font-bold'>Boost Your Career</h2>
        <p className='mt-7 '>Apply for IT internships and training programs to elevate your skills and advance your career.</p>
        </div>
        <div className='flex lg:justify-center justify-end max-w-[500px] w-full'>
        <img className='rounded-xl' src={intern} alt="A girl" width={272} height={232}/>
        </div>
        </div>
        </div>
        </section>
        <section className='pt-[100px]'>
        <div className="container">
        <div className="internshipWrapper">
        <h2 className='md:text-6xl text-4xl text-center font-bold'>Information Technology</h2>
        <div className='flex lg:justify-between justify-center flex-wrap gap-3 pt-10'>
        {
            internShips && internShips.map(intern => {
                return (
                    <div className='intern sm:max-w-[50%] md:max-w-[40%] lg:max-w-[31%] w-full h-[400px] items-center justify-start flex-col relative overflow-hidden rounded-xl' key={intern.id}>
                    <img className='w-full rounded-2xl h-full object-cover' src={intern.image} alt={intern.description} />
                    <div className='w-full text-center md:text-left absolute bottom-3 text-white z-10 px-3'>
                    <h3 className='font-bold text-2xl md:text-3xl'>{intern.title}</h3>
                    <p className='mt-5 md:mt-7'>{intern.description}</p>
                    <a className='mt-7 w-[200px] md:mx-left mx-auto text-white py-3 px-6 border-[1px] border-blue-500 bg-blue-500 rounded-[50px] flex items-center justify-center hover:bg-transparent hover:text-blue-500 duration-150' href='https://docs.google.com/forms/u/0/d/e/1FAIpQLSdL_25hgd6naX3_GDrIiq69_gCapIRQ8NCAO56YWZOmuSyNrg/alreadyresponded?vc=0&c=0&w=1&flr=0&usp=mail_form_link' target='_blank'>Apply</a>
                    </div>
                    </div>
                )
            })
        }
        </div>
        </div>
        </div>
        </section>
        <section className="elevateWrapper pt-[100px]">
        <div className="container">
        <div className="elevate w-full flex items-center justify-between py-10 gap-8 flex-col md:flex-row">
        <div data-aos="fade-right">
        <div className='elevate-info text-black max-w-[500px] w-full'>
        <h2 className='text-2xl sm:text-3xl md:text-5xl font-bold'>Elevate your IT Career</h2>
        <p className='mt-7'>
        At AI Innovations, we offer students the opportunity to apply for internships and training programs across various IT domains. 
        Additionally, our company provides comprehensive web development services.
        </p>
        <div className='elevate-stats flex mt-7'>
        <div className='flex flex-col text-black items-start w-[50%]'>
        <span className='text-[32px] font-bold'>150+</span>
        <span className='text-[16px] font-semibold'>Certifications</span>
        </div>
        <div className='flex flex-col text-black items-start w-[50%]'>
        <span className='text-[32px] font-bold'>15</span>
        <span className='text-[16px] font-semibold'>Expert Mentorship Boost</span>
        </div>
        </div>
        </div>
        </div>
        <div className='elevate-img max-w-[544px] w-full' data-aos="fade-left">
        <img className='w-full rounded-3xl h-auto' src={internElevate} alt="Elevate" />
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
        </main>
    )
}

export default InternShip