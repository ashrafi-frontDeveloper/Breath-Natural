import React, { Component } from 'react'

export default class Customer extends Component {
  render() {
    return (
      <section className=' container mx-auto pb-40'>
          {/* sub title */}
          <div data-aos="fade-up" className="text-center mt-24">
              <h3 className="inline px-7 py-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center border-x-2 rounded-2xl">Customer Review</h3>
          </div>

          {/* customer cart */}
          <div data-aos="fade-right" className="flex items-center justify-center md:justify-start mt-10 md:mt-0">
            <div className="relative flex md:flex-col items-center w-80 md:w-96 xl:w-[400px] h-56 xl:h-[256px] mb-10 mt-16 xl:mt-12 rounded-[40px] bg-white/5 border-l border-r border-white backdrop-blur-md pt-10 xl:p-6 shadow-lg">
              <div className="absolute top-8 px-6 text-center">
                {/* Profile Info */}
                <div className="flex items-center gap-x-4 mb-4">
                  <img src="image/main-header/profile-header.png" alt="profile" className="w-14 h-14 rounded-full" />
                  <div className="flex flex-col items-start">
                    <span className="text-white font-bold text-lg">venely k</span>
                    {/* Stars */}
                    <div className="flex text-yellow-500 mt-1">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                        </svg>
                      ))}
                      {/* Half star */}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 2.25c-.417 0-.791.25-.948.636l-2.02 4.87-5.184.415c-.46.037-.847.344-.984.785-.137.44.003.923.354 1.22l3.948 3.383-1.206 5.057c-.107.45.065.923.44 1.195.373.273.87.29 1.26.042L12 17.766V2.25z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-white text-[15px] leading-relaxed line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
              </div>
            </div>
          </div>


      </section>
    )
  }
}
