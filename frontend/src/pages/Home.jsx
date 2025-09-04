import React from 'react';
import { motion } from 'framer-motion';
import stock from '../assets/Images/stock2.avif';
import WhyUs from '../components/WhyUs';
import Service from '../components/Service';
import { Marquees } from '../components/Marquees';
import ContactUs from '../components/ContactUs';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col mt-22">
      {/* Main Content */}
      <main className="flex-grow w-full mx-auto">
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
              <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400">
                Decode the Market with Behind The Profit
              </h2>
              <p className="mt-4 text-gray-400 text-lg sm:text-xl leading-relaxed">
                Welcome to <span className="text-white font-semibold">Behind The Profit</span>, 
                your trusted partner in navigating the financial markets. 
                Whether you’re a beginner or a seasoned investor, we provide 
                <span className="text-green-500"> research-backed strategies</span>, 
                market insights, and personalized guidance to help you achieve 
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
                className="rounded-lg shadow-lg h-[450px] w-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Marquee Section */}
        <section className="bg-gray-900 py-6">
          <Marquees />
        </section>

        {/* Service Section */}
        <Service />

        {/* Why Us Section */}
        <section className="bg-neutral-950 py-12">
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
