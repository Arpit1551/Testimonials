import React, { useState } from 'react';
import {Link , NavLink} from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import './Navbar.css';

function Navbar() {

    const [navDisplay , setNavDisplay] = useState('hidden');

    const toggleCustomers = ()=>{
            if(navDisplay==='hidden'){
                setNavDisplay('block')
            }else{
                setNavDisplay('hidden')
            }
    }

    return (
        <>
            <div className='w-full h-[9vh] bg-[rgb(21,23,25)] text-[rgb(235,241,245)] flex justify-between items-center'>
                <Link to='/'>
                <img src="https://testimonial.to/static/media/logo.5ff3c18e.svg" className=' w-44 cursor-pointer' alt="logo" />
                </Link>
                <ul className='navElements flex gap-6 font'>
                    <li> <span onClick={toggleCustomers}>Customers<i className="ri-arrow-down-s-line"></i></span>
                        <ul className={`Customers absolute bg-[rgb(42,44,45)] mt-8 left-[33%] ${navDisplay} `}>
                            <li> <i className="ri-artboard-line logo"></i> Agencies</li> 
                            <li> <i className="ri-handbag-line logo"></i> eCommerce & Retails</li>
                            <li> <i className="ri-book-open-line logo"></i> Course Creators</li>
                            <li> <i className="ri-briefcase-line logo"></i> B2B Companies</li>
                            <li> <i className="ri-smartphone-line logo"></i> B2B Apps</li>
                        </ul>
                    </li>
                    <Link to='/Features'>
                    <li>Features</li>
                    </Link>

                    <Link to='/Integrations'>
                    <li>Integrations</li>
                    </Link>

                    <Link to='/Pricing'>
                    <li>Pricing</li>
                    </Link>
                </ul>

                <div className='flex gap-3'>
                    <Link to={"/Sign-In"}>
                          <button className='mt-2'>Sign In</button>
                    </Link>
                    <Link to={'/Sign-Up'}>
                    <button className='bg-[rgb(93,93,225)] px-3 py-2 rounded cursor-pointer'>Sign Up</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar