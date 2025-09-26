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
    desc: "Designed for a 6–12 month period, providing a clear roadmap and expected outcomes.",
    img: over1,
  },
  {
    title: "Focused Stock Selection",
    desc: "Identifies stocks and sectors backed by strong near-term drivers, fundamentals, and technical setups.",
    img: over2,
  },
  {
    title: "Balanced Risk & Reward",
    desc: "Implements defined entry/exit points, stop-losses, and regular portfolio reviews to protect capital.",
    img: over3,
  },
  {
    title: "Data-Driven Approach",
    desc: "Combines fundamental and technical analysis, market sentiment, liquidity flows, and global cues.",
    img: over4,
  },
  {
    title: "Active Monitoring",
    desc: "Short-term nature demands constant tracking and timely adjustments.",
    img: over5,
  },
];

const AlphaOverv = () => {
  return (
    <section className="text-white bg-gray-900">
      {/* Hero / Banner Section */}
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px]">
        <img
          src="https://source.unsplash.com/1600x900/?finance,stocks,money"
          alt="Finance Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-6 sm:px-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Alpha Move Strategy
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mb-6">
            A short-term investment approach for high returns within 6–12 months,
            leveraging market momentum, trend shifts, and growth catalysts.
          </p>
          <a
            href="#features"
            className="bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-full hover:bg-yellow-400 transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Key Features */}
      <div id="features" className="max-w-6xl mx-auto py-20 px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">Key Features</h2>
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
        <h2 className="text-3xl font-semibold mb-10 text-center">How It Works</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Research & Screening",
              desc: "Analysts shortlist companies showing positive short-term triggers such as sectoral growth, earnings reports, or policy advantages.",
              img: over6,
            },
            {
              title: "Technical Alignment",
              desc: "Advanced technical indicators identify optimal entry points to maximize returns while limiting downside.",
              img: over7,
            },
            {
              title: "Portfolio Structuring",
              desc: "Funds are allocated into diversified short-term picks to balance growth potential and capital safety.",
              img: "https://source.unsplash.com/400x250/?portfolio,finance",
            },
            {
              title: "Continuous Tracking",
              desc: "The portfolio is actively monitored, with adjustments made during market volatility or stock performance changes.",
              img: "https://source.unsplash.com/400x250/?monitoring,stocks",
            },
            {
              title: "Exit Planning",
              desc: "Pre-defined exit targets ensure profits are booked on time, unlike traditional buy-and-hold strategies.",
              img: "https://source.unsplash.com/400x250/?profit,finance",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.desc}</p>
              {/* <img
                src={step.img}
                alt={`Illustration for ${step.title}`}
                className="mt-4 w-full h-40 object-cover rounded"
                loading="lazy"
              /> */}
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="max-w-4xl mx-auto text-gray-300 text-center py-20 px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
        <p className="text-lg">
          The Alpha Move Strategy bridges long-term wealth creation and high-frequency trading, offering a short-term investment model to grow wealth within 6–12 months.
          Through disciplined research, risk management, and precise market timing, it empowers investors to seize opportunities when they matter most.
        </p>
      </div>
    </section>
  );
};

export default AlphaOverv;
