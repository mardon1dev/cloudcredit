import React from 'react'

const ApplyForm = () => {
  return (
    <form action="" className='w-full'>
        <label className='block mb-4' htmlFor="name">Name</label>
        <input className='w-full py-4 px-3 mb-4 rounded-xl outline-none border-[1px] border-gray-700 focus:border-gray-800' type="text" id="name" name="name" placeholder='Enter Your full name here' required/>
        <br/>
        <label className='block mb-4' htmlFor="email">Email:</label>
        <input className='w-full py-4 px-3 mb-4 rounded-xl outline-none border-[1px] border-gray-700 focus:border-gray-800' type="email" id="email" name="email" placeholder='Enter your email address' required/>
        <br/>
        <label className='block mb-4' htmlFor="message">Message:</label>
        <textarea className='w-full py-4 px-3 mb-4 rounded-xl outline-none border-[1px] border-gray-700 focus:border-gray-800 min-h-[150px]' id="message" name="message" placeholder='Enter your message' required/>
        <br/>
        <button className='py-4 max-w-[200px] w-full text-center flex items-center justify-center bg-blue-500 text-white border-[1px] rounded-full hover:bg-white hover:text-blue-500 hover:border-blue-500' type="submit">Submit</button>
    </form>
  )
}

export default ApplyForm