import React, { useState } from "react";
import stock from "../assets/Images/stock.png";
import { Book, Video } from "lucide-react";
import Frequently from "../components/Frequently";

const topics = [
  {
    title: "What is a stock?",
    content:
      "A stock is a small piece of ownership in a company. When you buy a stock, you own a part of that company.",
  },
  {
    title: "What is the stock market?",
    content:
      "The stock market is a place where people buy and sell shares of companies. It helps companies raise money and investors earn profits.",
  },
  {
    title: "How does the stock market work?",
    content:
      "People trade shares through brokers. Prices go up or down based on supply and demand.",
  },
  {
    title: "Why do companies issue shares?",
    content:
      "Companies sell shares to raise money for growth, projects, or to pay debts.",
  },
  {
    title: "Who are investors and traders?",
    content:
      "Investors buy stocks to hold for a long time. Traders buy and sell stocks quickly for short-term profits.",
  },
  {
    title: "What are Mutual Funds?",
    content:
      "Mutual funds pool money from many people and invest in various stocks or bonds. A professional manager handles it.",
  },
  {
    title: "What are ETFs?",
    content:
      "ETFs are like mutual funds but can be bought and sold like stocks during the day.",
  },
  {
    title: "What are Bonds?",
    content:
      "Bonds are loans to a company or government. They pay you interest and are generally safer than stocks.",
  },
  {
    title: "What are Commodities?",
    content:
      "Commodities are physical goods like gold, oil, or wheat. People invest in them when markets are unstable.",
  },
  {
    title: "What is Cryptocurrency?",
    content:
      "Cryptocurrency is digital money like Bitcoin. It’s new, risky, and not controlled by any government.",
  },
  {
    title: "What is an IPO?",
    content:
      "An IPO is when a company sells its shares to the public for the first time.",
  },
  {
    title: "What are NSE and BSE?",
    content:
      "NSE and BSE are major stock exchanges in India where people trade stocks.",
  },
  {
    title: "What is SEBI?",
    content:
      "SEBI is India’s stock market regulator. It makes sure trading is fair and safe.",
  },
  {
    title: "What is a Bull Market?",
    content:
      "A bull market is when stock prices are going up and people feel confident.",
  },
  {
    title: "What is a Bear Market?",
    content:
      "A bear market is when stock prices are falling and people are worried.",
  },
  {
    title: "What is P/E Ratio?",
    content:
      "The P/E Ratio compares a company’s price to its earnings. It helps investors know if a stock is cheap or expensive.",
  },
  {
    title: "What is Market Cap?",
    content:
      "Market cap is the total value of a company’s shares. It shows how big the company is.",
  },
  {
    title: "What is Volume?",
    content:
      "Volume is the number of shares traded in a day. High volume means lots of people are buying or selling.",
  },
  // Add more topics as needed
];

const Learn = () => {
  const [search, setSearch] = useState("");

  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
  <div className="p-4 max-w-5xl mx-auto mt-38 min-h-screen">
  <h1 className="flex justify-center text-3xl font-bold mb-6 text-center text-red-500">
    <Book className="text-red-500 size-[40px] stroke-3"/> Learn About the Stock Market
  </h1>

  <input
    type="text"
    placeholder="Search a term like 'IPO' or 'Mutual Fund'..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full p-2 border border-red-500 bg-gray-900 text-white rounded-lg mb-6 shadow-md focus:ring-2 focus:ring-red-500 outline-none"
  />

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {filteredTopics.map((topic, index) => (
      <div
        key={index}
        className="bg-gray-900 text-gray-100 p-4 rounded-xl shadow-md hover:shadow-red-500/50 transition"
      >
        <h2 className="text-lg font-semibold mb-2 text-red-400">{topic.title}</h2>
        <p className="text-md">{topic.content}</p>
      </div>
    ))}
  </div>

  <div className="mt-12">
    <h2 className="flex items-center text-2xl font-bold mb-4 text-red-500">
      <Video className="mx-1 size-[36px]"/> Watch Explainer Video
    </h2>
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="w-full h-64 rounded-lg border-2 border-red-500"
        src="https://www.youtube.com/embed/p7HKvqRI_Bo"
        title="What is the Stock Market?"
        allowFullScreen
      ></iframe>
    </div>
  </div>

  <div className="mt-12">
    <h2 className="text-2xl font-bold mb-4 text-red-500">📊 Infographics</h2>
    <img
      src={stock}
      alt="Stock Market Flow"
      className="w-full rounded-lg shadow-red-500/50 border border-red-500"
    />
  </div>
  <Frequently />
</div>

  );
};

export default Learn;
