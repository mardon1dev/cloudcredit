import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#1E1E1E] text-white md:py-[70px] py-[50px] '>
        <div className="container">
            <div className="footer flex justify-between md:flex-row flex-col md:items-start items-center md:text-left text-center gap-5">
                <div className="footer-left sm:max-w-[300px] w-full">
                    <h2 className='text-3xl'>Innovations</h2>
                    <p className='mt-7'>Elevate your IT career with our comprehensive services.</p>
                    <div className='flex gap-6 mt-9 items-center md:justify-start justify-center'>
                        <a href="https://www.instagram.com/cloudcredits_/" target='_blank' title='Go to Instagram Page'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0027 5.84808C8.59743 5.84808 5.85075 8.59477 5.85075 12C5.85075 15.4053 8.59743 18.1519 12.0027 18.1519C15.4079 18.1519 18.1546 15.4053 18.1546 12C18.1546 8.59477 15.4079 5.84808 12.0027 5.84808ZM12.0027 15.9996C9.80212 15.9996 8.00312 14.2059 8.00312 12C8.00312 9.7941 9.79677 8.00046 12.0027 8.00046C14.2086 8.00046 16.0022 9.7941 16.0022 12C16.0022 14.2059 14.2032 15.9996 12.0027 15.9996ZM19.8412 5.59644C19.8412 6.39421 19.1987 7.03135 18.4062 7.03135C17.6085 7.03135 16.9713 6.38885 16.9713 5.59644C16.9713 4.80402 17.6138 4.16153 18.4062 4.16153C19.1987 4.16153 19.8412 4.80402 19.8412 5.59644ZM23.9157 7.05277C23.8247 5.13063 23.3856 3.42801 21.9775 2.02522C20.5747 0.622429 18.8721 0.183388 16.9499 0.0870135C14.9689 -0.0254238 9.03112 -0.0254238 7.05008 0.0870135C5.1333 0.178034 3.43068 0.617075 2.02253 2.01986C0.614389 3.42265 0.180703 5.12527 0.0843279 7.04742C-0.0281093 9.02845 -0.0281093 14.9662 0.0843279 16.9472C0.175349 18.8694 0.614389 20.572 2.02253 21.9748C3.43068 23.3776 5.12794 23.8166 7.05008 23.913C9.03112 24.0254 14.9689 24.0254 16.9499 23.913C18.8721 23.822 20.5747 23.3829 21.9775 21.9748C23.3803 20.572 23.8193 18.8694 23.9157 16.9472C24.0281 14.9662 24.0281 9.03381 23.9157 7.05277ZM21.3564 19.0728C20.9388 20.1223 20.1303 20.9307 19.0755 21.3537C17.496 21.9802 13.7481 21.8356 12.0027 21.8356C10.2572 21.8356 6.50396 21.9748 4.92984 21.3537C3.88042 20.9361 3.07195 20.1276 2.64897 19.0728C2.02253 17.4934 2.16709 13.7455 2.16709 12C2.16709 10.2546 2.02789 6.50129 2.64897 4.92717C3.06659 3.87776 3.87507 3.06928 4.92984 2.6463C6.50931 2.01986 10.2572 2.16443 12.0027 2.16443C13.7481 2.16443 17.5014 2.02522 19.0755 2.6463C20.1249 3.06392 20.9334 3.8724 21.3564 4.92717C21.9828 6.50665 21.8383 10.2546 21.8383 12C21.8383 13.7455 21.9828 17.4987 21.3564 19.0728Z" fill="currentColor"></path>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/cloudcredits-technology-pvt-ltd/" target='_blank' title='Go to LinkedIn page'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.37214 23.9997H0.396429V7.97649H5.37214V23.9997ZM2.88161 5.79078C1.29054 5.79078 0 4.47292 0 2.88185C1.13882e-08 2.1176 0.303597 1.38465 0.844003 0.844247C1.38441 0.303841 2.11736 0.000244141 2.88161 0.000244141C3.64586 0.000244141 4.3788 0.303841 4.91921 0.844247C5.45962 1.38465 5.76321 2.1176 5.76321 2.88185C5.76321 4.47292 4.47214 5.79078 2.88161 5.79078ZM23.9946 23.9997H19.0296V16.1997C19.0296 14.3408 18.9921 11.9569 16.4427 11.9569C13.8557 11.9569 13.4593 13.9765 13.4593 16.0658V23.9997H8.48893V7.97649H13.2611V10.1622H13.3307C13.995 8.90328 15.6177 7.57471 18.0386 7.57471C23.0743 7.57471 24 10.8908 24 15.1979V23.9997H23.9946Z" fill="currentColor"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='sm:max-w-[200px] w-full'>
                    <span className='text-2xl'>Company:</span>
                    <p className='mt-7'>Cloudcredits Technologies Pvt. Ltd.</p>
                </div>
                <div className='max-w-[300px] w-full'>
                    <span className='text-2xl block'>Boost</span>
                    <p className='mt-7'>Apply for IT Internship now</p>
                    <form action="">
                        <input type="email" placeholder="Enter your email" className="w-full mt-5 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 text-black" required/>
                        <button type="submit" className=" mt-6 max-w-[200px] text-center inline-block w-full py-3 rounded-xl bg-blue-600 text-white">Submit</button>
                    </form>
                </div>
            </div>
            <div className='footer-bottom mt-6 md:text-left text-center'>
                <p>© 2024. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer