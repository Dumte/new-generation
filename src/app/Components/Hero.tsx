import Link from 'next/link';
import React from 'react'

const Hero = () => {
    const smoothScroll = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="md:text-4xl text-2xl text-center font-bold ">
        Welcome to <span className='text-purple-500'> New Generation Academy</span>
      </h1>
      <p className="text-gray-500 italic text-center">
        Empower your children of all ages to achieve excellence in academics,
        sports, and life with us.
      </p>
      <h3 className="md:text-2xl text-xl text-center font-semibold ">
        School Homepage is comming soon. Meanwhile, you can take a walk around
        the
      </h3>
      <Link
        href="/admin"
        className="bg-newGenerationPurple text-black py-2 px-4 font-semibold hover:bg-slate-500 hover:text-white rounded-md mt-4"
      >
        School Dashboard
      </Link>
    </section>
  );
}

export default Hero