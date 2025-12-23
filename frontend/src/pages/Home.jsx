import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import stock from "../assets/Images/stock2.avif";
import WhyUs from "../components/WhyUs";
import Service from "../components/Service";
import { Marquees } from "../components/Marquees";
import ContactUs from "../components/ContactUs";
import ResearchPara from "../components/ResearchPara";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col mt-22">
      {/* Main Content */}
      <main className="grow w-full mx-auto">
        <section className="space-y-10">
          {/* Intro Section */}
          <div className="px-2 sm:px-10 grid items-center md:grid-cols-2 gap-8 bg-black">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 mx-2"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-yellow-400">
                Decode the Market with Behind The Profit
              </h2>
              <p className="mt-4 text-gray-400 text-[16px] leading-relaxed">
                Welcome to{" "}
                <span className="text-white font-semibold">
                  Behind The Profit
                </span>
                , your trusted partner in navigating the financial markets.
                Whether you’re a beginner or a seasoned investor, we provide
                <span className="text-green-500">
                  {" "}
                  research-backed strategies
                </span>
                , market insights, and personalized guidance to help you achieve
                <span className="text-green-400"> consistent returns</span>.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={stock}
                alt="Stock market dashboard"
                className="rounded-lg shadow-lg h-112.5 w-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Marquee Section */}
        <section className="bg-gray-900 py-6">
          <Marquees />
        </section>

        {/* Service Section */}
        <section id="Services">
          <Service />
        </section>
        {/* Research Parameters Section */}
        <section className="bg-gray-800 py-10">
          <div className="py-5 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-20">
            {/* Title */}
            <h1 className="text-center text-[23px] sm:text-[35px] font-bold text-yellow-500 mb-6">
              Research Parameters
            </h1>

            {/* Paragraph */}
            <p className="max-w-3xl text-base sm:text-lg text-gray-100 leading-relaxed text-justify">
              At{" "}
              <span className="font-semibold text-yellow-400">
                Behind The Profit
              </span>
              , we understand that successful investing is not built on
              assumptions, but on structured research, disciplined analysis, and
              informed decision-making. Every recommendation we provide is the
              outcome of a multi-layered research process, designed to minimize
              risks and maximize opportunities for our clients.
              <br />
              <br />
              Our philosophy is simple: accurate research leads to confident
              investing. By combining fundamental insights, technical expertise,
              risk control, and market intelligence, we ensure that each
              strategy is not only data-driven but also practical for real
              market conditions.{" "}
              <Link to="/ResearchPara" className="text-red-500 underline">
                Learn More
              </Link>
            </p>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="bg-neutral-950 py-10">
          <WhyUs />
        </section>
        {/* Contact Us  */}
        <section className="bg-gray-900 py-12">
          <ContactUs />
        </section>
      </main>
    </div>
  );
};

export default Home;
