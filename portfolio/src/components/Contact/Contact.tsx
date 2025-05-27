/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Success or error message

  // Handle input and textarea change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://setu-of-portfolio-server.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setStatus("Message sent!");
      } else {
        toast.error("Failed to send message.");
        setStatus("Failed to send.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
      setStatus("Something went wrong.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-32" id="contact">
      <h2 className="text-3xl font-bold mb-10 text-center text-[#6C63FF]">
        Contact<span className="text-white"> Me</span>
      </h2>
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Info Box */}
        <div className="w-[40%] flex items-center justify-center">
          <div className="w-full space-y-8 border border-[#6C63FF] p-6">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="bg-[#6C63FF] p-3 rounded">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Location:</h3>
                <p className="text-sm">Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-[#6C63FF] p-3 rounded">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email:</h3>
                <p className="text-sm break-words">
                  abidahmedmahin21@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-[#6C63FF] p-3 rounded">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">WhatsApp or Call:</h3>
                <p className="text-sm">+8801761332232</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 text-2xl mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="hover:text-blue-500" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="hover:text-sky-400" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <BsGithub className="hover:text-sky-400" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-[60%]">
          <form
            className="w-full max-w-3xl space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black border border-[#6C63FF] rounded outline-none text-white"
                  placeholder="Type your name"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black border border-[#6C63FF] rounded outline-none text-white"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-1">Your Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black border border-[#6C63FF] rounded outline-none text-white"
                placeholder="Your Phone Number"
              />
            </div>

            <div>
              <label className="block mb-1">Message</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black border border-[#6C63FF] rounded outline-none text-white"
                placeholder="Write your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-4 py-2 rounded border-2 border-[#6C63FF] font-semibold bg-transparent hover:bg-[#6C63FF] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
            <p className="mt-2 text-white">{status}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

