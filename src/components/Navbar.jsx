import React , {useState} from 'react'
import {
    FaBars,
    FaTimes,
  } from 'react-icons/fa';

 

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
    <a href='/'>
      <span className='text-pink-600 text-4xl'>H.A</span>
    </a>

    {/* menu */}

    <ul className='hidden md:flex'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
        <a href='/about'>About</a>
        </li>
        <li>
        <a href='/skills'>Skills</a>
        </li>
        <li>
        <a href='/work'>Work</a>
        </li>
        <li>
        <a href='/contact'>Contact</a>
        </li>
    </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
        <a href='/'>Home</a>
        </li>
        <li className='py-6 text-4xl'>
        
          <a href='/about'>About</a>
        </li>
        <li className='py-6 text-4xl'>

          <a href='/skills'>Skills</a>
        </li>
        <li className='py-6 text-4xl'>
     
        <a href='/work'>Work</a>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <a href='/contact'>Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar