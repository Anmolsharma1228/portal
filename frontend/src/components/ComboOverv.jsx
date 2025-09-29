import React from "react";
import over1 from "../assets/Images/over1.jpg";
import over2 from "../assets/Images/over2.avif";
import over3 from "../assets/Images/over3.jpg";
import over4 from "../assets/Images/over4.jpg";
import over5 from "../assets/Images/over5.avif";
import over6 from "../assets/Images/over6.jpg";
import over7 from "../assets/Images/over7.avif";

const ComboOverv = () => {
  return (
    <section className="text-white bg-gray-900">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px]">
        <img
          src="https://source.unsplash.com/1600x900/?finance,investment,combo"
          alt="Combo Plan Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-6 sm:px-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Combo Plan: Alpha + Turbo Strategy
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mb-6">
            A dual strategy capturing quick short-term profits while building
            long-term wealth — the best of both Alpha Move and Turbo Trade.
          </p>
          <a
            href="#overview"
            className="bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-full hover:bg-yellow-400 transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Overview */}
      <div
        id="overview"
        className="max-w-5xl mx-auto py-16 px-6 sm:px-12 lg:px-20"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Overview</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          The Alpha + Turbo Combo Strategy is a comprehensive investment plan
          that combines the strengths of both short-term and long-term
          strategies. It is designed for investors who wish to maximize
          short-term opportunities while simultaneously building a strong
          long-term portfolio.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          By merging the Alpha Move Strategy (6–12 months horizon) and the Turbo
          Trade Strategy (1 year and beyond), this combo offers the best of both
          worlds: quick gains from near-term opportunities and sustainable
          wealth creation through disciplined, long-term holdings.
        </p>
      </div>

      {/* Core Philosophy */}
      <div className="max-w-6xl mx-auto py-16 px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Core Philosophy
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <img src={over1} alt="Dual Focus" className="rounded mb-4 h-40 w-full object-cover" />
            <h3 className="text-xl font-bold mb-2">Dual Focus</h3>
            <p className="text-gray-300">
              Capture short-term profits while laying the foundation for long-term wealth.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <img src={over2} alt="Diversified Approach" className="rounded mb-4 h-40 w-full object-cover" />
            <h3 className="text-xl font-bold mb-2">Diversified Approach</h3>
            <p className="text-gray-300">
              A mix of momentum-based trades and fundamentally strong investments.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <img src={over3} alt="Risk Adjusted" className="rounded mb-4 h-40 w-full object-cover" />
            <h3 className="text-xl font-bold mb-2">Risk-Adjusted Returns</h3>
            <p className="text-gray-300">
              Balancing aggressive short-term moves with stable long-term growth.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div
        id="features"
        className="max-w-6xl mx-auto py-20 px-6 sm:px-12 lg:px-20"
      >
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Key Features of Combo Plan
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {[
            {
              title: "Two-in-One Strategy",
              desc: "Capital split between Alpha (short-term) and Turbo (long-term), ensuring continuous growth.",
              img: over4,
            },
            {
              title: "Regular Returns + Portfolio Growth",
              desc: "Alpha provides 6–12 month returns, Turbo builds compounding long-term wealth.",
              img: over5,
            },
            {
              title: "Dynamic Risk Management",
              desc: "Short-term trades use strict stop-losses, while long-term holdings are rebalanced periodically.",
              img: over6,
            },
            {
              title: "Diversification Across Horizons",
              desc: "Short-term plays capture immediate opportunities, long-term holdings ensure stability.",
              img: over7,
            },
          ].map((f, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={f.img}
                alt={f.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-300">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-6xl mx-auto mb-16 px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          How It Works
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-300 text-lg leading-relaxed">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-2">Capital Allocation</h3>
            <p>
              Alpha Portion (6–12 months) targets quick returns. Turbo Portion
              (1+ years) compounds for the long term.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-2">Stock Selection</h3>
            <p>
              Alpha relies on momentum & sector triggers. Turbo focuses on
              fundamentals and balance sheets.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-2">Monitoring & Adjustments</h3>
            <p>
              Alpha is tracked daily; Turbo is reviewed quarterly for rebalancing.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-2">Profit Reinvestment</h3>
            <p>
              Alpha profits are reinvested into Turbo for enhanced compounding.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-5xl mx-auto py-16 px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Benefits of the Combo Strategy
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-300 text-lg">
          <li>Balanced Approach – Quick gains + long-term compounding.</li>
          <li>Reduced Risk – Diversification across time horizons.</li>
          <li>Flexibility with Stability – Active & passive blend.</li>
          <li>Optimized Returns – Capture multiple market opportunities.</li>
        </ul>
      </div>

      {/* Who Should Choose */}
      <div className="max-w-5xl mx-auto py-16 px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Who Should Choose This Strategy?
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-300 text-lg">
          <li>Investors seeking both quick profits and sustainable wealth.</li>
          <li>
            Individuals who want a balance between short-term flexibility and
            long-term security.
          </li>
          <li>Those looking to minimize risks with a dual approach.</li>
          <li>Investors preferring professional, research-backed guidance.</li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className="max-w-4xl mx-auto text-gray-300 text-center py-20 px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
        <p className="text-lg leading-relaxed">
          The Alpha + Turbo Combo Strategy is more than an investment service —
          it is a complete wealth management solution. By combining the speed of
          Alpha Move with the stability of Turbo Trade, this strategy ensures
          your money works for both the present and the future. If you value
          immediate growth along with long-term stability, this is the perfect
          plan to achieve your financial goals.
        </p>
      </div>
    </section>
  );
};

export default ComboOverv;
