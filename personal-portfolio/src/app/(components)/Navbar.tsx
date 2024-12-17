import React from 'react'

type Props = {}

function Navbar({}: Props) {
  return (
    <div className='flex-parent flex'>
        <div className="written-name">
        <h4 className="handwritten {styles.Phitgate} text-5xl">Stephanie Mukami</h4>
        </div>

        <div className="nav-links flex">
            <h4>Past Work</h4>
            <h4>Side Projects</h4>
            <h4>Contact</h4>
            <h4>Media</h4>

        </div>

    </div>
  )
}

export default Navbar