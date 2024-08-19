import React from 'react'
import Hero from './Hero/Hero';
import elevateImg from "../../assets/elevate.avif";

import "./Home.css"


const Home = () => {
  const careers = [
    {
      id: 1,
      img: "/assets/careers/web-development.avif",
      title: "Web Development",
      desc: "Get custom, responsive websites with SEO optimization and continuous support for your business."
    },
    {
      id: 2,
      img: "/assets/careers/machine-learning.avif",
      title: "AI nad Machine Learning",
      desc: "Explore opportunities in software development, data science, cybersecurity, web development, AI, and machine learning."
    },
    {
      id: 3,
      img: "/assets/careers/cyber-security.avif",
      title: "Cyber Security",
      desc: "Apply for internships in software development, data science, cybersecurity, web development, AI, and machine learning."
    },
    {
      id: 4,
      img: "/assets/careers/devops.jpeg",
      title: "DevOps",
      desc: "DevOps combines development (Dev) and operations (Ops) to increase the efficiency, speed, and security of software development."
    },
    {
      id: 5,
      img: "/assets/careers/data-analysis.avif",
      title: "Data Analysis",
      desc: "Explore opportunities in software development, data science,Mysql, AI, and machine learning."
    },
    {
      id:6,
      img: "/assets/careers/cloud-computing.avif",
      title: "Cloud Computing",
      desc: "Apply for internships in Cloud Computing servers, storage, databases, networking, software, analytics."
    }
  ]
  const reviews = [
    {
      id: 1,
      img: "/assets/reviews/abhishek.avif",
      desc: "The web development services provided by AI Innovations are top-notch and highly professional.",
      name: "Abhishek Jangid",
      rating: 5,
      location: "Jaipur"
    },
    {
      id: 2,
      img: "/assets/reviews/sharma.avif",
      desc: "I had a great experience working on a live project during my internship.",
      name: "Dev Sharma",
      rating: 5,
      location: "Jaipur"
    }
  ]
  return (
    <>
    <Hero />
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
    <a className='start-career' href='https://docs.google.com/forms/u/0/d/e/1FAIpQLSdL_25hgd6naX3_GDrIiq69_gCapIRQ8NCAO56YWZOmuSyNrg/alreadyresponded?vc=0&c=0&w=1&flr=0&usp=mail_form_link' target='_blank'>Apply</a>
    </div>
    </div>
    <div className='elevate-img max-w-[544px] relative' data-aos="fade-left">
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
    <section className='boostWrapper bg-[#E1F5FE] md:py-[100px] py-[50px]'>
    <div className="container">
    <div className="boost">
    <div className='text-center max-w-[600px] mx-auto'>
    <h2 className='text-2xl sm:text-3xl md:text-5xl font-semibold'>Boost Your Career Growth</h2>
    <p className='mt-7'>Elevate your IT career with our IT internships, training programs, and web development services.</p>
    </div>
    <div className='careers flex flex-wrap justify-between gap-6 pt-10'>
    {
      careers && careers.map(career => {
        return (
          <div className='career sm:max-w-[48%] md:max-w-[45%] w-full flex flex-col items-center hover:shadow-xl p-3 rounded-xl' key={career.id} data-aos="fade-up">
          <img className='w-full h-[200px] object-cover rounded-xl' src={career.img} alt={career.desc}/>
          <div className='career-info  mt-5'>
          <h3 className='font-semibold text-xl'>{career.title}</h3>
          <p className='mt-3'>{career.desc}</p>
          </div>
          </div>
        )
      })
    }
    </div>
    <a className='boost-career' href='https://docs.google.com/forms/u/0/d/e/1FAIpQLSdL_25hgd6naX3_GDrIiq69_gCapIRQ8NCAO56YWZOmuSyNrg/alreadyresponded?vc=0&c=0&w=1&flr=0&usp=mail_form_link' target='_blank' data-aos="fade-up">Apply</a>
    </div>
    </div>
    </section>
    <section className='boostWrapper2  md:py-[100px] py-[50px]'>
    <div className="container">
    <div className="boost">
    <div className='max-w-[600px]'>
    <h2 className='text-2xl sm:text-3xl md:text-5xl font-semibold'>Boost Career</h2>
    <p className='mt-7'>Apply for internships and training programs to elevate your IT career.</p>
    </div>
    <div className='w-full flex flex-col gap-7 mt-7'>
    {
      careers && careers.slice(0, 2).map(career => {
        return (
          <div className='career flex items-center gap-6 lg:gap-12 justify-start flex-col md:flex-row' key={career.id}>
          <img className='w-full sm:w-[60%] md:w-[50%] rounded-2xl' src={career.img} alt={career.desc} 
          data-aos="fade-up"  
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"/>
          <div className='w-full sm:max-w-[40%] text-center md:text-left'>
          <h3 className='font-bold text-2xl md:text-3xl' 
          data-aos="fade-up"           
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in-out">{career.title}</h3>
          <p className='mt-5 md:mt-7'           
          data-aos="fade-up"           
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in-out">{career.desc}</p>
          </div>
          </div>
        )
      })
    }
    </div>
    </div>
    </div>
    </section>
    <section className='reviews md:py-[100px] py-[50px]'>
    <div className="container">
    <div className="reviews">
    <div className='max-w-[400px] mx-auto text-center'>
    <h2 className='text-2xl sm:text-3xl md:text-5xl font-semibold'>Happy Customers</h2>
    <p className='mt-7'>Read what our satisfied customers have to say about our services.</p>
    </div>
    <div className='flex md:justify-between mt-7 flex-col md:flex-row gap-7 justify-center md:items-start items-center'>
    {
      reviews && reviews.map(review => {
        return (
          <div className='md:w-[48%] sm:w-[60%] w-full min-h-[250px] bg-[#E1F5FE] p-6 rounded-xl flex flex-col justify-between md:items-start items-center md:text-left text-center' key={review.id}
          data-aos="fade-up"           
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in-out">
          <div>
          <span>★★★★★</span>
          <p>{review.desc}</p>
          </div>
          <div className='flex gap-6 mt-[50px]'>
          <img className='rounded-full' src={review.img}  alt={review.name}/>
          <div>
          <p className='text-sm'>{review.name}</p>
          <span>{review.location}</span>
          </div>
          </div>
          </div>
        )
      })              
    }
    </div>
    </div>
    </div>
    </section>    
    </>
  )
}

export default Home;