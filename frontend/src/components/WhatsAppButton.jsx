// src/components/WhatsAppButton.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919667384928";

  return (
    <Link
      to={`https://wa.me/${phoneNumber}`}
      rel="noopener noreferrer"
      className="fixed bottom-10 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 z-50"
    >
      <FaWhatsapp size={30} />
    </Link>
  );
};

export default WhatsAppButton;
