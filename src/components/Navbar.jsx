import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

function Navbar() {

  const links = [
    {
      href: '/founders',
      title: 'Founders'
    },
    {
      href: '/guide',
      title: 'Guide'
    }, 
    {
      href: '/pricing',
      title: 'Pricing'
    }, 
    {
      href: '/login',
      title: 'Log In'
    }
  ];

  const [ visible, setVisible ] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []) 

  const [ scrollValue, setScrollValue ] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      setScrollValue(window.scrollY > 50 ? true : false); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, [])
  
  return (
    <div className='h-fit w-full inset-0 z-20 fixed'>
      <div className={`absolute bg-white/75 w-full h-full transition-opacity ${scrollValue ? "opacity-100": "opacity-0"} backdrop-blur-lg duration-300 ease-out shadow-md z-10`}></div>
      <div className={`flex justify-between items-center z-10 py-2 max-w-5xl mx-auto px-4 transition-opacity duration-700 ease-in ${visible ? "opacity-100" : "opacity-0"}`}>
          <Link to="/" className='z-10 cursor-pointer'>
            <img 
              draggable={true}
              // loading='lazy'
              src={Logo}
              alt={`logo-image`}
            />
          </Link>

          <div className="flex items-center gap-6">
            {
              links.map((ele) => (
                <Link to={ele.href} key={ele.title} className="text-neutral-800 font-medium text-sm z-10 cursor-pointer hover:text-neutral-500 transition duration-300">
                  {ele.title}
                </Link>
              ))
            }
            <button
              className='text-white font-medium font-ABCOracle bg-[#2679F3] hover:bg-[#2262C7] py-2 px-4 rounded-xl shadow-sm shadow-neutral-400 z-10 text-shadow-md cursor-pointer'
            >Get started</button>
          </div>
        </div>
    </div>
  )
}

export default Navbar;