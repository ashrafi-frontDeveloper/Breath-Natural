import React, { Component } from 'react'

export default class Trendy extends Component {
  render() {
    return (
      <section className='container mx-auto grid justify-center'>
            {/* sub title */}
            <div data-aos="fade-up" className="text-center mt-24">
                <h3 className="inline px-7 py-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center border-x-2 rounded-2xl">Our Trendy plants</h3>
            </div>

            {/* product trendy */}
            <div data-aos="fade-up" className="flex flex-col md:flex-row items-center md:justify-between w-[90%] max-w-[380px] md:max-w-3xl lg:max-w-5xl xl:max-w-7xl h-auto md:h-[356px] backdrop-blur-md bg-white/5 mx-auto mt-30 md:mt-30 rounded-[40px] md:rounded-[150px] p-4 md:p-8">
                {/* image */}
                <div className="w-full mb-0 flex justify-center">
                    <img src="/public/image/main-header/img2.png" alt="" className="w-[240px] md:w-auto" />
                </div>

                {/* content */}
                <div className="text-white w-full md:w-96 lg:w-2xl text-center md:text-left">
                    
                    {/* title */}
                    <h5 className="font-bold text-xl md:text-2xl lg:text-3xl mt-2 md:mt-0">For Small Decs Ai Plat</h5>

                    {/* info */}
                    <p className="text-sm md:text-[18px] lg:text-[20px] line-clamp-2 w-full md:w-80 lg:w-[400px] xl:w-[556px] mt-2 lg:mt-6 mx-auto md:mx-0">
                    Lorem ipsum dolor sit incididunt, consectetur incididunt elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>

                    {/* price */}
                    <span className="block text-lg md:text-2xl lg:text-4xl font-bold mt-3">Rs. 599/-</span>

                    {/* buttons */}
                    <form className="flex flex-col sm:flex-row items-center justify-center md:justify-start mt-4 md:mt-6 gap-4 sm:gap-x-6 lg:gap-x-8">
                    <button className="hover:bg-white hover:text-green-500 font-medium md:font-bold transition-all border py-2 px-8 md:py-3 lg:px-12 rounded-xl cursor-pointer w-full sm:w-auto">
                        Explore
                    </button>
                    <button className="hover:bg-white hover:text-green-500 font-bold transition-all border p-2 md:p-3.5 rounded-xl cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                    </form>
                </div>
            </div>


      </section>
    )
  }
}