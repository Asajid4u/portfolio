
"use client";

import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-6xl w-full mx-auto ">

      {/* Heading */}
      <div className="text-center mr-80 mb-20 pt-20">
        <p className="text-blue-400 text-sm tracking-wider">
          Get in Touch
        </p>
        <h2 className="text-4xl font-bold">
          Contact <span className="text-blue-400">Me</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* Contact Info */}
        <div className="space-y-10">

          <div className="flex items-center gap-5">
            <div className="bg-blue-500 p-4 rounded-full">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="text-gray-400">Asajid4u@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="bg-blue-500 p-4 rounded-full">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <p className="text-gray-400">+91 95603 55251</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="bg-blue-500 p-4 rounded-full">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Location</h4>
              <p className="text-gray-400">New Delhi, India</p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl space-y-6 -mt-20 "
        >

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Your Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full font-medium transition shadow-lg shadow-blue-500/30"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}