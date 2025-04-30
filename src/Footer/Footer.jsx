import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer className="bg-[#1c2419] text-white px-4 py-10 pb-24">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Logo and Description */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left mb-5">
                <div className="flex items-center gap-x-4 mb-4">
                    <img src="/Breath-Natural/svg/navbar/plant.svg" alt="Logo" className="w-12 h-12" />
                    <h2 className="text-2xl font-bold">Planto.</h2>
                </div>
                <p className="text-gray-300 text-sm mb-6 max-w-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex space-x-4 font-bold text-xl">
                    <a href="#" className="hover:underline">FB</a>
                    <a href="#" className="hover:underline">TW</a>
                    <a href="#" className="hover:underline">LI</a>
                </div>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-lg font-semibold mb-4">Quick Link's</h3>
                <ul className="space-y-3 text-gray-300 text-sm font-bold">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">Type's Of plant's</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                    <li><a href="#" className="hover:underline">Privacy</a></li>
                </ul>
                </div>

                {/* Subscribe */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-lg font-semibold mb-4">For Every Update.</h3>
                <form className="flex flex-col sm:flex-row items-center w-full max-w-xs border-2 border-white rounded-md p-1">
                    <input
                    type="email"
                    placeholder="Enter Email"
                    className="text-white bg-transparent w-full px-4 py-2 focus:outline-none"
                    />
                    <button
                    type="submit"
                    className="bg-white text-black font-bold w-full sm:w-auto py-2 px-4 rounded-md mt-2 sm:mt-0 sm:ml-2"
                    >
                    SUBSCRIBE
                    </button>
                </form>
                </div>

            </div>

            {/* Bottom Text */}
            <div className="mt-10 text-center text-gray-400 text-xs">
                planto © all right reserve
            </div>
        </footer>

    )
  }
}
