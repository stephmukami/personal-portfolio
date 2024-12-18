import React from 'react'

type Props = {}

function Communities({}: Props) {
  return (
    <>
 <h2 className='text-xl font-semibold mb-8 text-center'>Communities I'm part of</h2>

    <div className="tools-images flex justify-center space-x-8 mb-8 p-4">
      <div className="card w-[200px] h-[200px] bg-card-yellow flex items-center justify-center p-2 rounded-lg">
      <img src="./women-tech-download.png" alt="" className="w-[180px] h-[80px]" />


      </div>
            <img src="./mlh-fb-logo.png" alt="" className="w-[130px] h-[110px]" />
            <img src="./rtc-download.png" alt="" className="w-[120px] h-[70px]" />
            </div>
    </>
  )
}

export default Communities