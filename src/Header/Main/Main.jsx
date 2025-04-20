import React, { Component } from 'react'

export default class Main extends Component {
  constructor (props) {
    super(props)

    this.state = [
      {id: 1 , title: "Trendy House Plant" , sunTitle: "Calathea plant", img: 'image/main-header/img1.png'},
      {id: 2 , title: "Trendy House Plant" , sunTitle: "Cactus plant", img: 'image/main-header/img2.png'},
      {id: 3 , title: "Trendy House Plant" , sunTitle: "Bamboo plant", img: 'image/main-header/img3.png'},
      {id: 4 , title: "Trendy House Plant" , sunTitle: "Orchid plant", img: 'image/main-header/img4.png'},
      {id: 5 , title: "Trendy House Plant" , sunTitle: "Snake plant", img: 'image/main-header/img5.png'},
      {id: 6 , title: "Trendy House Plant" , sunTitle: "Ablia plant", img: 'image/main-header/img6.png'},
    ]


  }

  clickHandler () {
    console.log(this);
    
  }

  render() {
    return (
          <section className='container pt-14 mx-auto hidden md:flex items-center justify-between'>

            {/* Buy now */}
            <div className="relative flex flex-col items-center justify-end w-[300px] h-[356px] mt-12 rounded-[40px] bg-white/10 border-l border-r border-white backdrop-blur-md p-6 shadow-lg">

              {/* img plants */}
              <img src="image/main-header/img1.png" alt="Calathea plant" className="absolute -top-20" />

              {/* info plants */}
              <div className=' absolute text-white text-center h-full top-40'>
                <span className='text-base opacity-70 mb-1'>Trendy House Plant</span>
                
                {/*  name plants */}
                <h3 className='flex items-center text-xl gap-1'>
                  Calathea plant
                </h3>

                {/*  btn buy */}
                <button className='border border-white text-white px-6 py-2 rounded-2xl mt-3.5 hover:bg-white hover:text-green-800 transition'>
                  Buy Now
                </button>
              </div>

              {/* arrow-left */}
              <button onClick={this.clickHandler.bind(this)} className='mb-4 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/*  slider */}
              <div className="absolute bottom-4 flex gap-1.5">
                <span className="w-1.5 h-1.5 bg-white rounded-full opacity-80"></span>
                <span className="w-1.5 h-1.5 bg-white rounded-full opacity-30"></span>
                <span className="w-1.5 h-1.5 bg-white rounded-full opacity-30"></span>
              </div>
            </div>

    </section>

    )
  }
}

      // <section className='container pt-14 mx-auto hidden md:flex items-center justify-between'>

      //   {/* Buy now */}
      //   <div class="relative flex items-center justify-center w-[300px] h-[356px] mt-12 rounded-4xl bg-white/10 border-l border-r border-white backdrop-blur-md p-6 shadow-lg">
      //     <img src="image/main-header/img1.png" alt="" className="absolute -top-20" />
      //     <div className='text-white text-2xl mt-10'>
      //       <span className='text-base'>Trendy House Plant</span>
      //       <h3 className='flex items-center justify-between'>
      //         Calathea plant
      //         <button>
      //           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6">
      //             <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
      //           </svg>
      //         </button>
      //       </h3>
      //       <button className='border px-10 py-3.5 rounded-2xl mt-3.5 '>Buy Now</button>
      //     </div>
      //   </div>
        
      // </section>