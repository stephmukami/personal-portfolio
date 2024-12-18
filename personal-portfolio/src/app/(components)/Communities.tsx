import React from 'react'
import Link from 'next/link'
type Props = {}

function Communities({}: Props) {

  
  return (
    <>
 <h2 className='text-xl font-semibold mb-8 text-center'>Communities I'm part of</h2>

 <div className="tools-images flex flex-col md:flex-row justify-center md:space-x-8 mb-8 p-4 items-center">
  
  <Link href="https://developers.google.com/womentechmakers">
    <div className="card mb-4 w-[200px] h-[200px] bg-card-yellow flex items-center justify-center p-2 rounded-lg rotate-0 md:rotate-6">
      <img
        src="./women-tech-download.png"
        alt=""
        className="w-[180px] h-[80px]"
      />
    </div>
</Link>

  <Link href="https://mlh.io/about">
    <div className="card mb-4 w-[200px] h-[200px] bg-card-red flex items-center justify-center p-2 rounded-lg rotate-0 md:-rotate-3">
      <img
        src="./mlh-fb-logo.png"
        alt="mlh-pic"
        className="w-[130px] h-[110px]"
      />
    </div>
  </Link>


  <Link href="https://rewritingthecode.org/about-us/">
  <div className="card mb-4 w-[200px] h-[200px] bg-card-green flex items-center justify-center p-2 rounded-lg rotate-0 md:rotate-3">
      <img
        src="./rtc-download.png"
        alt=""
        className="w-[120px] h-[70px]"
      />
    </div>
  </Link>

</div>

           
    </>
  )
}

export default Communities