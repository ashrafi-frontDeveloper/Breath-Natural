import React, { Component } from 'react'

export default class BestO2 extends Component {
  render() {
    return (
      <section className=' container mx-auto pb-24'>
          {/* sub title */}
          <div data-aos="fade-up" className="text-center">
            <h3 className="inline px-7 py-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center border-x-2 rounded-2xl">Our Top Selling</h3>
          </div>

          {/* Best product O2 */}
          <div data-aos="dafe-up" className="flex flex-col md:flex-row items-center md:justify-between w-[90%] max-w-[380px] md:max-w-3xl lg:max-w-5xl xl:max-w-7xl h-auto md:h-[400px] lg:h-[556px] backdrop-blur-md bg-white/5 mx-auto mt-30 md:mt-30 rounded-[40px] md:rounded-[120px] p-4 md:p-8">
            {/* image */}
            <img src="/public/BestO2/1.png" alt="" className=" relative h-96 lg:h-[550px] xl:h-[750px] -top-20 md:top-0 lg:-top-28 w-2xl" />

            {/* info */}
            <div className="text-white relative -top-10">
              {/* title */}
              <h4 className="text-2xl lg:text-3xl mb-8">We Have Small And Best O2 Plants Collection’s</h4>
              {/* info text */}
              <p className=" line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              {/* btn form */}
              <form action="" className="flex items-center justify-between mt-10">
                <button className='py-1 px-6 rounded-md border cursor-pointer hover:bg-white font-bold hover:text-emerald-500 transition-all '>Explore</button>
                {/* next & previos product */}
                <div className='flex items-center gap-x-4'>
                  <a href="#" className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>

                  </a>
                  <span>01/04</span>
                  <a href="#" className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </a>
                </div>
              </form>
            </div>
          </div>
      </section>
    )
  }
}
