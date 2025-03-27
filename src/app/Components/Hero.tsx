"use client";

import { useEffect, useState } from "react";
import { slideshow } from "@/app/data";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Hero = () => {
  const router = useRouter();

  // Function to handle "Go to Dashboard" button click
  const handleClick = () => {
    router.push("/admin");
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically cycle through slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideshow.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideshow]);

  // Go to next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideshow.length);
  };

  // Go to previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? slideshow.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        {slideshow.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Hero Image ${index + 1}`} layout="fill" objectFit="cover"
              className="w-full h-full"
              />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 text-center text-white">
        <h1 className="text-5xl font-bold">Welcome to <span className="text-blue-500">New Generation Academy</span></h1>
        <p className="mt-4 text-xl">
          Empowering students to achieve excellence in academics, sports, and
          life.
        </p>
        <button
          onClick={handleClick}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go to dashboard
        </button>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevImage}
        className="absolute left-4 z-30 p-3 bg-black bg-opacity-20 text-white rounded-full hover:bg-opacity-70 transition-all"
        aria-label="Previous Slide"
      >
        &lt;
      </button>

      {/* Next Button */}
      <button
        onClick={nextImage}
        className="absolute right-4 z-30 p-3 bg-black bg-opacity-20 text-white rounded-full hover:bg-opacity-70 transition-all"
        aria-label="Next Slide"
      >
        &gt;
      </button>
    </section>
  );
};

export default Hero;
