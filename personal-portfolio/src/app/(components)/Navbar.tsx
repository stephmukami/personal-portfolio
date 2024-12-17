import React from 'react'

type Props = {}

function Navbar({}: Props) {
  return (
    <nav className='flex-parent  font-medium flex flex-col md:flex-row  space-y-3 md:space-x-[1050px] align-center border border-emerald-400 p-4'>
        <div className="written-name border border-red-400">
        <h4 className="handwritten {styles.Phitgate} text-5xl">Stephanie Mukami</h4>
        </div>

        <div className="nav-links flex flex-col space-y-2 md:flex-row md:space-x-[50px] md:space-y-0 justify-center items-center border border-red-700">
            <h4>Past Work</h4>
            <h4>Side Projects</h4>
            <h4>Communities</h4>
            <h4>Contact</h4>

        </div>

    </nav>
  )
}

export default Navbar