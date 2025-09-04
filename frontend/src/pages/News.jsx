import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";
import { FaClock } from "react-icons/fa";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          "https://finnhub.io/api/v1/news?category=general&token=d2is489r01qqoaj8d1d0d2is489r01qqoaj8d1dg"
        );
        setArticles(res.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p className="text-center mt-10"><Loader /></p>;

  return (
  <div className="max-w-7xl mx-auto px-4 mt-38">
  <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-red-500">
    Latest Crypto News
  </h1>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-10">
    {articles.map((item, index) => (
      <div
        key={index}
        className="bg-[#111827] rounded-xl shadow-md overflow-hidden 
                   hover:shadow-red-500/40 hover:scale-[1.02] 
                   transition transform duration-300"
      >
        {/* Image with overlay */}
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 
                          hover:opacity-100 flex items-center justify-center transition">
            <span className="text-white text-lg font-semibold px-3 text-center">
              {item.headline}
            </span>
          </div>
        </div>

        {/* Card content */}
        <div className="p-5 flex flex-col h-[200px]">
          {/* <div className="flex items-center text-gray-400 text-sm mb-2">
            <FaClock className="mr-2 text-red-400" />
            <span>{new Date(item.datetime).toLocaleString()}</span>
          </div> */}
          <h3 className="font-bold text-lg mb-3 text-white">{item.title}</h3>
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">
            {item.summary}
          </p>

          <Link
            to={item.url}
            target="_blank"
            className="text-center w-[150px] mt-auto inline-block 
                       bg-gradient-to-r from-red-600 to-red-400 
                       text-white py-2 px-4 rounded-lg hover:opacity-90 transition"
          >
            Read More
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default News;
