import React from "react";
import over8 from "../assets/Images/over8.avif";
import over9 from "../assets/Images/over9.avif";
import over10 from "../assets/Images/over10.avif";
import over11 from "../assets/Images/over11.avif";
import over12 from "../assets/Images/over12.avif";
import over13 from "../assets/Images/over13.avif";
import over14 from "../assets/Images/over14.avif";

const features = [
  {
    title: "Long-Term Horizon",
    desc: "Designed for investments that stretch beyond one year, with the flexibility to hold for multiple years. Suitable for building a core portfolio that stands strong against short-term volatility.",
    img: over8,
  },
  {
    title: "Compounding Effect",
    desc: "By holding quality businesses longer, investors benefit from the power of compounding returns. Reinvesting profits further accelerates wealth growth.",
    img: over9,
  },
  {
    title: "Strong Fundamentals",
    desc: "Focus on companies with robust balance sheets, consistent earnings, and future growth potential. Emphasis on sectors with long-term relevance and scalability.",
    img: over10,
  },
  {
    title: "Risk Mitigation",
    desc: "A diversified portfolio ensures risks are spread across industries, market caps, and geographies. Periodic rebalancing maintains the right mix between growth and stability.",
    img: over11,
  },
  {
    title: "Discipline Over Speculation",
    desc: "Avoids chasing short-term market noise. Emphasizes steadfast holding periods with data-backed entry and exit points.",
    img: over12,
  },
];

const howItWorks = [
  {
    title: "Stock & Sector Identification",
    desc: "Our experts screen companies with long-term growth drivers, focusing on industries expected to thrive in the coming years (technology, healthcare, energy, infrastructure, etc.).",
  },
  {
    title: "Fundamental Research",
    desc: "A detailed analysis of financial strength, management quality, debt levels, and industry positioning ensures only the most reliable companies are included.",
  },
  {
    title: "Portfolio Construction",
    desc: "Investments are allocated across a carefully balanced portfolio — including large-cap stability, mid-cap growth, and selective small-cap opportunities.",
  },
  {
    title: "Active Oversight",
    desc: "While this is a long-term strategy, the portfolio is regularly reviewed to account for shifts in market dynamics, economic policies, and company fundamentals.",
  },
  {
    title: "Compounding & Rebalancing",
    desc: "Profits are reinvested strategically, and the portfolio is rebalanced at intervals to maintain optimum growth potential with minimal risk.",
  },
];

const TurboOverv = () => {
  return (
    <section className="text-white bg-gray-900">
      {/* Hero / Banner Section */}
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px]">
        <img
          src="https://source.unsplash.com/1600x900/?investment,finance,stocks"
          alt="Turbo Trade Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-6 sm:px-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Turbo Trade Strategy
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mb-6">
            A long-term investment approach for building sustainable wealth over
            1 year and beyond.
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
        <p className="text-gray-300 text-lg leading-relaxed">
          The Turbo Trade Strategy is a long-term investment framework designed
          for individuals who aspire to build sustainable wealth and a strong
          portfolio over a period of 1 year and beyond. Unlike short-term plans
          that capitalize on market momentum, Turbo Trade focuses on
          fundamentally strong businesses, consistent performers, and
          wealth-compounding opportunities that can deliver exponential growth
          over time.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          This strategy recognizes that time in the market is often more
          powerful than timing the market. By adopting a disciplined,
          research-backed, and patient investment approach, Turbo Trade enables
          investors to benefit from the power of compounding, market cycles, and
          long-term value creation.
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

      {/* Benefits */}
      <div className="max-w-6xl mx-auto py-16 px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Benefits of Turbo Trade Strategy
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={over13}
            alt="Benefits"
            className="w-full md:w-1/2 h-6/12 object-cover rounded-lg shadow-lg"
          />
          <ul className="list-disc list-inside space-y-4 text-gray-300 text-lg md:w-1/2">
            <li>
              Wealth Creation Over Time: Ideal for those who want to grow wealth
              steadily without chasing short-lived gains.
            </li>
            <li>
              Portfolio Stability: A diversified mix of stocks provides
              resilience against volatility.
            </li>
            <li>
              Harnessing Compounding: Time in the market multiplies growth
              exponentially.
            </li>
            <li>
              Stress-Free Approach: Long-term investments reduce the anxiety of
              short-term market fluctuations.
            </li>
            <li>
              Professional Guidance: Backed by in-depth research, analysis, and
              continuous monitoring.
            </li>
          </ul>
        </div>
      </div>

      {/* Who Should Choose */}
      <div className="max-w-6xl mx-auto py-16 px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Who Should Choose Turbo Trade Strategy?
        </h2>
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <img
            src={over14}
            alt="Who Should Choose"
            className="w-full md:w-1/2 h-6/12 object-cover rounded-lg shadow-lg"
          />
          <ul className="list-disc list-inside space-y-4 text-gray-300 text-lg md:w-1/2">
            <li>Investors with a long-term vision for wealth building.</li>
            <li>
              Individuals aiming to create a robust portfolio for financial
              security, retirement planning, or legacy creation.
            </li>
            <li>
              Those who prefer stability with growth, rather than frequent
              trading.
            </li>
            <li>
              People seeking to balance risk and return with diversified,
              high-quality investments.
            </li>
          </ul>
        </div>
      </div>

      {/* Conclusion */}
      <div className="max-w-4xl mx-auto text-gray-300 text-center py-20 px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
        <p className="text-lg leading-relaxed">
          The Turbo Trade Strategy is more than just an investment plan — it is
          a roadmap to financial independence and wealth creation. By focusing
          on long-term opportunities, fundamentally strong companies, and the
          power of compounding, this strategy ensures investors build a
          portfolio that not only withstands market volatility but also grows
          consistently over the years. For investors who seek clarity,
          stability, and sustainable growth, the Turbo Trade Strategy is the
          ideal pathway to long-term success.
        </p>
      </div>
    </section>
  );
};

export default TurboOverv;
