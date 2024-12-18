import React from 'react'

type Props = {}

function Introduction({}: Props) {
  return (
    <>
    <div className="intro bg-brand-grey mb-4 flex flex-col md:flex-row p-4 md:space-x-[300px] border border-emerald-200">
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
    <div className="technologies text-center border border-red-400 p-12 mb-2">
        <h2 className='text-xl font-semibold mb-8'>Tools of Trade</h2>
        <div className="tools-images flex justify-center space-x-8 mb-8 p-4">
            <img src="./icons8-git-96.png" alt="" className="w-[60px] h-[60px]" />
            <img src="./icons8-python-96.png" alt="" className="w-[60px] h-[60px]" />
            <img src="./icons8-typescript-96.png" alt="" className="w-[60px] h-[60px]" />
            <img src="./icons8-javascript-96.png" alt="" className="w-[60px] h-[60px]" />
            <img src="./icons8-node-js-96.png" alt="" className="w-[60px] h-[60px]" />
            <img src="./react-1-logo-png-transparent.png" alt="" className="w-[60px] h-[60px]" />
            <img src="./next.svg" alt="" className="w-[60px] h-[60px]" />
            <img src="./icons8-sass-96.png" alt="" className="w-[60px] h-[60px]" />
            <img src="./icons8-tailwind-css-96.png" alt="" className="w-[60px] h-[60px]" />
            <img src="./icons8-mongo-db-96.png" alt="" className="w-[60px] h-[60px]" />
            <img src="./prisma.png" alt="" className="w-[60px] h-[60px]" />
            <img src="./icons8-mysql-logo-96.png" alt="" className="w-[60px] h-[60px]" />
            <img src="./icons8-docker-logo-96.png" alt="" className="w-[60px] h-[60px]" />

            
  
        </div>

        
    </div>
    
    </>
  )
}

export default Introduction