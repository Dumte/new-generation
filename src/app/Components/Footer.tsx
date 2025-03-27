import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
        <div className="text-lg font-semibold">
          <span>&copy; 2025. New Generation Academy <span className="bg-newGenerationYellow">!</span>. All rights reserved.</span>
        </div>

        <nav className="flex space-x-4">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
