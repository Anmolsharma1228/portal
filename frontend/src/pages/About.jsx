import React from 'react'

const About = () => {
  return (
    <section className="bg-gradient-to-r from-black via-[#0f172a] to-black text-white py-16">
  {/* Hero */}
  <div className="text-center max-w-3xl mx-auto mb-12 mt-32">
    <h1 className="text-4xl font-bold text-yellow-500">About Us</h1>
    <p className="mt-4 text-gray-300 text-lg">
      Empowering investors with strategies, tools, and insights to make smarter decisions in the stock market.
    </p>
  </div>

  {/* Mission */}
  <div className="max-w-5xl mx-auto text-center mb-12">
    <h2 className="text-2xl font-semibold text-green-400">Our Mission</h2>
    <p className="mt-4 text-gray-400">
      To simplify stock market trading through proven strategies and 
      build a community of confident investors.
    </p>
  </div>

  {/* Why Choose Us */}
  <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto text-center">
    <div className="bg-gray-900 p-8 rounded-xl shadow">
      <h3 className="text-yellow-400 text-xl font-semibold">Trusted Strategies</h3>
      <p className="mt-2 text-gray-400">Back-tested methods for seasonal and long-term investing.</p>
    </div>
    <div className="bg-gray-900 p-8 rounded-xl shadow">
      <h3 className="text-green-400 text-xl font-semibold">Portfolio Building</h3>
      <p className="mt-2 text-gray-400">Guidance to diversify and grow your investments.</p>
    </div>
  </div>

  {/* CTA */}
  <div className="text-center mt-16">
    <a
      href="/services"
      className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-400 transition"
    >
      Explore Our Services
    </a>
  </div>
</section>

  )
}

export default About