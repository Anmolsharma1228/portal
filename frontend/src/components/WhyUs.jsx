// components/WhyUs.jsx
import React from "react";
import { TrendingUp, ShieldCheck, BarChart3 } from "lucide-react";
import why from '../assets/Images/why.jpg';

const WhyUs = () => {
  const features = [
    {
      icon: <TrendingUp className="text-green-400 w-8 h-8" />,
      title: "Proven Strategies",
      desc: "We use research-backed strategies to help maximize your profits in all market conditions.",
    },
    {
      icon: <ShieldCheck className="text-yellow-400 w-8 h-8" />,
      title: "Trusted & Secure",
      desc: "Your data and investments are protected with industry-standard security measures.",
    },
    {
      icon: <BarChart3 className="text-blue-400 w-8 h-8" />,
      title: "Real-Time Insights",
      desc: "Access up-to-date market news, analysis, and tools to make smarter decisions.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
  >
      <h2 className="text-3xl font-bold text-yellow-400 mb-10">
        Why Choose <span className="text-white">Behind The Profit?</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-500/20 transition"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
