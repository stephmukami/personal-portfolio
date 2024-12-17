import React from 'react'

type Props = {}

function Introduction({}: Props) {
  return (
    <>
    <div className="intro bg-brand-grey flex flex-col md:flex-row p-4 md:space-x-[300px] border border-emerald-200">
        <div className="text-intro border border-red-500 p-10">
            <h2 className='font-semibold text-2xl md:text-3xl mb-10'>Hey there !</h2>
            <h4 className='font-semibold text-4xl md:text-6xl mb-4'>I am a Full Stack<br></br> Software Engineer</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Et qui voluptate saepe ex ea temporibus nam quibusdam fugit, provident illo?</p>
        </div>

        <div className="image-intro border border-red-400 flex justify-center items-center">
            <img src="./portfolio-steph-image.png" className=' w-[250px] md:w-[400px] rounded-md' alt="stephanie image" />

        </div>
    </div>
    </>
  )
}

export default Introduction