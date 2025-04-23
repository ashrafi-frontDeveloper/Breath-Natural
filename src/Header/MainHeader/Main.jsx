import React, { Component } from 'react'

export default class Main extends Component {
  constructor (props) {
    super(props)

    // this.clickHandler = this.clickHandler.bind(this);

    this.state = {
      currentIndex: 0,
      plants: [
        { id: 1, title: "Trendy House Plant", sunTitle: "Calathea plant", img: "image/main-header/img1.png" },
        { id: 2, title: "Trendy House Plant", sunTitle: "Cactus plant", img: "image/main-header/img2.png" },
        { id: 3, title: "Trendy House Plant", sunTitle: "Bamboo plant", img: "image/main-header/img3.png" },
        { id: 4, title: "Trendy House Plant", sunTitle: "Orchid plant", img: "image/main-header/img4.png" },
        { id: 5, title: "Trendy House Plant", sunTitle: "Snake plant", img: "image/main-header/img5.png" },
        { id: 6, title: "Trendy House Plant", sunTitle: "Ablia plant", img: "image/main-header/img6.png" },
      ]
    }

  }

  clickHandler = () => {
    this.setState(prev => ({
      currentIndex: (prev.currentIndex + 1) % prev.plants.length
    }));
  }

  render() {
    const { plants, currentIndex } = this.state;
    const currentPlant = plants[currentIndex];

    return (
          <section className='container pt-4 lg:pt-7 xl:pt-14 mx-auto flex-row md:flex md:items-center md:justify-between'>
            {/* title web site */}
            <div className='text-white text-center md:text-start'>
                {/* title */}
                <div>
                  {/* title */}
                  <h1 data-aos="fade-down" className="text-5xl lg:text-6xl xl:text-8xl mb-4 font-bold">Breathe Natureal</h1>
                  {/* sub title */}
                  <p data-aos="fade-down" className="md:w-[500px] text-base lg:text-[18px] xl:text-2xl">
                      Lorem  incididunt ut labore et dolore magna aliqua.
                  </p>
                  {/* explore */}
                  <div data-aos="fade-right" className="flex items-center justify-center md:justify-start gap-x-3.5 lg:gap-x-6 xl:gap-x-10 mt-3.5 lg:mt-6 xl:mt-10">
                    <button className='border border-white py-1 lg:py-1.5 xl:py-3 px-4 lg:px-7 xl:px-10 rounded-2xl hover:bg-white hover:text-green-600 transition-all'>Explore</button>
                    <button className='flex items-center gap-x-4'>
                      <a href="#" className='border border-white rounded-full p-1.5 lg:p-2 xl:p-4 hover:bg-white hover:text-green-600 transition-all'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                          <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <span className='text-[18px] xl:text-2xl font-bold md:font-light'>Live Demo...</span>
                    </button>
                  </div>
                </div>

                {/* customer */}
                <div data-aos="fade-right" className="flex items-center justify-center md:justify-start mt-10 md:mt-0">
                  <div className=" relative flex md:flex-col items-center  w-80 md:w-96 xl:w-[400px] h-56 xl:h-[256px] mb-10 mt-16 xl:mt-12 rounded-[40px] bg-white/5 border-l border-r border-white backdrop-blur-md pt-10 xl:p-6 shadow-lg">
                    <div className=" absolute top-10 flex flex-col items-center justify-center text-center space-y-4">
                      {/* Profile Info */}
                      <div className="flex items-center gap-x-3.5">
                        <img src="image/main-header/profile-header.png" alt="" className="w-16 h-16 rounded-full" />
                        <div className="flex flex-col items-start">
                          <span className="text-white font-bold">alena Patel</span>
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
                      <p className="text-white text-base px-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
                      </p>
                    </div>
                  </div>
                </div>

            </div>

            {/* Buy cart */}
            <div data-aos="fade-left" className="flex justify-center md:justify-end mt-10 md:mt-0">
              {/*  Buy cart */}
              <div className="relative flex md:flex-col items-center justify-center md:justify-end w-60 xl:w-[300px] h-72 xl:h-[356px] mt-16 xl:mt-12 rounded-[40px] bg-white/5 border-l border-r border-white backdrop-blur-md pt-10 xl:p-6 shadow-lg">
                
                {/* img plants */}
                <img src={currentPlant.img} alt="Calathea plant" className="absolute -top-20" />

                {/* info plants */}
                <div className='absolute text-white text-center h-full top-30 xl:top-40'>
                  <span className='text-base opacity-70 mb-1'>{currentPlant.title}</span>
                  <h3 className='flex items-center text-center text-xl gap-1'>
                    {currentPlant.sunTitle}
                  </h3>
                  <button className='border border-white text-white px-6 py-2 rounded-2xl mt-3.5 hover:bg-white hover:text-green-800 transition'>
                    Buy Now
                  </button>
                </div>

                {/* arrow-left */}
                <button onClick={this.clickHandler} className='absolute -mb-40 md:mb-8 xl:mb-4'>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>

                {/* slider */}
                <div className="absolute bottom-4 flex gap-1.5">
                  <span className="w-1.5 h-1.5 bg-white rounded-full opacity-80"></span>
                  <span className="w-1.5 h-1.5 bg-white rounded-full opacity-30"></span>
                  <span className="w-1.5 h-1.5 bg-white rounded-full opacity-30"></span>
                </div>
              </div>
            </div>



          </section>

    )
  }
}




















// import React, { Component } from 'react';

// export default class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       plants: [
//         { id: 1, title: "Trendy House Plant", sunTitle: "Calathea plant", img: "image/main-header/img1.png" },
//         // بقیه آیتم‌ها...
//       ]
//     };
//   }

//   clickHandler = () => {
//     console.log("Button clicked!");
//   };

//   render() {
//     return (
//       <div>
//         <h1>Test Component</h1>
//         <button onClick={this.clickHandler}>Click me!</button>
//       </div>
//     );
//   }
// }
