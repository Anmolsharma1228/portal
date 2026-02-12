import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Pin } from 'lucide-react';

const faqs = [
  { question: "Do you provide both short-term and long-term investment tips?", answer: "Yes, we offer strategies for traders as well as long-term investors." },
  { question: "How safe are your recommendations?", answer: "Our insights are research-based and risk-managed, but all investments carry market risks." },
  { question: "Can beginners also join?", answer: "Absolutely! We simplify investing so even first-time investors can grow confidently." },
  { question: "Do we provide separate plans for both the long term and the short term?", answer: "Yes, we have tailored plan based on your traiding stylr, risk apetite. You can choose both depending on your goal." },
  { question: "Do you porvide personal support?", answer: "Yes, we provide one to one support in premium plan." }
];

const Frequently = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-white mt-14">
      <h2 className="text-[#020617] flex justify-center gap-4 text-3xl font-bold text-center mb-6"><Pin className=' size-10 rotate-45'/> Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 py-4">
          <div
            onClick={() => toggle(index)}
            className="flex justify-between items-center cursor-pointer text-[#020617]"
          >
            <h3 className="text-lg font-medium">{faq.question}</h3>
            {openIndex === index ? <FaMinus className="w-5 h-5" /> : <FaPlus className="w-5 h-5" />}
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-[#16A085]">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Frequently;
