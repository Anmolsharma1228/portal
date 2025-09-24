import React from "react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-[#0f172a] to-black py-16 px-6 sm:px-12 lg:px-24 text-gray-100 mt-20">
      <div className="max-w-4xl mx-auto bg-gray-900/90 shadow-2xl rounded-2xl p-5 sm:p-10 border border-gray-700">
        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-10 text-yellow-400 text-center tracking-wide">
          Disclaimer
        </h1>

        {/* Numbered List */}
        <ol className="list-decimal list-inside space-y-6 text-gray-300 leading-relaxed text-lg">
          <li>
            The insights, research, and recommendations offered by{" "}
            <span className="text-yellow-300 font-medium">Behind The Profit</span>{" "}
            are designed solely for educational and informational purposes. We
            are a stock market advisory company and do not participate in
            portfolio management, brokerage services, or guaranteed profit
            programs.
          </li>

          <li>
            Every investment in stocks, derivatives, and similar instruments
            carries inherent market risks. The value of investments can fluctuate,
            and there is always a possibility of losing capital. Past performance
            must not be interpreted as a guarantee of future results.
          </li>

          <li>
            Clients and investors are strongly encouraged to evaluate their
            financial situation, risk tolerance, and investment objectives before
            acting on any recommendations provided. Independent professional
            consultation is advised whenever necessary.
          </li>

          <li>
            By subscribing to or utilizing our services, you agree that{" "}
            <span className="text-yellow-300 font-medium">Behind The Profit</span>{" "}
            shall not be held responsible for any financial losses, damages, or
            consequences arising directly or indirectly from reliance on our
            research and suggestions.
          </li>

          <li>
            All trademarks, service marks, logos, and company names mentioned on
            this website are the property of their respective owners. Unauthorized
            usage of any intellectual property is strictly prohibited.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Disclaimer;
