import React from 'react'
import video from '../assets/video.mp4'
import imageOne from '../assets/imageOne.jpeg'
import imageTwo from '../assets/imageTwo.png'
import Carosel from '../component/Carosel'
import About from '../component/About'

function Home() {
 
  return (
   <div>
   <div className='w-400 h-200  absolute top-18 left-0'>
  <video
    className='w-full h-full object-cover'
    src={video}
    autoPlay
    loop
    muted
  ></video>

 <div class="flex flex-row top-2 left-0 absolute">
  <div>
    <h1 className='text-4xl font-bold text-white absolute top-20 left-10'>Designing a better world</h1>
    <p className='text-lg text-white absolute top-32 left-10'>We are a global design firm that delivers innovative and sustainable solutions for our clients.</p>
  </div>
  <div>
    <button className='bg-red-500 text-white px-4 py-2 rounded absolute top-44 left-10'>Learn More</button>
  </div>
 

 
</div>
 
<div className="flex items-center gap-12 h-screen">
  
  {/* Image */}
  <div className=" mx-8 w-1/2">
    <img 
      src={imageOne}
      alt="imageOne" 
      className="w-full h-80 object-cover rounded-lg"
    />
  </div>

  {/* Text */}
  <div className="w-1/2">
  <p className="mt-4 text-gray-600">
      DESIGN FORECAST 2026
    </p>
    <h2 className="text-2xl text-red-500 font-bold">6 Trends Shaping Design in 2026</h2>
    <p className=" text-gray-600 w-125  ">
  Discover the latest design trends that are shaping the industry in 2026. 
  From sustainable design to immersive experiences, these trends are transforming the way we create and interact with design.
  Stay ahead of the curve and explore how these trends are influencing the future of design.
</p>
  </div>

</div>
{/* second image flex */}
<div className="flex flex-row-reverse h-screen">
  
  {/* Image */}
  <div className=" mr-80">
    <img 
      src={imageTwo}
      alt="imageTwo" 
      className="max-w-2xl"
    />
  </div>

  {/* Text */}
  <div className=" m-0">
  <p className="mt-4 text-gray-600">
     BLOG
    </p>
    <h2 className="text-3xl text-red-500 font-bold">A New Value for the Workspace in an Era of AI</h2>
    <p className=" text-gray-600 w-125   ">
  Discover the latest design trends that are shaping the industry in 2026. 
  From sustainable design to immersive experiences, these trends are transforming the way we create and interact with design.
  
</p>

  </div>
   
</div>

 <Carosel /> 
<About />
</div>

</div>




    
  )
}


export default Home