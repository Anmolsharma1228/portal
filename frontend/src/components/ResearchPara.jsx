import React from "react";
import { TrendingUp, BarChart2, Shield, Activity, Layers } from "lucide-react";
import { motion } from "framer-motion";

const sections = [
  {
    id: 1,
    title: "Fundamental Analysis – Unlocking Long-Term Value",
    icon: <BarChart2 className="w-8 h-8 text-yellow-400" />,
    points: [
      "Evaluating financial statements, balance sheets, and income reports.",
      "Analyzing earnings growth, cash flows, and debt levels.",
      "Studying industry outlooks and competitive positioning.",
      "Monitoring macroeconomic indicators such as interest rates and GDP growth.",
    ],
    desc: "This helps us identify stocks with sustainable business models, strong fundamentals, and long-term growth potential.",
  },
  {
    id: 2,
    title: "Technical Analysis – Timing the Market Smartly",
    icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
    points: [
      "Price action trends to identify momentum.",
      "Chart patterns and candlestick formations.",
      "Volume analysis to confirm buying/selling pressure.",
      "Indicators like RSI, MACD, Bollinger Bands, and MAs.",
    ],
    desc: "This allows us to determine entry and exit points with accuracy, helping traders capture profits while managing risks effectively.",
  },
  {
    id: 3,
    title: "Risk Management – Protecting Your Capital First",
    icon: <Shield className="w-8 h-8 text-yellow-400" />,
    points: [
      "Pre-defined stop-loss strategies to limit downside.",
      "Maintaining optimal risk-to-reward ratios.",
      "Diversifying across sectors and instruments.",
      "Continuous review of volatility and liquidity factors.",
    ],
    desc: "By keeping risk at the forefront, we ensure clients can participate in opportunities without unnecessary losses.",
  },
  {
    id: 4,
    title: "Market Sentiment & Trends – Staying Ahead of the Curve",
    icon: <Activity className="w-8 h-8 text-yellow-400" />,
    points: [
      "Global cues from U.S., Europe, and Asia.",
      "Domestic factors like budgets, RBI policies, corporate results.",
      "News flow and investor psychology driving short-term moves.",
      "Tracking FIIs, DIIs, and institutional activity.",
    ],
    desc: "By aligning strategies with market sentiment, we help investors stay ahead in bullish and bearish environments.",
  },
  {
    id: 5,
    title: "Sector & Theme-Based Study – Spotting Future Winners",
    icon: <Layers className="w-8 h-8 text-yellow-400" />,
    points: [
      "Rising industries: technology, renewable energy, healthcare.",
      "Policy-driven sectors: infrastructure, banking, defense.",
      "Thematic plays: digital transformation, EV adoption, consumer trends.",
    ],
    desc: "This ensures our clients are positioned in future-ready opportunities with strong potential.",
  },
];

const ResearchPara = () => {
  return (
    <div id="/#ResearchPara" className="bg-linear-to-r from-black via-gray-900 to-black px-6 sm:px-10 lg:px-20 py-20 text-gray-100 mt-10">
      {/* Title */}
      <h1 className="text-center text-2xl font-extrabold text-[#003366] mb-12">
        Research Parameters
      </h1>

      {/* Sections */}
      <div className="grid md:grid-cols-2 gap-8">
        {sections.map((sec, index) => (
          <motion.div
            key={sec.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/20 transition-shadow duration-300"
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-4">
              {sec.icon}
              <h2 className="text-xl font-semibold text-yellow-400">
                {sec.title}
              </h2>
            </div>

            {/* Content */}
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {sec.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <p className="mt-3 text-gray-400">{sec.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Commitment */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 bg-linear-to-r from-yellow-600/20 via-gray-800 to-yellow-600/20 p-8 rounded-2xl shadow-xl text-center"
      >
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">
          Our Commitment to Research Excellence
        </h2>
        <p className="text-gray-300 leading-relaxed">
          At <span className="font-semibold text-yellow-400">Behind The Profit</span>, 
          research is not just a process—it is our core strength. Each recommendation 
          is backed by rigorous analysis, blending quantitative models with qualitative insights. 
          We stay updated with evolving market conditions, ensuring <span className="text-yellow-400">accuracy, reliability, and transparency</span> 
          so that investors gain clarity, confidence, and opportunities they deserve.
        </p>
      </motion.div>
    </div>
  );
};

export default ResearchPara;
