import React from 'react'

function ReplyOne({Text , Name , About , Profile , Company}) {
  return (
    <>
      <div className="bg-[rgb(37,40,44)] w-[22vw] h-fit rounded-md flex flex-col p-4 shadow-md shadow-[rgb(29,78,216)] hover:bg-[#363535]">
        <div className='w-full flex justify-center items-center text-white'>
          <img src={Profile} className='border w-12 h-12 rounded-full mx-4'/>
          <div>
            <h1 className='font-bold'><a href="#"> {Name} </a></h1>
            <p className='leading-5'> {About} </p>
          </div>
        </div>
        <p className='text-[rgb(217,227,234)] my-4'> {Text} </p>
        <div className='flex justify-center '>
          <img src={Company} className='w-[30%]'/>
        </div>
      </div>
    </>
  )
}

export default ReplyOne