import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import logo3 from "../assets/Images/logo3.png";

export default function Footer() {
  return (
    <footer className="bg-[#F2F2F2] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
          {/* Logo & About */}
          <div>
            <img
              src={logo3}
              className="-ml-7 md:-ml-7.5 w-25 sm:w-32.5 h-auto object-contain"
            />
            <p className="text-md text-gray-400 leading-relaxed">
              <span className="text-[#020617]">
                Investments in the stock market
              </span>
              , are subject to market risks. Please invest carefully after
              proper research and understanding.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#020617] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-[#16A085]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/News" className="hover:text-[#16A085]">
                  News & Insights
                </Link>
              </li>
              <li>
                <Link to="/Learn" className="hover:text-[#16A085]">
                  Learn
                </Link>
              </li>
              <li>
                <Link to="/AboutUs" className="hover:text-[#16A085]">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Market Resources */}
          <div>
            <h3 className="text-lg font-semibold text-[#020617] mb-4">
              Market Resources
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="" className="hover:text-[#16A085]">
                  Market News
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-[#16A085]">
                  Stock Analysis
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-[#16A085]">
                  Investment Tips
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-[#16A085]">
                  Glossary
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-[#020617] mb-4">
              Contact Info
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#020617]" />
                behindtheprofit510@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#020617]" />
                +918126816165
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#020617]" />
                New Delhi, India
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-5 h-5 text-[#020617]" />
                @Behind_The_Profit
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-xs sm:text-sm">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-[#020617] font-semibold">
              BehindTheProfit
            </span>
            . All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0 text-lg">
            <Link
              to="https://www.facebook.com/profile.php?id=61581549496184"
              className="hover:text-blue-500"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://x.com/BProfit62576"
              className="hover:text-sky-400"
            >
              <FaTwitter />
            </Link>
            <Link
              to="https://www.linkedin.com/company/109053417/admin?lipi=urn%3Ali%3Apage%3Aorganization_admin_admin_dashboard_index%3Bfd641925-b643-4e37-98ec-7e1773ca1449"
              className="hover:text-blue-400"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to="https://www.instagram.com/behind_the.profit/"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
