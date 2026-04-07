import React from 'react'
import imageOne from '../assets/imageOne.jpeg'
import imageTwo from '../assets/imageTwo.png'
import imageThree from '../assets/imageThree.png'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from 'react'



function Carosel() {
   const [index, setIndex] = useState(0);

  const images = [imageOne, imageTwo, imageThree,imageOne, imageTwo, imageThree,imageOne, imageTwo, imageThree,imageOne, imageTwo, imageThree,imageOne, imageTwo, imageThree,imageOne, imageTwo, imageThree,imageOne, imageTwo, imageThree,imageOne, imageTwo, imageThree];


    const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="-mt-20 relative w-1/3 shrink-0 p-2 overflow-visible h-screen">
      
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
      style={{ transform: `translateX(-${index * 90}%)` }}
      >
       {images.map((img, i) => (
    <div key={i} className="w-full flex justify-center shrink-0">
    <img src={img} className="w-100  h-70 object-cover" />
  </div>
))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center mt-8 gap-4">
    <button
      onClick={prevSlide}
      className="bg-gray-300 px-4 py-2 rounded-full flex  items-center justify-center"
    >
      <FaArrowLeft />
    </button>

    <button
      onClick={nextSlide}
      className="bg-gray-300 px-4 py-2 rounded-full flex  items-center justify-center"
    >
      <FaArrowRight />
    </button>
  </div>
    </div>
  )
}

export default Carosel