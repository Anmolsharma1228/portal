import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Service from "../components/Service";

const About = () => {
  return (
    <section className="relative bg-gradient-to-r from-black via-[#0f172a] to-black text-gray-100 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1611078489856-1c9a9e6466ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-20 space-y-20 ">
        {/* INTRO */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-6 pt-16"
          >
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
              Behind The Profit
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg sm:text-xl leading-relaxed text-gray-300"
          >
            We’re more than a stock market advisory firm — we’re your ally in{" "}
            <span className="text-red-400 font-semibold">building wealth</span>.
            Since 2023, our mission has been to empower investors with
            research-driven insights that turn opportunities into lasting
            success.
          </motion.p>
        </div>

        {/* VALUES / MISSION */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Our expertise spans{" "}
            <span className="text-yellow-400">technical analysis</span>,{" "}
            <span className="text-yellow-400">derivatives</span>, and{" "}
            <span className="text-yellow-400">risk management</span>. We design
            strategies tailored for both short-term traders and long-term
            investors.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-400"
          >
            What sets us apart is our{" "}
            <span className="text-red-400">transparency</span>,{" "}
            <span className="text-red-400">affordability</span>, and{" "}
            <span className="text-red-400">client-first approach</span>. Every
            investor’s journey is unique, and our advice is aligned with your
            goals and growth aspirations.
          </motion.p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: <TrendingUp className="text-yellow-400 w-10 h-10 mb-3" />,
              title: "Growth",
              text: "Helping portfolios scale smartly.",
            },
            {
              icon: <BarChart3 className="text-red-400 w-10 h-10 mb-3" />,
              title: "Analysis",
              text: "Research-based strategies & insights.",
            },
            {
              icon: <ShieldCheck className="text-green-400 w-10 h-10 mb-3" />,
              title: "Trust",
              text: "Transparent & client-first approach.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * i }}
              className="flex flex-col items-center bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg"
            >
              {item.icon}
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-gray-300 text-center">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* IMAGE COLLAGE */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              At Behind The Profit, we don’t just guide investments — we nurture{" "}
              <span className="text-yellow-400 font-semibold">trust</span>,{" "}
              <span className="text-yellow-400 font-semibold">confidence</span>,
              and{" "}
              <span className="text-yellow-400 font-semibold">
                lasting wealth
              </span>
              . Whether you’re new to trading or scaling your portfolio, we help
              you stay ahead of market trends and maximize every gain.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative grid grid-cols-2 gap-4"
          >
            <img
              src="https://images.unsplash.com/photo-1642532764147-dde67e3f82df?auto=format&fit=crop&w=800&q=80"
              alt="Stock Market"
              className="rounded-2xl shadow-2xl col-span-2"
            />
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
              alt="Trading Desk"
              className="rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80"
              alt="City & Finance"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold py-3 px-6 rounded-xl shadow-lg">
              📊 Market Insights
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <Link
            to="/#Services"
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-red-500 text-black font-semibold rounded-xl shadow-lg hover:scale-105 transition"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
