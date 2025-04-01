"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const handleNavigation = (id: string, event: React.MouseEvent) => {
    const element = document.getElementById(id);
    if (element) {
      event.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  // Track active section on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navigationLinks = [
    { id: "about", label: "About", href: "/#about" },
    { id: "admissions", label: "Admissions", href: "/#admissions" },
    { id: "gallery", label: "Gallery", href: "/#gallery" },
    { id: "contact", label: "Contact Us", href: "/#contact" },
  ];

  const dropdownLinks = [
    { id: "daycare", label: "Daycare", href: "/#daycare" },
    { id: "pre-nursery", label: "Pre-Nursery", href: "/#pre-nursery" },
    { id: "nursery", label: "Nursery", href: "/#nursery" },
    { id: "primary", label: "Primary", href: "/#primary" },
    { id: "junior-secondary", label: "Junior Secondary", href: "/#junior-secondary" },
    { id: "senior-secondary", label: "Senior Secondary", href: "/#senior-secondary" },
  ];

  return (
    <header className="fixed top-0 shadow-md z-50 w-full bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center h-[15vh] px-4">
        <Link href="/">
          <div className="flex gap-2 justify-center items-center cursor-pointer">
            <Image
              src="/logo.png"
              alt="school logo"
              width={70}
              height={70}
              priority
            />
            <div className="flex flex-col text-center">
              <h1 className="text-white text-xl md:text-2xl font-semibold">
                Evangel Academy
                <span className="text-newGenerationYellow italic text-xl md:text-3xl">
                  !
                </span>
              </h1>
              <p className="text-sm text-white italic">
                ...the right place for your kid
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4">
          {navigationLinks.map(({ id, label, href }) => (
            <Link
              key={id}
              href={href}
              className={`hover:text-newGenerationYellow font-bold hover:bg-transparent ${
                pathname === href ? "text-newGenerationYellow" : ""
              }`}
              onClick={(event) => handleNavigation(id, event)}
            >
              {label}
            </Link>
          ))}
          {/* Academics Dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="hover:text-newGenerationYellow font-bold">Academics</span>
            {isDropdownOpen && (
              <div className="absolute bg-white text-blue-600 shadow-md mt-2 rounded">
                {dropdownLinks.map(({ id, label, href }) => (
                  <Link
                    key={id}
                    href={href}
                    className="block px-4 py-2 hover:bg-blue-100"
                    onClick={(event) => handleNavigation(id, event)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-slate-600">
          <div className="flex flex-col gap-4 p-4 w-1/2">
            {navigationLinks.map(({ id, label, href }) => (
              <Link
                key={id}
                href={href}
                className={`hover:text-newGenerationYellow font-bold hover:bg-transparent ${
                  pathname === href ? "text-newGenerationYellow" : ""
                }`}
                onClick={(event) => handleNavigation(id, event)}
              >
                {label}
              </Link>
            ))}
            {/* Academics Dropdown for Mobile */}
            <details>
              <summary className="hover:text-newGenerationYellow font-bold">Academics</summary>
              <div className="flex flex-col gap-2 mt-2 pl-4">
                {dropdownLinks.map(({ id, label, href }) => (
                  <Link
                    key={id}
                    href={href}
                    className="hover:text-newGenerationYellow font-bold"
                    onClick={(event) => handleNavigation(id, event)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </details>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
