import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Phone } from "lucide-react";
import { MarqueeHeadline } from "./Marquees";
import logo2 from '../assets/Images/logo2.png'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-gradient-to-r from-black via-[#0f172a] to-black w-full fixed top-0 right-0 left-0 mx-auto z-10 h-[100px] md:h-[120px] shadow-md">
      <MarqueeHeadline />
      <nav className="flex justify-between items-center mx-4 mt-[-20px]">
        {/* Logo */}
<div className="flex items-center ml-[-28px]">
  <NavLink to="/">
    <img 
      src={logo2} 
      alt="Logo" 
      className="w-[100px] sm:w-[130px] h-auto object-contain" 
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
        <div className="md:space-x-6 lg:text-[20px] font-bold hidden md:block">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#FFD700]"
                : "text-white hover:text-[#FFD700] transition-colors duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/News"
            className={({ isActive }) =>
              isActive
                ? "text-[#FFD700]"
                : "text-white hover:text-[#FFD700] transition-colors duration-300"
            }
          >
            News & Insight
          </NavLink>
          <NavLink
            to="/Learn"
            className={({ isActive }) =>
              isActive
                ? "text-[#FFD700]"
                : "text-white hover:text-[#FFD700] transition-colors duration-300"
            }
          >
            Learn
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive
                ? "text-[#FFD700]"
                : "text-white hover:text-[#FFD700] transition-colors duration-300"
            }
          >
            About Us
          </NavLink>
        </div>

        {/* Call Info */}
        <div className="text-white space-x-4 lg:text-[20px] text-[17px] hidden sm:block font-bold">
          <p className="flex items-center text-[#FFD700]">
            <Phone className="mr-1" /> - 115656984847
          </p>
        </div>
      </nav>

      {/* Mobile Menu */}
<div
  className={`sm:hidden absolute top-[100px] left-0 w-full transition-all duration-500 ease-in-out ${
    isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
  } overflow-hidden bg-gradient-to-r from-black via-[#0f172a] to-black z-20`}
>
  <div className="text-white ml-5 flex flex-col items-start justify-start space-y-2 py-2 lg:text-[18px]">
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? "text-[#FFD700]"
          : "text-white hover:text-[#FFD700] transition-colors duration-300"
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/News"
      className={({ isActive }) =>
        isActive
          ? "text-[#FFD700]"
          : "text-white hover:text-[#FFD700] transition-colors duration-300"
      }
    >
      News & Insight
    </NavLink>
    <NavLink
      to="/Learn"
      className={({ isActive }) =>
        isActive
          ? "text-[#FFD700]"
          : "text-white hover:text-[#FFD700] transition-colors duration-300"
      }
    >
      Learn
    </NavLink>
    <NavLink
      to="/About"
      className={({ isActive }) =>
        isActive
          ? "text-[#FFD700]"
          : "text-white hover:text-[#FFD700] transition-colors duration-300"
      }
    >
      About Us
    </NavLink>
  </div>
</div>

   
    </header>
  );
};
