import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaShieldAlt,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/anil-tadvi-238b592a7",
      color: "text-blue-600",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/aniltadvi20",
      color: "text-gray-400",
    },
    {
      icon: <FaTwitter />,
      url: "https://x.com/AnilTadviSec",
      color: "text-sky-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#33FF33] mb-4">
            Contact
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            For professional collaboration, security research discussion,
            or responsible disclosure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT — CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#0A192F] rounded-xl p-8 h-fit"
          >
            <h2 className="text-2xl font-bold text-[#33FF33] mb-6">
              Contact Approach
            </h2>

            <div className="space-y-6">

              <div className="flex items-start space-x-4">
                <FaShieldAlt className="text-green-500 text-2xl mt-1" />
                <div>
                  <p className="text-gray-400">Professional Communication</p>
                  <p className="text-gray-200">
                    Preferred contact through verified professional channels.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-green-500 text-2xl mt-1" />
                <div>
                  <p className="text-gray-400">Secure Contact</p>
                  <p className="text-gray-200">
                    For responsible disclosure or collaboration:
                  </p>
                  <p className="text-[#33FF33] mt-1 font-medium">
                    contact@aniltadvi.com
                  </p>
                </div>
              </div>

            </div>

            {/* Social */}
            <div className="mt-8 flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-3xl ${social.color} hover:scale-110 transition-transform`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#0A192F] rounded-xl p-8 space-y-6"
            >
              <div>
                <label className="block text-gray-400 mb-2">Full Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#112240] rounded-lg px-4 py-3 border border-[#233554]
                  focus:outline-none focus:ring-2 focus:ring-[#33FF33]"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">
                  Professional Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#112240] rounded-lg px-4 py-3 border border-[#233554]
                  focus:outline-none focus:ring-2 focus:ring-[#33FF33]"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Subject</label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#112240] rounded-lg px-4 py-3 border border-[#233554]
                  focus:outline-none focus:ring-2 focus:ring-[#33FF33]"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#112240] rounded-lg px-4 py-3 border border-[#233554]
                  focus:outline-none focus:ring-2 focus:ring-[#33FF33]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#33FF33] text-black py-3 rounded-lg font-bold
                flex items-center justify-center gap-2 hover:bg-[#33FF33]/90"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
