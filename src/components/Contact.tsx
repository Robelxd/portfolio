import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ sent: false, error: false, loading: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ sent: false, error: false, loading: true });

    emailjs
      .sendForm(
        "default_service", // ✅ Replace with your actual EmailJS Service ID
        "template_cqvxiom", // ✅ Replace with your EmailJS Template ID
        e.currentTarget,
        "LsXSIET5YUTmDb0BN" // ✅ Replace with your Public Key from EmailJS
      )
      .then(() => setStatus({ sent: true, error: false, loading: false }))
      .catch(() => setStatus({ sent: false, error: true, loading: false }));

    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const inputVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 0.1 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <section id="contact" className="px-6 py-16 text-white md:px-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
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
          {/* Contact Info */}
          <motion.div
            className="p-6 bg-gray-800 border border-gray-700 border-solid shadow-lg rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-30"
            variants={contactInfoVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
          >
            <div className="flex items-center mb-4">
              <FaEnvelope className="mr-4 text-3xl text-blue-400 drop-shadow-md" />
              <p className="text-gray-300">robeldoba8@gmail.com</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="mr-4 text-3xl text-green-400 drop-shadow-md" />
              <p className="text-gray-300">+251 933621793</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-4 text-3xl text-red-400 drop-shadow-md" />
              <p className="text-gray-300">Addis Ababa, Ethiopia</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={sendEmail}
            className="p-6 space-y-4 bg-gray-800 border border-gray-700 border-solid shadow-lg rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-30"
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={inputVariants} initial="initial" animate="animate">
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
            </motion.div>

            <motion.button
              type="submit"
              className="flex items-center justify-center w-full py-3 font-semibold text-white transition duration-300 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600"
              variants={buttonVariants}
              whileHover="hover"
            >
              {status.loading ? "Sending..." : (
                <>
                  <FaPaperPlane className="mr-2" /> Send Message
                </>
              )}
            </motion.button>

            {status.sent && <p className="mt-2 text-green-400">✅ Message Sent Successfully!</p>}
            {status.error && <p className="mt-2 text-red-400">❌ Failed to send message. Try again.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}