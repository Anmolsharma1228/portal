import React, { useState } from "react";
import { Parallax } from "react-parallax";
import cbg from "../assets/Images/cbg.jpg";
import axios from "axios";

const ContactUs = () => {
  const [contactdata, setcontactdata] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, seterrors] = useState({});
  const [status, setStatus] = useState(""); // ✅ success/error message
  const [loading, setLoading] = useState(false); // ✅ loading state

  // Validation function
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

    // validate on change
    const errorMsg = validateField(name, value);
    seterrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handledata = async (e) => {
    e.preventDefault();

    // Final validation before submit
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

      const res = await axios.post(
        "https://backendportal-763b.onrender.com/contact/contactinfo",
        contactdata
      );

      setStatus("✅ Message sent successfully!");
      setcontactdata({ name: "", email: "", number: "", message: "" }); // reset form
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
    // <Parallax
    //   blur={{ min: -15, max: 15 }}
    //   bgImage={cbg}
    //   bgImageAlt="contact us background"
    //   strength={300}
    //   className="min-h-screen"
    // >
   <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white">
  <h1 className="text-center text-2xl sm:text-4xl font-bold mb-4 sm:mb-8 text-yellow-400">
    Contact Us
  </h1>

  <div className="w-full sm:max-w-lg">
    <form
      onSubmit={handledata}
      className="backdrop-blur-md bg-white/50 text-gray-900 p-2 sm:p-6 rounded-none sm:rounded-xl shadow-xl w-full space-y-3"
    >
      {/* Name */}
      <div>
        <label className="block mb-1 text-sm font-medium">Your Name</label>
        <input
          type="text"
          name="name"
          className="bg-white w-full border p-2 rounded-none sm:rounded-md text-sm outline-none"
          value={contactdata.name}
          onChange={handlechange}
          required
        />
        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block mb-1 text-sm font-medium">Your Email</label>
        <input
          type="email"
          name="email"
          className="bg-white w-full border p-2 rounded-none sm:rounded-md text-sm outline-none"
          value={contactdata.email}
          onChange={handlechange}
          required
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </div>

      {/* Number */}
      <div>
        <label className="block mb-1 text-sm font-medium">Your Number</label>
        <input
          type="tel"
          name="number"
          className="bg-white w-full border p-2 rounded-none sm:rounded-md text-sm outline-none"
          value={contactdata.number}
          onChange={handlechange}
          required
        />
        {errors.number && <p className="text-red-500 text-xs">{errors.number}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block mb-1 text-sm font-medium">Your Message</label>
        <textarea
          name="message"
          className="bg-white w-full border p-2 rounded-none sm:rounded-md text-sm h-24 outline-none"
          value={contactdata.message}
          onChange={handlechange}
          required
        />
        {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
      </div>

      {/* Status */}
      {status && <p className="text-center text-sm font-medium">{status}</p>}

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white py-2 rounded-none sm:rounded-md text-sm font-semibold transition hover:opacity-90 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  </div>
</div>


    // {/* </Parallax> */}
  );
};

export default ContactUs;
  