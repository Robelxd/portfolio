"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaQuoteLeft } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_tmqo6so",
        "template_esodoxd",
        e.currentTarget,
        "9hkDQsx0SMoA5zfEM"
      );
      toast.success("✅ Message sent successfully!");
    } catch (err) {
      toast.error("❌ Failed to send message. Try again.");
    } finally {
      setLoading(false);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      className="relative px-6 py-24 overflow-hidden text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <Toaster position="top-right" />

      {/* Decorative Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full w-96 h-96 bg-blue-400/10 blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-purple-400/10 blur-3xl animate-pulse"></div>
      </div>

      <div className="container relative mx-auto text-center">
        <motion.h2
          className="mb-12 text-5xl font-extrabold text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let's Connect
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Panel */}
          <motion.div
            className="p-8 border border-gray-700 border-solid shadow-xl bg-gray-800/80 backdrop-blur-lg rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="space-y-6 text-left">
              <p className="flex items-center text-lg font-medium text-gray-300">
                <FaEnvelope className="mr-3 text-xl text-blue-400 animate-bounce" />
                robeldoba8@gmail.com
              </p>
              <p className="flex items-center text-lg font-medium text-gray-300">
                <FaPhone className="mr-3 text-xl text-green-400 animate-bounce" />
                +251 933621793
              </p>
              <p className="flex items-center text-lg font-medium text-gray-300">
                <FaMapMarkerAlt className="mr-3 text-xl text-red-400 animate-bounce" />
                Addis Ababa, Ethiopia
              </p>

              <div className="pt-6 mt-6 border-t border-gray-700 border-solid">
                <p className="flex items-center mb-2 text-lg font-semibold text-cyan-400">
                  <FaQuoteLeft className="mr-2 animate-pulse" />
                  "Connecting ideas through clean code and meaningful design."
                </p>
                <p className="text-sm text-gray-400">
                  I build modern web experiences that inspire. Let’s bring your ideas to life!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={sendEmail}
            className="p-8 space-y-5 border border-gray-700 border-solid shadow-xl bg-gray-800/80 backdrop-blur-lg rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 text-white bg-gray-700 bg-opacity-50 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              whileFocus={{ scale: 1.01 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 text-white bg-gray-700 bg-opacity-50 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
              whileFocus={{ scale: 1.01 }}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 text-white bg-gray-700 bg-opacity-50 rounded-lg outline-none focus:ring-2 focus:ring-red-500"
              whileFocus={{ scale: 1.01 }}
            ></motion.textarea>

            <motion.button
              type="submit"
              className="flex items-center justify-center w-full py-3 font-semibold text-white transition duration-300 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-green-400 hover:to-blue-500"
              whileHover={{ scale: 1.05 }}
            >
              {loading ? "Sending..." : (
                <>
                  <FaPaperPlane className="mr-2 animate-fade-in-up" /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
