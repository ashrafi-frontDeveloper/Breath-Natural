import React, { Component } from 'react'

export default class TopSelling extends Component {
  render() {
    return (
      <section className=' container mx-auto pb-40'>
          {/* sub title */}
          <div data-aos="fade-up" className="text-center mt-24">
              <h3 className="inline px-7 py-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center border-x-2 rounded-2xl">Our Top Selling</h3>
          </div>

          {/* products */}
          <div className="grid grid-cols-3">
              {/* product */}
              <div className="relative flex md:flex-col items-center justify-center md:justify-end px-3.5 mt-30 mx-auto text-white w-60 xl:w-[300px] h-72 xl:h-[356px] rounded-[40px] bg-white/5 border-l border-r border-white backdrop-blur-md shadow-lg">
                {/* image */}
                <img alt="Calathea plant" className="absolute -top-20" src="image/main-header/img1.png" />
                {/* title */}
                <div className="flex flex-col items-center justify-center text-center w-full">
                  <h3 className="text-2xl">Calathea plant</h3>
                  <p className="text-sm mt-2 line-clamp-2">Lorem ipsum dolor lore sit amet, consectetur adipiscing elit</p>      
                </div>
                {/* price, buy */}
                <div className="flex items-center gap-x-10 mt-10 mb-10">
                  <span className='text-3xl'>Rs. 359/-</span>
                  <a href='#' className='hover:bg-white hover:text-emerald-500 transition-all p-2 border rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>
                  </a>
                </div>
              </div>
          </div>
      </section>
    )
  }
}


{/* <div class="absolute text-white text-center h-full top-30 xl:top-40">
<h3 class="flex items-center text-center text-2xl gap-1">Calathea plant</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
<button class="border border-white text-white px-6 py-2 rounded-2xl mt-3.5 hover:bg-white hover:text-green-800 transition">Buy Now</button>
</div> */}