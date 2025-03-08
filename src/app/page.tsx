import Link from "next/link";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen bg-newGenerationSky">
      <h1 className="md:text-4xl text-2xl text-center font-bold ">New Generation Group of Schools Homepage</h1>
      <p className="text-gray-500 italic">Page Contents Coming Soon...</p>
      <Link href="/admin" className="bg-slate-900 text-white py-2 px-4 hover:bg-slate-500 rounded-md">Checkout the admin dashboard</Link>
    </div>
  );
}

export default Homepage