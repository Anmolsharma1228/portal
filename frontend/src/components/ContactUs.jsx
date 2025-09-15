import React, { useState } from "react";
import { Parallax } from "react-parallax";
import cbg from "../assets/Images/cbg.jpg";
import axios from "axios";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Update form values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (form.name.length < 3) {
      setError("Name must be at least 3 characters");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Invalid email address");
      return;
    }
    if (form.number.length !== 10) {
      setError("Phone number must be 10 digits");
      return;
    }
    if (form.message.length > 50) {
      setError("Message cannot exceed 50 characters");
      return;
    }

    setError(""); // clear previous errors
    setLoading(true);

    try {
      const res = await axios.post(
        "https://backendportal-763b.onrender.com/contact/contactinfo",
        form
      );
      console.log("Success:", res.data);
      alert("Message sent successfully!");

      // Reset form
      setForm({ name: "", email: "", number: "", message: "" });
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={cbg}
      strength={300}
      className="min-h-screen"
    >
      <div className="min-h-screen flex items-center justify-center bg-black/50 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 p-6 sm:p-8 rounded-2xl shadow-2xl max-w-lg w-full space-y-4"
        >
          <h1 className="text-center text-3xl font-bold text-blue-600 mb-4">
            Contact Us
          </h1>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="number"
            placeholder="Your Number"
            className="w-full border p-3 rounded-lg"
            value={form.number}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg h-32"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white py-3 rounded-lg font-semibold cursor-pointer"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </Parallax>
  );
};

export default ContactUs;
