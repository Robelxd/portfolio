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

  const contactInfoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <section
      id="contact"
      className="px-6 py-16 text-white md:px-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <Toaster position="top-right" />
      <div className="container mx-auto text-center">
        <motion.h2
          className="mb-8 text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let's Connect!
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Left Panel */}
          <motion.div
            className="p-6 bg-gray-800 border border-gray-700 border-solid shadow-lg rounded-2xl backdrop-blur-lg bg-opacity-30"
            variants={contactInfoVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.03 }}
          >
            <div className="mb-6 space-y-4 text-left">
              <p className="flex items-start text-lg font-medium text-gray-300">
                <FaEnvelope className="mr-3 text-2xl text-blue-400 drop-shadow-md" />
                robeldoba8@gmail.com
              </p>
              <p className="flex items-start text-lg font-medium text-gray-300">
                <FaPhone className="mr-3 text-2xl text-green-400 drop-shadow-md" />
                +251 933621793
              </p>
              <p className="flex items-start text-lg font-medium text-gray-300">
                <FaMapMarkerAlt className="mr-3 text-2xl text-red-400 drop-shadow-md" />
                Addis Ababa, Ethiopia
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-700 border-solid">
              <p className="flex items-center mb-2 text-lg font-semibold text-cyan-400">
                <FaQuoteLeft className="mr-2" />
                "Connecting ideas through clean code and meaningful design."
              </p>
              <p className="text-sm text-gray-400">
                I build modern web experiences that inspire. Let’s bring your ideas to life!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={sendEmail}
            className="p-6 space-y-4 bg-gray-800 border border-gray-700 border-solid shadow-lg rounded-2xl backdrop-blur-lg bg-opacity-30"
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 text-white bg-gray-700 bg-opacity-50 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 text-white bg-gray-700 bg-opacity-50 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 text-white bg-gray-700 bg-opacity-50 rounded-lg outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>

            <motion.button
              type="submit"
              className="flex items-center justify-center w-full py-3 font-semibold text-white transition duration-300 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600"
              variants={buttonVariants}
              whileHover="hover"
            >
              {loading ? "Sending..." : (
                <>
                  <FaPaperPlane className="mr-2" /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
