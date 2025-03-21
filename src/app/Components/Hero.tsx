"use client"; 

// import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const images = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  // Go to next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Hero Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 text-center text-white">
        <h1 className="text-5xl font-bold">Welcome to <span className="text-blue-500">New Generation Group of Schools</span></h1>
        <p className="mt-4 text-xl">
          Empowering students to achieve excellence in academics, sports, and
          life.
        </p>
        <button
          onClick={() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Learn More
        </button>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevImage}
        className="absolute left-4 z-30 p-3 bg-black bg-opacity-20 text-white rounded-full hover:bg-opacity-70 transition-all"
        aria-label="Previous Slide"
      >
        &lt; {/* Left arrow */}
      </button>

      {/* Next Button */}
      <button
        onClick={nextImage}
        className="absolute right-4 z-30 p-3 bg-black bg-opacity-20 text-white rounded-full hover:bg-opacity-70 transition-all"
        aria-label="Next Slide"
      >
        &gt; {/* Right arrow */}
      </button>
    </section>
  );
};

export default Hero;
