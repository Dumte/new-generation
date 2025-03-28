import Link from "next/link";
import SocialClass from "./SocialClass";
import { MdPhone } from "react-icons/md";



const Footer = () => {
  // Function to auto-update the year
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-gray-800 text-gray-300 py-6 ">
      <div className="flex flex-col md:flex-row md:justify-evenly justify-center px-3 gap-4 md:gap-0 items-center">
        {/* Contact Section */}
        <div className="flex flex-col md:justify-start items-center md:items-start gap-3">
          <h2 className="text-white font-bold text-lg underline">Contact</h2>

          <div className="flex flex-col md:items-start items-center">
            <h3 className="text-white">Address</h3>
            <p className="text-gray-500 italic">
              The Ascension Apostolic Church, Zone 3 Hqtr, Wiiyakara Town,
              Khalga
            </p>
          </div>
          <div className="flex flex-col md:items-start items-center">
            <h3 className="text-white">Email</h3>
            <p className="text-gray-500 italic">newgeneration@gmail.com</p>
          </div>
          <div className="flex flex-col md:items-start items-center">
            <h3 className="text-white">Phone</h3>
            <p className="text-gray-500 italic">+23481-123-456-78</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col justify-start gap-3">
          <h2 className="text-white font-bold text-lg underline">
            Quick Links
          </h2>

          <div className="flex flex-col gap-3 md:justify-start md:items-start items-center">
            <Link href="/about" className="hover:text-newGenerationYellow">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-newGenerationYellow">
              Facilities
            </Link>
            <Link href="/contact" className="hover:text-newGenerationYellow">
              News
            </Link>
            <Link href="/contact" className="hover:text-newGenerationYellow">
              History
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center mt-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex">
            Talk to a Receptionist
            <span className="ml-2">
              <MdPhone size={24} />
            </span>
          </button>

          <SocialClass />
        </div>
      </div>

      <hr className="my-6 max-w-[50%] mx-auto md:hidden" />
      <div className="container mx-auto mt-4 flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
        <div className="text-md font-semibold">
          Copyright &copy;<span className="text-white">{currentYear}</span>. All
          rights reserved
        </div>

        <nav className="flex space-x-4">
          <Link href="/privacy" className="hover:text-newGenerationYellow">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
