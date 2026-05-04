import React from 'react'
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import imageOne from '../assets/imageOne.jpeg';
import imageTwo from '../assets/imageTwo.png';
import imageThree from '../assets/imageThree.png'; // adjust if needed

const slides = [
  {
    img: imageOne,
    title: "Designing the Future",
    subtitle: "Innovative spaces for modern living",
  },
  {
    img: imageTwo,
    title: "Sustainable by Design",
    subtitle: "Building with the planet in mind",
  },
  {
    img: imageThree,
    title: "Human-Centered Spaces",
    subtitle: "Where people and design meet",
  },
];

function Carosel() {
  const [index, setIndex] = useState(0);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextSlide = () =>
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-20 w-full">

      {/* Slide */}
      <div className="relative w-full h-125 overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
              <h2 className="text-4xl font-bold text-white mb-3">{slide.title}</h2>
              <p className="text-lg text-white/80 mb-6 max-w-xl">{slide.subtitle}</p>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-2 rounded transition">
                Learn More
              </button>
            </div>
          </div>
        ))}

        {/* Arrow Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full transition z-10"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full transition z-10"
        >
          <FaArrowRight />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-cyan-400" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default Carosel;