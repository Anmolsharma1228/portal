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

  const [errors, seterrors] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;

    if (name === "name" && value.trim().length < 3) {
      seterrors((prev) => ({ ...prev, name: "Name must be at least 3 characters long." }));
    } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      seterrors((prev) => ({ ...prev, email: "Please enter a valid email address." }));
    } else if (name === "number" && value.length !== 10) {
      seterrors((prev) => ({ ...prev, number: "Phone number must be exactly 10 digits." }));
    } else if (name === "message" && value.length > 50) {
      seterrors((prev) => ({ ...prev, message: "Message cannot exceed 50 characters." }));
    } else {
      seterrors((prev) => ({ ...prev, [name]: "" }));
    }

    setcontactdata({ ...contactdata, [name]: value });
  };

  const handledata = async (e) => {
    e.preventDefault();

    // simple validations
    if (!contactdata.name || errors.name) {
      alert("Please provide a valid name.");
      return;
    }
    if (!contactdata.email || errors.email) {
      alert("Please provide a valid email.");
      return;
    }
    if (!contactdata.number || errors.number) {
      alert("Please provide a valid number.");
      return;
    }

    try {
      const res = await axios.post(
        "https://backendportal-763b.onrender.com/contact/contactinfo",
        contactdata
      );
      console.log("✅ Success:", res.data);
      alert("Message sent successfully!");

      // reset form
      setcontactdata({ name: "", email: "", number: "", message: "" });
    } catch (err) {
      console.error("❌ Error:", err);
      alert("Failed to send message. Try again later.");
    }
  };

  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={cbg}
      bgImageAlt="contact us background"
      strength={300}
      className="min-h-screen"
    >
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-black/50 py-8">
        <h1 className="text-center text-4xl sm:text-5xl font-bold mb-10 text-yellow-400">
          Contact Us
        </h1>

        <div className="w-full max-w-lg">
          <form
            onSubmit={handledata}
            className="bg-gray-200/95 text-gray-900 p-6 sm:p-8 rounded-2xl shadow-2xl w-full space-y-4"
          >
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                className="bg-white w-full border p-3 rounded-lg outline-none"
                value={contactdata.name}
                onChange={handlechange}
                required
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Your Email</label>
              <input
                type="email"
                name="email"
                className="bg-white w-full border p-3 rounded-lg outline-none"
                value={contactdata.email}
                onChange={handlechange}
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Number */}
            <div>
              <label className="block mb-1 font-medium">Your Number</label>
              <input
                type="tel"
                name="number"
                className="bg-white w-full border p-3 rounded-lg outline-none"
                value={contactdata.number}
                onChange={handlechange}
                required
              />
              {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 font-medium">Your Message</label>
              <textarea
                name="message"
                className="bg-white w-full border p-3 rounded-lg h-32 sm:h-40 outline-none"
                value={contactdata.message}
                onChange={handlechange}
                required
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white py-3 rounded-lg font-semibold transition hover:opacity-90 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Parallax>
  );
};

export default ContactUs;
