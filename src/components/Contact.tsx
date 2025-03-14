import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ sent: false, error: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("service_id", "template_id", e.currentTarget, "user_id")
      .then(() => setStatus({ sent: true, error: false }))
      .catch(() => setStatus({ sent: false, error: true }));

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 px-32 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-4xl text-green-500 font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div 
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-blue-400 text-3xl mr-4" />
              <p className="text-gray-400">robeldoba8@gmail.com</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-green-400 text-3xl mr-4" />
              <p className="text-gray-400">+251 933621793</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-red-400 text-3xl mr-4" />
              <p className="text-gray-400">Addis Ababa, Ethiopia</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            onSubmit={sendEmail}
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>

            <motion.button 
              type="submit" 
              className="w-full flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaPaperPlane className="mr-2" /> Send Message
            </motion.button>

            {status.sent && <p className="text-green-400 mt-2">Message Sent Successfully!</p>}
            {status.error && <p className="text-red-400 mt-2">Failed to send message.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
