import React from "react";
import cbg from "../assets/Images/cbg.jpg";
import { Parallax } from "react-parallax";

const ContactUs = () => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={cbg}
      bgImageAlt="contact us background"
      strength={300}
      className="min-h-screen"
    >
      {/* Overlay to make form pop */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-black/50 py-8">
        <h1 className="text-center text-4xl sm:text-5xl font-bold mb-10 text-yellow-400">
          Contact Us
        </h1>

        <div className="w-full max-w-lg">
          <form className="bg-gray-200/95 text-gray-900 p-6 sm:p-8 rounded-2xl shadow-2xl w-full space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-white w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-white w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="tel" className="block mb-1 font-medium">
                Your Number
              </label>
              <input
                type="tel"
                id="tel"
                name="tel"
                className="bg-white w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="bg-white w-full border p-3 rounded-lg h-32 sm:h-40 outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white py-3 rounded-lg font-semibold transition hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Parallax>
  );
};

export default ContactUs;
