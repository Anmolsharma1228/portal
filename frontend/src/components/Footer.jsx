import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import logo2 from '../assets/Images/logo2.png'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
          {/* Logo & About */}
          <div>
          
            <img src={logo2} className="ml-[-28px] md:ml-[-30px] w-[100px] sm:w-[130px] h-auto object-contain" />
            <p className="text-md text-gray-400 leading-relaxed">
              <span className="text-red-500">Investments in the stock market</span>, are subject to market risks. Please invest carefully after proper research and understanding.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/News" className="hover:text-yellow-400">
                  News & Insights
                </Link>
              </li>
              <li>
                <Link to="/Learn" className="hover:text-yellow-400">
                  Learn
                </Link>
              </li>
              <li>
                <Link to="/AboutUs" className="hover:text-yellow-400">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Market Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Market Resources
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="" className="hover:text-green-400">
                  Market News
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-green-400">
                  Stock Analysis
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-green-400">
                  Investment Tips
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-green-400">
                  Glossary
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-yellow-400" />
                behindtheprofit991@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-400" />
                +91-8126816165
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                New Delhi, India
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-5 h-5 text-pink-500" />
                @Behind_The_Profit
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-xs sm:text-sm">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-yellow-400 font-semibold">
              BehindTheProfit
            </span>
            . All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0 text-lg">
            <Link to="" className="hover:text-blue-500">
              <FaFacebookF />
            </Link>
            <Link to="" className="hover:text-sky-400">
              <FaTwitter />
            </Link>
            <Link to="" className="hover:text-blue-400">
              <FaLinkedinIn />
            </Link>
            <Link to="" className="hover:text-pink-500">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
