"use client";

import Link from "next/link";
import SocialClass from "./SocialClass";
import { MdPhone, MdEmail } from "react-icons/md";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner, FaCheckCircle } from "react-icons/fa";

type NewsletterFormData = {
  email: string;
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const phoneNumber = "+23407032127871"; // Format without special characters for tel: link

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>();

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Newsletter submission:", data);
      setIsSuccess(true);
      reset();
      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCallClick = () => {
    // This will trigger the native phone call functionality on mobile devices
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <footer className="bg-gray-800 text-gray-300 py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Contact Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-white font-bold text-lg underline">Contact</h2>
            <div className="flex flex-col gap-3">
              <div>
                <h3 className="text-white">Address</h3>
                <p className="text-gray-400 italic">
                  Assemblies of God, Church 1, Barakarawa, Wiiyakara Town,
                  Khalga
                </p>
              </div>
              <div>
                <h3 className="text-white">Email</h3>
                <p className="text-gray-400 italic">evangelacademy@gmail.com</p>
              </div>
              <div>
                <h3 className="text-white">Phone</h3>
                <p className="text-gray-400 italic">+234 (070) 3212-7871</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h2 className="text-white font-bold text-lg underline">
              Quick Links
            </h2>
            <div className="flex flex-col gap-2">
              <Link
                href="/about"
                className="hover:text-yellow-400 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="hover:text-yellow-400 transition-colors"
              >
                Facilities
              </Link>
              <Link
                href="/contact"
                className="hover:text-yellow-400 transition-colors"
              >
                News
              </Link>
              <Link
                href="/contact"
                className="hover:text-yellow-400 transition-colors"
              >
                History
              </Link>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col gap-3 md:col-span-2">
            <h2 className="text-white font-bold text-lg underline">
              Stay Updated
            </h2>
            <p className="text-gray-400">
              Subscribe to our newsletter for school news, events, and
              announcements.
            </p>

            {isSuccess ? (
              <div className="p-3 bg-green-900/30 text-green-400 rounded-md flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                Thank you for subscribing!
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col sm:flex-row gap-2"
              >
                <div className="flex-grow relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MdEmail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full pl-10 pr-4 py-2 bg-gray-700 border rounded-md focus:outline-none focus:ring-1 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-600 focus:ring-yellow-400"
                    }`}
                    placeholder="Your email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors flex items-center justify-center ${
                    isSubmitting ? "opacity-75" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </form>
            )}

            <p className="text-xs text-gray-500 mt-1">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={handleCallClick}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
              aria-label="Call our receptionist"
            >
              Talk to our Receptionist
              <span className="ml-2">
                <MdPhone size={18} />
              </span>
            </button>
            <SocialClass />
          </div>

          <div className="text-center md:text-left">
            <div className="text-sm font-semibold">
              Copyright &copy; <span className="text-white">{currentYear}</span>
              . All rights reserved
            </div>
            <nav className="flex justify-center md:justify-start space-x-4 mt-2">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-yellow-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <h3 className="text-xs italic text-gray-400">
            Design by{" "}
            <Link
              href="https://linkedin.com/in/dnjosh10"
              className="text-gray-300 hover:underline hover:text-yellow-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              DN Josh
            </Link>
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
