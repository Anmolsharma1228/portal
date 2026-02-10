import React from "react";
import over1 from "../assets/Images/over1.jpg";
import over2 from "../assets/Images/over2.avif";
import over3 from "../assets/Images/over3.jpg";
import over4 from "../assets/Images/over4.jpg";
import over5 from "../assets/Images/over5.avif";
import over6 from "../assets/Images/over6.jpg";
import over7 from "../assets/Images/over7.avif";

const features = [
  {
    title: "Time-Bound Investment Horizon",
    desc: "Designed specifically for a 6–12 month period, ensuring investors have a clear roadmap and expected outcomes. Perfect for individuals who do not want to stay locked in for years but still seek meaningful returns.",
    img: over1,
  },
  {
    title: "Focused Stock Selection",
    desc: "Our research team identifies stocks, sectors, and opportunities backed by strong near-term drivers. Emphasis is placed on companies with solid fundamentals, positive earnings visibility, and strong technical setups.",
    img: over2,
  },
  {
    title: "Balanced Risk & Reward",
    desc: "While chasing alpha, risk management remains central. We set defined entry and exit levels, stop-losses, and regular portfolio reviews to protect investor capital.",
    img: over3,
  },
  {
    title: "Data-Driven Approach",
    desc: "The strategy combines fundamental analysis (to ensure long-term strength) with technical analysis (to time the market). Market sentiment, liquidity flows, and global cues are also considered.",
    img: over4,
  },
  {
    title: "Active Monitoring",
    desc: "The short-term nature requires constant monitoring and timely adjustments. We actively rebalance positions to take advantage of sudden price movements.",
    img: over5,
  },
];

const howItWorks = [
  {
    title: "Research & Screening",
    desc: "Our analysts scan the market to shortlist companies showing positive short-term triggers such as sectoral growth, strong earnings reports, or upcoming policy advantages.",
  },
  {
    title: "Technical Alignment",
    desc: "Using advanced technical indicators and charting tools, we identify the best entry points to maximize returns while limiting downside risks.",
  },
  {
    title: "Portfolio Structuring",
    desc: "Investors’ funds are allocated into a diversified set of short-term picks, ensuring a balance between high-growth potential and capital safety.",
  },
  {
    title: "Continuous Tracking",
    desc: "The portfolio is regularly tracked, and necessary adjustments are made in case of market volatility or changes in stock performance.",
  },
  {
    title: "Exit Planning",
    desc: "Unlike buy-and-hold strategies, Alpha Move has pre-defined exit targets, ensuring profits are booked on time.",
  },
];

const AlphaOverv = () => {
  return (
    <section className="text-white bg-gray-900">
      {/* Hero / Banner Section */}
      <div className="relative w-full h-125 sm:h-150 lg:h-175">
        <img
          src="https://source.unsplash.com/1600x900/?finance,stocks,money"
          alt="Finance Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-6 sm:px-12">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Alpha Move Strategy
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-6">
            A short-term investment approach for high returns within 6
            months, leveraging market momentum, trend shifts, and growth
            catalysts.
          </p>
          <a
            href="#features"
            className="bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-full hover:bg-yellow-400 transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Overview */}
      <div className="max-w-4xl mx-auto py-16 px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">Overview</h2>
        <p className="text-gray-300 text-[17px] leading-relaxed">
          The Alpha Move Strategy is a carefully crafted short-term investment
          approach designed for individuals who aim to maximize returns within a
          defined period of 6 to 12 months. Unlike traditional long-term
          strategies that rely on holding investments for years, Alpha Move
          focuses on short-duration opportunities in the market where momentum,
          trend shifts, and growth catalysts align to deliver potential
          outperformance, or what we call alpha.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          In today’s fast-paced financial markets, short-term opportunities
          often arise due to changing economic conditions, quarterly earnings,
          sectoral trends, or government policy shifts. The Alpha Move Strategy
          leverages these catalysts to create a disciplined, research-backed
          investment plan that minimizes risks while targeting superior gains.
        </p>
      </div>

      {/* Key Features */}
      <div
        id="features"
        className="max-w-6xl mx-auto py-20 px-6 sm:px-12 lg:px-20"
      >
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Key Features
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={feature.img}
                alt={`Illustration for ${feature.title}`}
                className="w-full h-48 object-cover rounded-t-lg"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

       {/* How It Works */}
      <div className="max-w-6xl mx-auto mb-16 px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          How the Strategy Works
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {howItWorks.map((step, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.desc}</p>
             
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose This Strategy with images */}
      <div className="max-w-6xl mx-auto py-16 px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Why Choose This Strategy?
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={over6}
            alt="Why Choose"
            className="w-full md:w-1/2 h-6/12 object-cover rounded-lg shadow-lg"
          />
          <ul className="list-disc list-inside space-y-4 text-gray-300 text-lg md:w-1/2">
            <li>
              <strong>Short-Term Commitment:</strong> Achieve returns within
              6–12 months.
            </li>
            <li>
              <strong>Flexibility:</strong> Suitable for agile investors.
            </li>
            <li>
              <strong>Superior Returns (Alpha):</strong> Focus on outperforming
              standard market benchmarks.
            </li>
            <li>
              <strong>Risk-Managed Growth:</strong> Capital preservation remains
              central.
            </li>
            <li>
              <strong>Professional Guidance:</strong> Recommendations are
              research-backed and expert-driven.
            </li>
          </ul>
        </div>
      </div>

      {/* Who Should Opt with images */}
      <div className="max-w-6xl mx-auto py-16 px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Who Should Opt for This Strategy?
        </h2>
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <img
            src={over7}
            alt="Who Should Opt"
            className="w-full md:w-1/2 h-6/12 object-cover rounded-lg shadow-lg"
          />
          <ul className="list-disc list-inside space-y-4 text-gray-300 text-lg md:w-1/2">
            <li>
              Investors looking for short-term opportunities without committing
              to a multi-year horizon.
            </li>
            <li>
              Individuals who want active portfolio management with regular
              monitoring and adjustments.
            </li>
            <li>
              Traders or investors aiming for returns higher than traditional
              market averages in a limited time frame.
            </li>
            <li>
              Those who prefer a structured, research-backed, and disciplined
              approach rather than speculative trading.
            </li>
          </ul>
        </div>
      </div>

      {/* Conclusion */}
      <div className="max-w-4xl mx-auto text-gray-300 text-center py-20 px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
        <p className="text-lg leading-relaxed">
          The Alpha Move Strategy bridges the gap between long-term wealth
          creation and high-frequency trading. It is an ideal short-term
          investment model for those who want to grow their wealth within a 6 to
          12 month horizon, while still ensuring risk management, discipline,
          and research-driven stock selection. By combining market intelligence,
          fundamental strength, and technical precision, the Alpha Move Strategy
          empowers investors to capture opportunities when they matter most.
        </p>
      </div>
    </section>
  );
};

export default AlphaOverv;
