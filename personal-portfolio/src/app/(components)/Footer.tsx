import React from 'react'
import Link from 'next/link'
type Props = {}

function Footer({}: Props) {
  return (
    <>
    <div className='flex-parent  font-medium flex flex-col md:flex-row  space-y-3 md: justify-between align-center border border-emerald-400  bg-brand-grey p-[70px]'>
    
        <div className="written-name border border-red-400">
        <h4 className="text-sm font-light">  Stephanie Mukami - Your SWE buddy 👩‍💻  </h4>
        </div>

        <div className="written-name border border-red-400">
        <h4 className="text-sm font-light">  &copy; {new Date().getFullYear()} </h4>
        </div>
        
        

        <div className="nav-links flex flex-col space-y-2 md:flex-row md:space-x-[50px] md:space-y-0 justify-center items-center border border-red-700">
            <Link href="https://www.linkedin.com/in/stephanie-mukami/">
            <img src="icons8-linkedin-logo-50.png " className='w-[20px] h-[20px]'></img>
            </Link>

            <Link href="https://steph-mukami.hashnode.dev/">
            <img src="./icons8-blog-50.png" className='w-[20px] h-[20px]'></img>

            </Link>

            <Link href="https://github.com/stephmukami">
            <img src="./icons8-github-50.png" className='w-[20px] h-[20px]'></img>

            </Link>

            <Link href="mailto:stephmukami@gmail.com">
            <img src="./icons8-email-50.png" className='w-[20px] h-[20px]'></img>

            </Link>
         
        </div>

    </div>
    </>

  )
}

export default Footer