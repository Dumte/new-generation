"use client";

import { useState } from "react";
import Image from "next/image";
import {gallery} from "@/app/data"

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gallery.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="gallery"
      className="py-20 bg-blue-200 h-[1024px] flex flex-col justify-center items-center w-full mx-auto"
    >
      <div className="relative w-full h-full  overflow-hidden flex items-center justify-center">
        <Image
          
          src={gallery[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
        {/* Overlay */}

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-30 bg-black text-white text-lg font-bold">
          {gallery[currentIndex].text}
        </div>

        {/* Navigation controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Gallery;
