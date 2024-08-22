import React, { useState } from 'react';
import './Landing.css';
import ReactPlayer from 'react-player'


function Landing() {

    const [videoControls , setVideoControls] = useState(false);
    const [videoPlaying , setVideoPlaying] = useState(false);
    const [iconDisplay , setIconDisplay] = useState('');

    const playVideo = ()=>{
        setVideoControls(true)
        setVideoPlaying(true)
        setIconDisplay('hidden')
    }

    return (
        <>
            <div className="main w-full bg-[rgb(21,23,25)] text-white flex justify-center flex-col items-center" >
                <div className='w-[70%] flex flex-col justify-center items-center'>

                    <div className='flex justify-center'>
                        <h1 className='w-[80%] text-5xl text-center flex justify-center font-bold mt-20 mb-5' >Get testimonials from your customers with ease</h1>
                    </div>
                    <div className='w-[80%] text-center'>
                    <p className='text-xl text-[rgb(155,169,180)]'>Collecting testimonials is hard, we get it! So we built Testimonial. In minutes, you can collect text and video testimonials from your customers with no need for a developer or website hosting.</p>

                    </div>
                    <div className='flex justify-center gap-4 mt-8'>
                        <button className='btn px-8 py-3 rounded-md bg-[rgb(93,93,225)]'>Try FREE now</button>
                        <button className='btn flex justify-center items-center rounded-md w-[15vw]'>Talk to us
                            <img className='ml-2 mr-[-4px]' src='../../../btn-1.png' />
                            <img className='mr-[-4px]' src="../../../btn-2.jpg" />
                            <img className='mr-[-4px]' src="../../../btn-3.png" />
                            <img className='mr-[-4px]' src="../../../btn-4.png" />
                        </button>
                    </div>
                    <div>
                        <p className='text-[rgb(155,169,180)] mt-2'>Get started with free credits on us. <a className='border-b' href="#">See our pricing →</a></p>
                    </div>

                    <div className='w-full h-screen mt-10 relative'>
                       <ReactPlayer playing={videoPlaying} controls={videoControls} url='../../../high.mp4' width='100%' height='100%' />

                        <div className={`absolute top-[45%] left-[45%] ${iconDisplay} cursor-pointer`} onClick={playVideo}>

                       <svg width="80px"  height="80px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#5933f3" fillRule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm8.528-4.882a1 1 0 0 1 1.027.05l6 4a1 1 0 0 1 0 1.664l-6 4A1 1 0 0 1 9 16V8a1 1 0 0 1 .528-.882z" clipRule="evenodd" /></svg>
                        </div>

                       

                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing