import React from "react";
import { FaShieldAlt, FaHandshake, FaLock } from "react-icons/fa";

const Policy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-[#0f172a] to-black py-12 px-4 sm:px-6 lg:px-20 text-white">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Our Policies
        </h1>

        {/* No Refund Policy */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-4">
            <FaShieldAlt className="text-green-400 text-2xl mr-3" />
            <h2 className="text-2xl font-bold">No Refund Policy</h2>
          </div>
          <p className="text-gray-300 mb-3">
            All subscriptions and services offered by our platform are final and non-refundable. 
            Given the nature of financial advisory and market research, once access to our insights, strategies, 
            or recommendations has been provided, we cannot offer cancellations, refunds, or credits under any circumstances.
          </p>
          <p className="text-gray-300">
            We strongly advise clients to carefully evaluate our service offerings and ensure they align with their investment objectives before subscribing.
          </p>
        </section>

        {/* Commitment to Quality */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-4">
            <FaHandshake className="text-blue-400 text-2xl mr-3" />
            <h2 className="text-2xl font-bold">Commitment to Quality</h2>
          </div>
          <p className="text-gray-300 mb-3">
            We are committed to operating with the highest standards of professionalism, transparency, and ethical responsibility. 
            Our policies are structured to establish clarity and trust in every client relationship. By enrolling in our services, 
            you acknowledge and accept these terms as a condition of engagement.
          </p>
          <p className="text-gray-300">
            Our focus remains on delivering timely, research-driven, and value-oriented strategies, while ensuring fairness, accountability, 
            and consistency in all aspects of our advisory process.
          </p>
        </section>

        {/* Data Privacy & Confidentiality Policy */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-4">
            <FaLock className="text-purple-400 text-2xl mr-3" />
            <h2 className="text-2xl font-bold">Data Privacy & Confidentiality Policy</h2>
          </div>
          <p className="text-gray-300 mb-4">
            At Behind The Profit, we value the trust you place in us and are committed to protecting your personal information. 
            This policy outlines how we collect, use, and safeguard your data.
          </p>

          <ol className="list-decimal list-inside space-y-3 text-gray-300">
            <li>
              <strong>Information We Collect:</strong> Basic contact details such as name, email address, and phone number; billing information; any additional information shared voluntarily.
            </li>
            <li>
              <strong>Use of Information:</strong> To provide research, recommendations, and updates; process payments; communicate service-related updates.
            </li>
            <li>
              <strong>Confidentiality Assurance:</strong> Your personal and financial information is strictly confidential. We do not share client data with third parties for marketing.
            </li>
            <li>
              <strong>Data Security Measures:</strong> Reasonable technical measures are in place to protect your data, including secure payment gateways and encryption protocols.
            </li>
            <li>
              <strong>Third-Party Services:</strong> When third-party tools or platforms are used, their privacy policies will also apply.
            </li>
            <li>
              <strong>Policy Updates:</strong> Policy updates will be notified through our website or email.
            </li>
            <li>
              <strong>Client Responsibility:</strong> Clients should maintain the confidentiality of login credentials. We are not liable for unauthorized access resulting from negligence.
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Policy;
