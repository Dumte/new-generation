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
      {/* <div className="text-center">
        <h1 className="text-5xl font-bold">Welcome to New Generation</h1>
        <p>
          Empowering children of all ages to achieve excellence in academics,
          sports, and life.
        </p>
      </div> */}
      <h1 className="md:text-4xl text-2xl text-center font-bold ">
        Welcome to New Generation
      </h1>
      <h2 className="md:text-2xl text-xl text-center font-semibold ">
        School Homepage
      </h2>
      <p className="text-gray-500 italic">
        Empowering children of all ages to achieve excellence in academics,
        sports, and life.
      </p>
      <Link
        href="/admin"
        className="bg-slate-900 text-white py-2 px-4 hover:bg-slate-500 rounded-md"
      >
        Checkout the admin dashboard
      </Link>
    </section>
  );
}

export default Hero