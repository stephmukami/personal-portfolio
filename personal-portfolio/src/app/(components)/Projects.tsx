import React from 'react'

type Props = {}

function Projects({}: Props) {
  return (
    <>
    <div className='text-font-purple bg-brand-purple p-4 mb-6'>
    <h2 className='text-xl font-semibold mb-4 text-center mt-3'>Side Projects</h2>

    <div className="flex-parent flex flex-col md:flex-row border border-red-600">
        <div className="flex-child-image flex flex-col border border-fuchsia-500 p-4">
            <div>Project Title</div>
            <img src="./prisma.png" className='w-[40px] h-[40px]' alt="" />

        </div>
        <div className="flex-child-text flex flex-col">
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quam. Explicabo quos maxime nisi assumenda debitis perspiciatis voluptates
                 facere consequuntur dolorem, ea aspernatur repellendus minus, non aliquam omnis, adipisci ut.
            </div>
            <div className="techs flex">
                <div className="bg-tag-purple">tag</div>
            </div>

        </div>
    </div>


    </div>
    </>
  )
}

export default Projects