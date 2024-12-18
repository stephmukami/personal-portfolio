import React from 'react'

type Props = {}

function Projects({}: Props) {
  return (
    <>
    <div className='text-font-purple bg-brand-purple p-4 mb-6'>
    <h2 className='text-xl font-semibold mb-4 text-center mt-3'>Side Projects</h2>

    <div className="flex-parent flex flex-col md:flex-row border border-red-600">
        <div className="flex-child-image flex flex-col border border-fuchsia-500 max-w-[400px] w-full p-4">
            <div className='font-semibold mb-1'>E-Points</div>
            <img src="./epoints-app-p.PNG" className="w-full h-[200px] object-contain" alt="E-Points App" />
        </div>
        <div className="flex-child-text flex flex-col p-3 justify-center">
        <ul>
            <li className="mb-1">- The app uses a gamified approach to promote the usage of renewable energy by rewarding users for eco-friendly transportation.</li>
            <li className="mb-1">- Users earn points for each electric motorbike ride that can be redeemed for airtime, offering a tangible reward for environmentally conscious behavior.</li>
            <li className="mb-1">- Built using Next.js for the framework, Prisma ORM for database management, and Africa's Talking Airtime API for airtime distribution.</li>
        </ul>
        </div>
    </div>

    <div className="flex-parent flex flex-col md:flex-row border border-red-600">
        <div className="flex-child-image flex flex-col border border-fuchsia-500 max-w-[400px] w-full p-4">
            <div>Medbot</div>
            <img src="./medbot-app-p.PNG" className="w-full h-[200px] object-contain" alt="Medbot App" />
        </div>
        <div className="flex-child-text flex flex-col p-3 justify-center">
        <ul>
            <li className="mb-1">- Computer-aided diagnosis tool designed to diagnose pneumonia and tuberculosis from chest X-ray images.</li>
            <li className="mb-1">- Built using Next.js for the web framework and FastAPI for the backend API services.</li>
            <li className="mb-1">- Integrated DenseNet, a deep learning computer vision model, for image classification and diagnosis.</li>
        </ul>
        </div>
    </div>

    <div className="flex-parent flex flex-col md:flex-row border border-red-600">
        <div className="flex-child-image flex flex-col border border-fuchsia-500 max-w-[400px] w-full p-4">
            <div>iPrevent</div>
            <img src="./iprevent-app-p.PNG" className="w-full h-[200px] object-contain" alt="iPrevent App" />
        </div>
        <div className="flex-child-text flex flex-col justify-center">
        <ul>
            <li className="mb-1">- ML-powered app for assessing diabetes risk level among adults.</li>
            <li className="mb-1">- Built using Next.js for the front-end, Neon.db for database management, and Flask for the back-end API services.</li>
            <li className="mb-1">- Utilizes an ADA boosted algorithm for diabetes risk prediction.</li>
        </ul>

            
        </div>
    </div>

    <div className="flex-parent flex flex-col md:flex-row border border-red-600">
        <div className="flex-child-image flex flex-col border border-fuchsia-500 max-w-[400px] w-full p-4">
            <div>Kikwetu Store</div>
            <img src="./kikwetu-app-p.PNG" className="w-full h-[200px] object-contain" alt="Kikwetu Store App" />
        </div>
        <div className="flex-child-text flex flex-col justify-center">
        <ul>
            <li className="mb-1">- E-commerce store built with React for the front-end and MongoDB for database management.</li>
            <li className="mb-1">- Focuses on handling the checkout process for user items.</li>
        </ul>

          
        </div>
    </div>

    </div>
    </>
  )
}

export default Projects
