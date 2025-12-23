import React, { useState } from "react";
import { FcPrivacy } from "react-icons/fc";
import axios from "axios";

const ContactUs = () => {
  const [contactdata, setcontactdata] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, seterrors] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (value.trim().length < 3)
          return "Name must be at least 3 characters long.";
        break;
      case "email":
        if (!/^\S+@\S+\.\S+$/.test(value))
          return "Please enter a valid email address.";
        break;
      case "number":
        if (!/^\d{10}$/.test(value))
          return "Phone number must be exactly 10 digits.";
        break;
      case "message":
        if (value.trim().length > 200)
          return "Message cannot exceed 200 characters.";
        break;
      default:
        return "";
    }
    return "";
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setcontactdata({ ...contactdata, [name]: value });
    const errorMsg = validateField(name, value);
    seterrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handledata = async (e) => {
    e.preventDefault();
    let newErrors = {};
    Object.keys(contactdata).forEach((field) => {
      const error = validateField(field, contactdata[field]);
      if (error) newErrors[field] = error;
    });
    if (Object.keys(newErrors).length > 0) {
      seterrors(newErrors);
      return;
    }
    try {
      setLoading(true);
      setStatus("");
      await axios.post(
        "https://backendportal-763b.onrender.com/contact/contactinfo",
        contactdata
      );
      setStatus("✅ Get a callback from our research team within 24 hours!");
      setcontactdata({ name: "", email: "", number: "", message: "" });
      seterrors({});
    } catch (err) {
      console.error("Error:", err);
      setStatus(
        err.response?.data?.msg || "❌ Failed to send message. Try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
  <section className="relative w-full flex flex-col items-center justify-center px-3 sm:px-6 py-10">
    {/* Heading */}
    <h1 className="text-center text-[23px] sm:text-[35px] font-bold text-yellow-400">
      Contact Us
    </h1>
    <p className="text-center text-gray-300 text-sm sm:text-base mt-2 mb-8 max-w-xl">
      Get a callback from our research team within <span className="text-yellow-400 font-semibold">24 hours</span>.
    </p>

    {/* Form Card */}
    <div className="w-full max-w-md sm:max-w-lg">
      <form
        onSubmit={handledata}
        className="bg-black/60 backdrop-blur-md border border-white/15 
        rounded-2xl shadow-2xl p-5 sm:p-7 space-y-4 text-white"
      >
        {/* Name */}
        <div>
          <label className="block mb-1 text-sm font-medium">Your Name</label>
          <input
            type="text"
            name="name"
            value={contactdata.name}
            onChange={handlechange}
            className="w-full bg-white text-gray-900 border border-gray-300 
            rounded-lg px-3 py-2 text-sm outline-none
            focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition"
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-sm font-medium">Your Email</label>
          <input
            type="email"
            name="email"
            value={contactdata.email}
            onChange={handlechange}
            className="w-full bg-white text-gray-900 border border-gray-300 
            rounded-lg px-3 py-2 text-sm outline-none
            focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition"
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Number */}
        <div>
          <label className="block mb-1 text-sm font-medium">Mobile Number</label>
          <input
            type="tel"
            name="number"
            value={contactdata.number}
            onChange={handlechange}
            className="w-full bg-white text-gray-900 border border-gray-300 
            rounded-lg px-3 py-2 text-sm outline-none
            focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition"
            placeholder="10-digit mobile number"
          />
          {errors.number && <p className="text-red-500 text-xs mt-1">{errors.number}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 text-sm font-medium">Your Message</label>
          <textarea
            name="message"
            value={contactdata.message}
            onChange={handlechange}
            className="w-full bg-white text-gray-900 border border-gray-300 
            rounded-lg px-3 py-2 text-sm h-28 outline-none
            focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition"
            placeholder="How can we help you?"
          />
          <p className="text-xs text-gray-400 text-right mt-1">
            {contactdata.message.length}/200
          </p>
          {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
        </div>

        {/* Status */}
        {status && (
          <p className="text-center text-sm font-medium text-green-400">
            {status}
          </p>
        )}

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-linear-to-r from-yellow-500 to-yellow-400 
          text-black py-3 rounded-lg text-sm font-semibold
          transition hover:scale-[1.02] hover:shadow-lg disabled:opacity-50"
        >
          {loading ? "Requesting..." : "Request Callback"}
        </button>

        {/* Privacy */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-400 pt-2">
          <FcPrivacy className="text-lg" />
          <span>
            Your information is 100% confidential. We never share your data.
          </span>
        </div>
      </form>
    </div>
  </section>
);

};

export default ContactUs;
