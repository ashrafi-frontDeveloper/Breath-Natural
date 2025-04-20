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
          <section className='container pt-14 mx-auto hidden md:flex items-center justify-between'>

            {/* Buy now */}
            <div className="relative flex flex-col items-center justify-end w-[300px] h-[356px] mt-12 rounded-[40px] bg-white/10 border-l border-r border-white backdrop-blur-md p-6 shadow-lg">

              {/* img plants */}
              <img src={currentPlant.img} alt="Calathea plant" className="absolute -top-20" />

              {/* info plants */}
              <div className=' absolute text-white text-center h-full top-40'>
                <span className='text-base opacity-70 mb-1'>{currentPlant.title}</span>
                
                {/*  name plants */}
                <h3 className='flex items-center text-center text-xl gap-1'>
                  {currentPlant.sunTitle}
                </h3>

                {/*  btn buy */}
                <button className='border border-white text-white px-6 py-2 rounded-2xl mt-3.5 hover:bg-white hover:text-green-800 transition'>
                  Buy Now
                </button>
              </div>


              {/* arrow-left */}
              <button onClick={this.clickHandler} className=' absolute mb-4'>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="size-6">
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
