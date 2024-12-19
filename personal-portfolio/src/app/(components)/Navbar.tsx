import React from 'react';

type Props = {};

function Navbar({}: Props) {
  return (
    <nav className='flex flex-col md:flex-row justify-between items-center font-medium space-y-3 md:space-y-0 border border-emerald-400 p-4  '>
      {/* Logo Section */}
      <div className="written-name border border-red-400">
        <h4 className="handwritten text-3xl md:text-5xl">Stephanie Mukami</h4>
      </div>

      <div className="nav-links flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 justify-center items-center border border-red-700">
      <a href="#resume" className='hover:text-hover-blue'>
          <h4>Past Work</h4>
        </a>
        <a href="#projects" className='hover:text-hover-blue'>
          <h4>Side Projects</h4>
        </a>
        <a href="#communities" className='hover:text-hover-blue'>
          <h4>Communities</h4>
        </a>
        <a href="#contact" className='hover:text-hover-blue'>
          <h4>Contact</h4>
        </a>

      </div>
    </nav>
  );
}

export default Navbar;
