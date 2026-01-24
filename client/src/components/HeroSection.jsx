import React from "react";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaRocket,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const HeroSection = () => {
  const socialLinks = [
    {
      icon: (
        <FaLinkedin className="w-6 h-6 text-blue-600 hover:text-blue-400" />
      ),
      href: "https://www.linkedin.com/in/anil-tadvi-238b592a7",
    },
    {
      icon: <FaGithub className="w-6 h-6 text-gray-400 hover:text-white" />,
      href: "https://github.com/aniltadvi20",
    },
    {
      icon: <FaTwitter className="w-6 h-6 text-sky-400 hover:text-sky-300" />,
      href: "https://x.com/AnilTadviSec",
    },
  ];

  return (
    <div className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-black text-gray-200">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Profile Image (mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:hidden flex justify-center mb-6"
        >
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#33FF33]">
            <img
              src={assets.Profile}
              alt="Anil Tadvi"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#33FF33]">
            Anil Tadvi
          </h1>

          <p className="text-xl md:text-2xl text-gray-300">
            Red Team · Web Application Security
          </p>

          <p className="text-md text-gray-400 max-w-xl">
            Focused on identifying real-world vulnerabilities in modern web applications
            through offensive security testing and bug bounty research.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 border border-[#33FF33] text-[#33FF33]
              hover:bg-[#33FF33] hover:text-[#0A192F]
              transition-all duration-300 rounded-lg
              flex items-center space-x-2"
            >
              <FaRocket />
              <span>Projects</span>
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 bg-[#33FF33] text-[#0A192F]
              hover:bg-opacity-80 transition-all duration-300
              rounded-lg flex items-center space-x-2"
            >
              <FaShieldAlt />
              <span>Contact</span>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex space-x-5 pt-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Profile Image (desktop) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex justify-center"
        >
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-[#33FF33]">
            <img
              src={assets.Profile}
              alt="Anil Tadvi"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default HeroSection;
