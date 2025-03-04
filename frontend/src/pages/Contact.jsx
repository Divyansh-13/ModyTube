import React, { useState } from "react";
import { Mail, MessageSquare, Send, User } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-grow relative">
        {/* Scrollable content */}
        <div className="relative min-h-screen flex items-center justify-center px-4 py-24">
          <div className="w-full max-w-2xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-4">Get in Touch</h1>
              <p className="text-gray-300">We'd love to hear from you. Send us a message!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-12 py-4 bg-black/10 backdrop-blur-lg rounded-xl
                            border border-white/20 text-white placeholder-gray-400
                            focus:outline-none focus:ring-2 focus:ring-white/30
                            transition-all duration-300"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-12 py-4 bg-black/10 backdrop-blur-lg rounded-xl
                            border border-white/20 text-white placeholder-gray-400
                            focus:outline-none focus:ring-2 focus:ring-white/30
                            transition-all duration-300"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute left-4 top-6">
                  <MessageSquare className="w-5 h-5 text-gray-400" />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-12 py-4 bg-black/10 backdrop-blur-lg rounded-xl
                            border border-white/20 text-white placeholder-gray-400
                            focus:outline-none focus:ring-2 focus:ring-white/30
                            transition-all duration-300 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-black/20 hover:bg-black/30 backdrop-blur-lg
                          rounded-xl text-white font-medium
                          transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;