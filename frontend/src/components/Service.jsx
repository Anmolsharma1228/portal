import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, LineChart, Layers } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Alpha Move Strategy",
    desc: "Event based and tailored for seasonal opportunities.",
    details: [
      "Short-term investment horizon (6–12 months)",
      "Focused stock recommendations with entry & exit levels",
      "Risk management and stop-loss strategies",
      "Regular monitoring and performance updates",
      "Tailored insights to maximize returns in less time",
    ],
    Icon: TrendingUp,
    glow: "from-yellow-500 hover:border-yellow-400/40 hover:shadow-yellow-500/30",
    text: "text-yellow-400",
    overlay: "bg-gradient-to-tr from-yellow-500 via-yellow-500 to-yellow-700/95",
  },
  {
    id: 2,
    title: "Turbo Trades Strategy",
    desc: "Designed for portfolio growth and long-term investment.",
    details: [
      "Long-term investment horizon (1 year & beyond)",
      "Handpicked stock recommendations backed by fundamentals",
      "Portfolio diversification for steady growth",
      "Periodic reviews and performance updates",
      "Focus on compounding and wealth building",
    ],
    Icon: LineChart,
    glow: "from-green-500 hover:border-green-400/40 hover:shadow-green-500/30",
    text: "text-green-400",
    overlay: "bg-gradient-to-tr from-green-600 via-green-500 to-green-700/95",
  },
  {
    id: 3,
    title: "Combo Plan",
    desc: "A comprehensive plan combining short-term and long-term strategies.",
    details: [
      "Alpha Move Strategy → Targeted trades for 6–12 month returns",
      "Turbo Trades Strategy → Compounding investments for lasting growth",
      "Balanced risk–reward ratio across both horizons",
      "Diversified portfolio for stability and opportunity",
      "Professional guidance with regular updates and monitoring",
    ],
    Icon: Layers,
    glow: "from-blue-500 via-purple-500 hover:border-blue-400/40 hover:shadow-blue-500/30",
    text: "text-blue-400",
    overlay: "bg-gradient-to-tr from-blue-700 via-purple-400 to-indigo-900/95",
  },
];

const ServiceCard = ({ service, isOpen, setOpen }) => {
  const { id, title, desc, details, Icon, glow, text, overlay } = service;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative h-full text-center px-6 py-12 bg-gray-900 rounded-2xl shadow-lg cursor-pointer"
      onClick={() => setOpen(isOpen === id ? null : id)}
    >
      {/* Card front */}
      <div
        className={`relative h-full px-6 py-12 rounded-2xl shadow-lg bg-gray-900 overflow-hidden border border-gray-800 ${glow} hover:-translate-y-2 transition duration-300 group`}
      >
        <div className="flex justify-center items-center mb-6">
          <Icon className={`w-12 h-12 ${text} group-hover:scale-125 transition duration-300`} />
        </div>
        <h3 className={`text-2xl font-semibold ${text}`}>{title}</h3>
        <p className="mt-3 text-gray-400 text-lg">{desc}</p>
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr ${glow} to-transparent blur-2xl transition`}
        ></div>
      </div>

    {/* Overlay details */}
<AnimatePresence>
  {isOpen === id && (
   <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.9 }}
  transition={{ duration: 0.05 }} // <- very fast exit
  className={`absolute inset-0 flex flex-col items-center justify-center rounded-2xl p-6 z-20
    bg-gray-900/95 ${text.replace("text")} shadow-2xl`}
>
  {/* Glow background */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.3 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.05 }} // <- fast exit
    className={`absolute inset-0 rounded-2xl ${overlay} blur-2xl`}
  ></motion.div>

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.05 }} // <- fast exit
    className="relative z-30 w-full"
  >
    <h2 className={`text-xl font-bold mb-3 ${text}`}>More Details</h2>

    <ul className="list-disc text-gray-200 space-y-2 text-left">
      {details.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>

    <button
      onClick={(e) => {
        e.stopPropagation();
        setOpen(null);
      }}
      className={`mt-6 px-5 py-2 ${text.replace(
        "text",
        "bg"
      )} text-black rounded-lg hover:opacity-80 transition cursor-pointer`}
    >
      Close
    </button>
  </motion.div>
</motion.div>

  )}
</AnimatePresence>

    </motion.div>
  );
};

const Service = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-gradient-to-r from-black via-[#0f172a] to-black text-white py-16">
      <h1 className="text-center font-bold text-4xl md:text-5xl py-6 text-yellow-500 tracking-wide">
        Services
      </h1>

      <div className="max-w-6xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-stretch">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isOpen={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </section>
  );
};

export default Service;
