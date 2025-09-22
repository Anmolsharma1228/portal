import React from "react";
import { FaShieldAlt, FaHandshake, FaLock } from "react-icons/fa";
import policy from "../assets/Images/policy.jpg";
import policy1 from "../assets/Images/policy1.jpg";

const Policy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-[#0f172a] to-black py-12 px-4 sm:px-6 lg:px-20 text-white">
      <div className="max-w-6xl mx-auto space-y-16 pt-24">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Our Policies
        </h1>

        {/* No Refund Policy */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col md:flex-row items-stretch gap-6">
            {/* Left Image */}
            <div className="w-full md:w-[40%] flex">
              <img
                src={policy}
                alt="No Refund Policy"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Right Content */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center">
                <FaShieldAlt className="text-green-400 text-2xl mr-3" />
                <h2 className="text-2xl font-bold">No Refund Policy</h2>
              </div>

              <p className="text-gray-300 text-lg">
                All subscriptions and services offered by our platform are final
                and non-refundable. Given the nature of financial advisory and
                market research, once access to our insights, strategies, or
                recommendations has been provided, we cannot offer cancellations,
                refunds, or credits under any circumstances.
              </p>

              <p className="text-gray-300 text-lg">
                We strongly advise clients to carefully evaluate our service
                offerings and ensure they align with their investment objectives
                before subscribing.
              </p>
            </div>
          </div>
        </section>

        {/* Commitment to Quality */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col md:flex-row items-stretch gap-6">
            {/* Left Icon Placeholder (instead of image) */}
            {/* <div className="w-full md:w-[40%] flex items-center justify-center bg-gray-700 rounded-lg">
              <FaHandshake className="text-blue-400 text-6xl" />
            </div> */}

            {/* Right Content */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center">
                <FaHandshake className="text-blue-400 text-2xl mr-3" />
                <h2 className="text-2xl font-bold">Commitment to Quality</h2>
              </div>
              <p className="text-gray-300 text-lg">
                We are committed to operating with the highest standards of
                professionalism, transparency, and ethical responsibility. Our
                policies are structured to establish clarity and trust in every
                client relationship. By enrolling in our services, you acknowledge
                and accept these terms as a condition of engagement.
              </p>
              <p className="text-gray-300 text-lg">
                Our focus remains on delivering timely, research-driven, and
                value-oriented strategies, while ensuring fairness, accountability,
                and consistency in all aspects of our advisory process.
              </p>
            </div>
          </div>
        </section>

        {/* Data Privacy & Confidentiality Policy */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col md:flex-row items-stretch gap-6">
            {/* Left Image */}
            <div className="w-full md:w-[40%] flex">
              <img
                src={policy1}
                alt="Privacy Policy"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Right Content */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center">
                <FaLock className="text-purple-400 text-2xl mr-3" />
                <h2 className="text-2xl font-bold">
                  Data Privacy & Confidentiality Policy
                </h2>
              </div>

              <p className="text-gray-300 text-lg">
                At Behind The Profit, we value the trust you place in us and are
                committed to protecting your personal information. This policy
                outlines how we collect, use, and safeguard your data.
              </p>

              <ol className="list-decimal list-inside space-y-3 text-gray-300 text-lg">
                <li>
                  <strong>Information We Collect:</strong> Basic contact details
                  such as name, email address, and phone number; billing
                  information; any additional information shared voluntarily.
                </li>
                <li>
                  <strong>Use of Information:</strong> To provide research,
                  recommendations, and updates; process payments; communicate
                  service-related updates.
                </li>
                <li>
                  <strong>Confidentiality Assurance:</strong> Your personal and
                  financial information is strictly confidential. We do not share
                  client data with third parties for marketing.
                </li>
                <li>
                  <strong>Data Security Measures:</strong> Reasonable technical
                  measures are in place to protect your data, including secure
                  payment gateways and encryption protocols.
                </li>
                <li>
                  <strong>Third-Party Services:</strong> When third-party tools or
                  platforms are used, their privacy policies will also apply.
                </li>
                <li>
                  <strong>Policy Updates:</strong> Policy updates will be notified
                  through our website or email.
                </li>
                <li>
                  <strong>Client Responsibility:</strong> Clients should maintain
                  the confidentiality of login credentials. We are not liable for
                  unauthorized access resulting from negligence.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Policy;
