import React, { useState } from 'react';

function Menu() {
    return (
      <ul className="flex items-center md:gap-x-7 lg:gap-x-10 text-white md:text-[18px] lg:text-2xl">
        {/* Plants Types dropdown */}
        <li className="relative group">
        <a href="#" className='flex items-center gap-1 hover:text-green-500 transition duration-300'>
          <span>Plants Types</span>
          <svg  width="12" height="6" viewBox="0 0 12 6" fill="none">
              <path d="M6 6L0.803848 0.75L11.1962 0.749999L6 6Z" fill="white" />
          </svg>
        </a>

        {/* Dropdown */}
        <ul className="absolute top-full left-0 mt-0.5 hidden group-hover:flex flex-col bg-green-800 text-white rounded-xl shadow-2xl w-48 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <li>
            <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-green-700 transition rounded-t-xl">
            <span>🌵</span> <span>Cactus</span>
            </a>
        </li>
        <li>
            <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-green-700 transition">
            <span>🍄</span> <span>Mushroom</span>
            </a>
        </li>
        <li>
            <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-green-700 transition rounded-b-xl">
            <span>🌴</span> <span>Tropical</span>
            </a>
        </li>
        </ul>
        </li>
        {["About", "Contact", "Home"].map((item, index) => (
          <li key={index}>
            <a href="#" className='hover:text-green-500 transition duration-300'>
              <span>{item}</span>
            </a>
          </li>
        ))}
      </ul>
    )
  }
  

function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      <div className={`fixed inset-0 bg-emerald-950 bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 z-40 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}onClick={onClose}/>
        <div className={`fixed top-0 right-0 h-full w-64 bg-white/30 backdrop-blur-md shadow-lg rounded-xl p-6 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className="mb-4 text-white" onClick={onClose}>
            <svg  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
        <ul className="space-y-4 text-lg">
          <li>
            <a href="#" className='flex items-center gap-x-2 text-white font-bold'>
                Home 
                <svg  viewBox="0 0 16 16" fill="#fff" className="size-4">
    <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
                </svg>
            </a>
          </li>
          <li className="relative group">
            <a href="#" className='flex items-center gap-1 text-white font-bold hover:text-green-500 transition duration-300 relative'>
                <span>Plants Types</span>
                <span className="transform group-hover:rotate-180 transition duration-300">
                <svg  width="12" height="6" viewBox="0 0 12 6" fill="none">
                    <path d="M6 6L0.803848 0.75L11.1962 0.749999L6 6Z" fill="white"/>
                </svg>
                </span>
            </a>

            {/* Dropdown */}
            <ul className="absolute top-full left-0 mt-0.5 hidden group-hover:flex flex-col bg-green-800 text-white rounded-xl shadow-2xl w-48 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <li>
                    <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-green-700 transition rounded-t-xl">
                        <span>🌵</span> <span>Cactus</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-green-700 transition">
                        <span>🍄</span> <span>Mushroom</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-green-700 transition rounded-b-xl">
                        <span>🌴</span> <span>Tropical</span>
                    </a>
                </li>
            </ul>
          </li>
          <li>
            <a href="#" className='flex items-center gap-x-2 text-white font-bold'>
                Contact
                <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
    <path d="M1 8.74c0 .983.713 1.825 1.69 1.943.904.108 1.817.19 2.737.243.363.02.688.231.85.556l1.052 2.103a.75.75 0 0 0 1.342 0l1.052-2.103c.162-.325.487-.535.85-.556.92-.053 1.833-.134 2.738-.243.976-.118 1.689-.96 1.689-1.942V4.259c0-.982-.713-1.824-1.69-1.942a44.45 44.45 0 0 0-10.62 0C1.712 2.435 1 3.277 1 4.26v4.482Z" />
                </svg>
            </a>
          </li>
          <li>
            <a href="#" className='flex items-center gap-x-2 text-white font-bold'>
            About
            <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
  <path fillRule="evenodd" d="m3.855 7.286 1.067-.534a1 1 0 0 0 .542-1.046l-.44-2.858A1 1 0 0 0 4.036 2H3a1 1 0 0 0-1 1v2c0 .709.082 1.4.238 2.062a9.012 9.012 0 0 0 6.7 6.7A9.024 9.024 0 0 0 11 14h2a1 1 0 0 0 1-1v-1.036a1 1 0 0 0-.848-.988l-2.858-.44a1 1 0 0 0-1.046.542l-.534 1.067a7.52 7.52 0 0 1-4.86-4.859Z" clipRule="evenodd" />
            </svg>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Desktop Navbar */}
      <nav data-aos="fade-down" className=' container mx-auto relative z-[999] pt-14 hidden md:flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center text-white gap-x-1.5 lg:gap-x-3.5 text-[18px] lg:text-2xl'>
          <img className='lg:w-12 w-7 lg:h-12 h-7' src="/Breath-Natural/svg/navbar/plant.svg" alt="logo" />
          <span className='font-bold font-inter text-base'>Planto.</span>
        </div>

        <Menu />

        {/* Icons */}
        <div className='flex gap-x-7 lg:gap-x-10'>
          {/* search */}
            <form action="" className='flex gap-x-2'>
                <input type="text" placeholder="Typing ..." className="hidden lg:block text-white px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"/>
                <a href="#" className='hover:scale-110 transition duration-300'>
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </a>
            </form>
            {/* basket */}
            <a href="#" className='hover:scale-110 transition duration-300'>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </a>
            {/* login / sign up */}
            <a href="#" className='hover:scale-105 transition duration-300 flex items-center gap-1 text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <span className='hidden xl:block'>Login / Sign up</span>
            </a>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className='container mx-auto pt-14 flex items-center justify-between md:hidden'>
        <div className='flex items-center text-white gap-x-1.5 text-[18px] lg:text-2xl'>
          <img className='lg:w-12 w-7 lg:h-12 h-7' src="/Breath-Natural/svg/navbar/plant.svg" alt="logo" />
          <span className='font-bold font-inter text-base'>Planto.</span>
        </div>

        <div className='flex gap-x-5'>
          {/* Search Icon */}
          <form action="" className='flex gap-x-2'>
              <input type="text" placeholder="Typing ..." className="hidden sm:block text-white px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"/>
              <a href="#" className='hover:scale-110 transition duration-300'>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
              </a>
          </form>
          {/* Basket Icon */}
          <a href="#" className='hover:scale-110 transition duration-300'>
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
          </a>
          {/* login / sign up */}
          <a href="#" className='hover:scale-105 transition duration-300 flex items-center gap-1 text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          <span className='hidden xl:block'>Login / Sign up</span>
          </a>
          {/* Humberger menu */}
          <button onClick={() => setMenuOpen(true)} href="#" className='hover:scale-110 transition duration-300'>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
