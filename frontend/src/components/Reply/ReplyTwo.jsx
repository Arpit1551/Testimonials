import React, { useState } from 'react';
import './ReplyTwo.css'
import ReactPlayer from 'react-player';

function ReplyTwo({ Poster, Name, About, Content, Video }) {

    const [videoControls, setVideoControls] = useState(false);
    const [videoPlaying, setVideoPlaying] = useState(false);
    const [iconDisplay, setIconDisplay] = useState('');
    const [showPoster , setShowPoster] = useState(true);

    const playVideo = () => {
        setVideoControls(true)
        setVideoPlaying(true)
        setIconDisplay('hidden')
    }
    return (
        <>
            <div className=" text-white h-fit rounded-[10px] w-[21vw] border">
                <div className='mrVideo h-fit relative font-sans'>
                    <div className='w-[100%] h-[35vh]'>

                        {
                             showPoster 
                            && (
                            <img 
                            src={Poster} 
                            alt="Poster"
                            className={`mrVideo absolute top-0 left-0 object-cover h-fit ${iconDisplay}`}
                            />
                        )
                        }
                        
                    <ReactPlayer 
                    url={Video} 
                    controls={videoControls} 
                    playing={videoPlaying}
                    width={'100%'}
                    height={'100%'}
                    />
                    </div>


                    <div className={`absolute top-[45%] left-[45%] ${iconDisplay} cursor-pointer`} onClick={playVideo}>

                        <svg width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#5933f3" fillRule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm8.528-4.882a1 1 0 0 1 1.027.05l6 4a1 1 0 0 1 0 1.664l-6 4A1 1 0 0 1 9 16V8a1 1 0 0 1 .528-.882z" clipRule="evenodd" /></svg>
                    </div>
                    <div className='absolute bottom-4 w-[60%] mx-4'>
                        <h1 className={`font-bold text-[1.1rem] ${iconDisplay}`}><a href="#">{Name}</a></h1>
                        <p className={`text-[.9rem] font-bold ${iconDisplay}`}> {About} </p>
                    </div>
                </div>
                <div className='bottomContent bg-[rgb(93,93,225)] p-3'>
                    <h1 className='font-bold text-xl'> {Content} </h1>
                </div>
                <div>
                    <h1></h1>
                </div>
            </div>
        </>
    )
}

export default ReplyTwo