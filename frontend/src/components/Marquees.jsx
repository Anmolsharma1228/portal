import React, { useState, useEffect } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";

export const Marquees = () => {
  const [stocks, setStocks] = useState([]);

  const symbols = ["AAPL", "MSFT", "TSLA", "AMZN", "GOOGL"];

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const results = await Promise.all(
          symbols.map((symbol) =>
            axios.get(
              `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=d2is489r01qqoaj8d1d0d2is489r01qqoaj8d1dg`
            )
          )
        );

        // Format data as {symbol, currentPrice, change, percent}
        const formatted = results.map((res, idx) => ({
          symbol: symbols[idx],
          price: res.data.c,
          change: res.data.d,
          percent: res.data.dp,
        }));

        setStocks(formatted);
      } catch (error) {
        console.error("Error fetching stocks:", error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <div className="bg-gray-900 py-3">
      <Marquee gradient={false} speed={60}>
        {stocks.length > 0 ? (
          stocks.map((stock, idx) => (
            <div
              key={idx}
              className="mx-6 font-semibold text-yellow-400 flex items-center space-x-2"
            >
              <span>{stock.symbol}:</span>
              <span>${stock.price.toFixed(2)}</span>
              <span
                className={
                  stock.change >= 0 ? "text-green-400" : "text-red-400"
                }
              >
                {stock.change} ({stock.percent}%)
              </span>
            </div>
          ))
        ) : (
          <span className="text-white">Loading stock data...</span>
        )}
      </Marquee>
    </div>
  );
};

export const MarqueeHeadline = () => {
  return (
    <Marquee gradient={false} speed={50}>
      <p className="text-[20px] text-white text-center mt-3">
        Welcome to behind the profit: the home of smart traders.
      </p>
    </Marquee>
  );
};
