import React, { useState, useEffect } from 'react'
import video from '../assets/video.mp4'
import imageOne from '../assets/imageOne.jpeg'
import imageTwo from '../assets/imageTwo.png'
import Carosel from '../component/Carosel'
import About from '../component/About'
import Header from '../component/Header'

function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Header />

      {/* Video Section */}
    <div className='relative w-full' style={{ height: 'clamp(250px, 50vw, 600px)' }}>
        <video
          className='absolute inset-0 w-full h-full object-cover'
          src={video}
          autoPlay
          loop
          muted
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text overlay */}
        <div
          className={`absolute inset-0 flex flex-col justify-center px-10 max-w-xl transition-all duration-1000 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
        >
          <h1 className='text-4xl font-bold text-white mb-4'>
            Designing a better world
          </h1>
          <p className='text-lg text-white mb-6'>
            We are a global design firm that delivers innovative and sustainable solutions for our clients.
          </p>
          <div>
            <button className='bg-cyan-500 text-white px-6 py-2 rounded'>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* First Image + Text Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-20">

        <div className="w-full md:w-1/2">
          <img
            src={imageOne}
            alt="imageOne"
            className="w-full h-64 md:h-80 object-cover rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <p className="text-gray-500 text-sm uppercase tracking-widest">
            Design Forecast 2026
          </p>
          <h2 className="text-2xl md:text-3xl text-cyan-500 font-bold leading-snug">
            6 Trends Shaping Design in 2026
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Discover the latest design trends that are shaping the industry in 2026.
            From sustainable design to immersive experiences, these trends are transforming
            the way we create and interact with design.
          </p>
          <div>
            <button className="mt-2 bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Second Image + Text Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 px-6 md:px-16 py-20">

        <div className="w-full md:w-1/2">
          <img
            src={imageTwo}
            alt="imageTwo"
            className="w-full h-64 md:h-80 object-cover rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <p className="text-gray-500 text-sm uppercase tracking-widest">
            Blog
          </p>
          <h2 className="text-2xl md:text-3xl text-cyan-500 font-bold leading-snug">
            A New Value for the Workspace in an Era of AI
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Discover the latest design trends that are shaping the industry in 2026.
            From sustainable design to immersive experiences, these trends are transforming
            the way we create and interact with design.
          </p>
          <div>
            <button className="mt-2 bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600 transition">
              Read More
            </button>
          </div>
        </div>
      </div>

      <Carosel />
      <About />
    </div>
  )
}

export default Home