import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Phone } from "lucide-react";
import { MarqueeHeadline } from "./Marquees";
import logo3 from "../assets/Images/logo3.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Menu items array for DRY code
  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/News", label: "News & Insight" },
    { to: "/Learn", label: "Learn" },
    { to: "/About", label: "About Us" },
    { to: "/Policy", label: "Policy" },
    { to: "/Disclaimer", label: "Disclaimer" },
  ];

  return (
    <header className="bg-[#F2F2F2] w-full fixed top-0 right-0 left-0 mx-auto z-10 h-20">
      {/* <MarqueeHeadline /> */}

      <nav className="flex justify-between items-center mx-4 -mt-5">
        {/* Logo */}
        <div className="flex items-center -ml-7">
          <NavLink to="/">
            <img
              src={logo3}
              alt="Logo"
              className="w-25 sm:w-32.5 h-auto object-contain"
            />
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <div className="text-white sm:hidden text-[20px]">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ImCross /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="rounded-full bg-[#0F172A] px-4 py-3 md:space-x-6 lg:text-[16px] font-semibold hidden md:block">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-[#16A085]"
                  : "text-[#CBD5E1] hover:text-[#16A085] transition-colors duration-300"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Call Info */}
        <div className="text-white space-x-4 lg:text-[16px] text-[17px] hidden sm:block font-semibold">
          <p className="flex items-center text-[#16A085]">
            <Phone className="mr-1" />  +918126816165
          </p>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden absolute top-25 left-0 w-full bg-linear-to-r from-black via-[#0f172a] to-black z-20 transition-all duration-500 ease-in-out">
          <div className="text-white ml-5 flex flex-col items-start justify-start space-y-2 py-2 lg:text-[18px]">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFD700]"
                    : "text-white hover:text-[#FFD700] transition-colors duration-300"
                }
                onClick={() => setIsOpen(false)} // ✅ closes menu on click
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
