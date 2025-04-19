import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
        <div>
            {/* navbar */}
            <nav className='container pt-14 mx-auto flex items-center justify-between'>
            {/* logo */}
            <div className='flex items-center text-white gap-x-3.5 text-2xl'>
                <img className='w-12 h-12' src="/public/svg/navbar/plant.svg" alt="" />
                <span className='font-bold font-inter text-base'>Planto.</span>
            </div>

            {/* menu */}
            <ul className="flex items-center md:gap-x-7 lg:gap-x-14 text-white md:text-[18px] lg:text-2xl">
                <li className=""><a href="#" className='hover:text-green-500 transition duration-300 relative '>Home</a></li>
                <li className=""><a href="#" className='flex items-center gap-1 hover:text-green-500 transition duration-300 relative'>
                    <span>Plants Types</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
    <path d="M6 6L0.803848 0.75L11.1962 0.749999L6 6Z" fill="white"/>
                        </svg>
                    </span>
                </a></li>
                <li className=""><a href="#" className='hover:text-green-500 transition duration-300 relative '>More</a></li>
                <li className=""><a href="#" className='hover:text-green-500 transition duration-300 relative '>Contact</a></li>
            </ul>

            {/* sections icon search , basket , bars */}
            <div className='flex gap-x-14'>
                {/* <a href="#" className='hover:scale-110 transition duration-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff" className="size-5">
                        <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm7 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                    </svg>
                </a> */}
                <form action="" className='flex gap-x-2'>
                    <input type="text" placeholder="Typing ..." className="text-white px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"/>
                    <a href="#" className='hover:scale-110 transition duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </a>
                </form>
                <a href="#" className='hover:scale-110 transition duration-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </a>
            </div>


        </nav>
        </div>

    )
  }
}
