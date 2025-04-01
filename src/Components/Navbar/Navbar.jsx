import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust this for better detection
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className='fixed top-0 left-0 w-full z-50 flex flex-wrap justify-between md:items-center text-white px-10 py-4 md:px-20 bg-[#171d32] backdrop-blur-md'>
      <span className='text-xl font-bold tracking-wide'>My Portfolio</span>
      <ul className={`${menu ? "block" : "hidden"} mx-24 py-2 mt-4 font-semibold md:mt-0 bg-[#171d32] px-2 rounded-xl backdrop-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
        {['Home', 'Education', 'Skills', 'Experience', 'Projects', 'Contact'].map((section) => (
          <a key={section} href={`#${section}`} className="relative">
            <li className={`text-md transition-all duration-300 p-1 md:p-0 ${
              activeSection === section ? ' border-b-2 border-white-400' : ''
            }`}>
              {section}
            </li>
          </a>
        ))}
      </ul>
     
      {showMenu ? (
        <RiMenu2Line size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300' 
          onClick={() => { openMenu(!menu); setShowMenu(!menu); }} 
        />
      ) : (
        <RiCloseLine size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300' 
          onClick={() => { openMenu(!menu); setShowMenu(!menu); }} 
        />
      )}
    </nav>
  );
}

export default Navbar;
