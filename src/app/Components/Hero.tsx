"use client";

import { useEffect, useState } from "react";
import { slideshow } from "@/app/data";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

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
    <section className="md:h-[1100px] h-screen  flex flex-col items-center justify-center">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
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
                alt={`Hero Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        {/* Text Content */}
        <div className="relative z-20 text-center text-white">
          <h1 className="text-5xl font-bold">
            Welcome to{" "}
            <span className="text-blue-500">
              Evangel Academy
              <span className="text-newGenerationYellow italic">!</span>
            </span>
          </h1>
          <p className="mt-4 text-xl">
            Empowering students to achieve excellence in academics, sports, and
            life.
          </p>
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
      </div>

      <div className="flex flex-col gap-4 items-center mt-4 md:max-w-[50%]">
        <h2 className="text-3xl font-semibold">
          Every child deserves the Best Education
        </h2>
        <p className="px-3 text-md text-gray-700">
          We at Evangel Academy take the priority of every child very
          high by providing World-class education and implementing IT-based
          learning atmosphere conducive for kids at all age.
        </p>
        <div className="flex  gap-2">
          <button
            onClick={handleClick}
            className="flex px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Go to dashboard{" "}
            <span className="ml-2 my-auto">
              <FaArrowRight />
            </span>
          </button>
          <button
            onClick={handleClick}
            className=" px-6 py-3 bg-transparent border border-blue-700 text-blue-700 rounded-lg hover:bg-blue-700 hover:text-white"
          >
            Learn More
          </button>
        </div>
        <div className="flex justify-evenly gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-lg">15+</h3>
            <p className="text-gray-500 text-lg">Teachers</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-lg">600+</h3>
            <p className="text-gray-500 text-lg">Students</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-lg">A+</h3>
            <p className="text-gray-500 text-lg">Accreditation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
