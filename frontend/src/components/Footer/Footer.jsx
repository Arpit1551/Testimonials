import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <>
        <div className='bg-[rgb(21,23,25)] flex w-full justify-center'>

            <div className='bg-[rgb(21,23,25)] flex w-[80%] gap-8 mb-10'>
                <div className='h-fit w-[25vw] font-[30px]'>
                    <i><img src="https://testimonial.to/static/media/logo.5ff3c18e.svg" alt="Logo" className='w-40 mb-2'/></i>
                    <p className='text-[rgb(155,169,180)]'>The easiest solution to getting text and video testimonials from your customers</p>
                </div>
                <div>
                    <h1 className='text-white'>PRODUCTS</h1>
                    <ul className='list'>
                        <li>Our Wall of Love</li>
                        <li>Chrome extension</li>
                        <li>Slack app</li>
                        <li>Hopin app</li>
                        <li>Hopin app</li>
                        <li>Features</li>
                        <li>Integrations</li>
                        <li>Help center</li>
                        <li>Product Demo</li>
                        <li>Status page</li>
                    </ul>
                </div>

                <div className='ml-10'>
                    <h1 className='text-white'>COMPANY</h1>
                    <ul className='list'>
                        <li>Our resources</li>
                        <li>Tutorials</li>
                        <li>Customer stories</li>
                        <li>Join affiliate program</li>
                        <li>Privacy policy</li>
                        <li>Terms of Service</li>
                        <li>Cookie policy</li>
                        <li>DPA (GDPR)</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className='ml-10'>
                    <h1 className='text-white'>CUSTOMERS</h1>

                    <ul className='list'>
                        <li>Agencies</li>
                        <li>B2B companies</li>
                        <li>Course creators</li>
                        <li>eCommerce</li>
                        <li>Consumer apps</li>
                    </ul>
                </div>
                <div className='h-fit w-[10vw] ml-10'>
                    <ul>
                        <li><h1 className='text-white'>Latest video</h1></li>
                        <li><a href="#"><img className='w-40 rounded-md' src="https://imagedelivery.net/pcavElAZUUevXK53Dl4vWA/27ef1a67-9a88-4276-cc9d-21270c344100/public" alt="" /></a></li>
                        <li className='text-[rgb(155,169,180)] hover:text-white hover:border-b cursor-pointer w-fit'>AI Space Creator in Testimonial</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer