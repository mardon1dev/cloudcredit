import React from 'react'
import { useForm } from "react-hook-form"

const ApplyForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()


  const onSubmit = (data) => {
    localStorage.setItem('formData', JSON.stringify(data));
    alert("Your message is sent.");
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
        <label className='block mb-4' htmlFor="name">Full name</label>
        <input className='w-full py-4 px-3 mb-4 rounded-xl outline-none border-[1px] border-gray-700 focus:border-gray-800' type="text" id="name" name="name" placeholder='Enter your full name here' {...register("fullName", {required: "Please write your full name."}, {pattern: /^[A-Za-z]+$/i })}/>
        {errors.fullName && <p className='text-red-500'>{errors.fullName.message}</p>}
        <br/>
        <label className='block mb-4' htmlFor="email">Email:</label>
        <input className='w-full py-4 px-3 mb-4 rounded-xl outline-none border-[1px] border-gray-700 focus:border-gray-800' type="email" id="email" name="email" placeholder='Enter your email address' {...register("email", { required: "Please write your email." }, {pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })}/>
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        <br/>
        <label className='block mb-4' htmlFor="message">Message:</label>
        <textarea className='w-full py-4 px-3 mb-4 rounded-xl outline-none border-[1px] border-gray-700 focus:border-gray-800 min-h-[150px]' id="message" name="message" placeholder='Enter your message' {...register("message", { required: "Please write your message" })}/>
        {errors.message && <p className='text-red-500'>{errors.message.message}</p>}
        <br/>
        <input className='py-4 max-w-[200px] w-full text-center flex items-center justify-center bg-blue-500 text-white border-[1px] rounded-full hover:bg-white hover:text-blue-500 hover:border-blue-500' type="submit" />
    </form>
  )
}

export default ApplyForm