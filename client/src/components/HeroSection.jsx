import React from "react";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaRocket,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

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
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-10"></div>

      <div className="relative z-20 w-full max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold text-[#33FF33] drop-shadow-[0_0_10px_#33FF33]">
            Anil Tadvi
          </h1>

          {/* Headline */}
          <p className="text-xl md:text-2xl text-gray-300">
            Offensive Security Researcher | Bug Bounty Hunter
          </p>

          {/* Description */}
          <p className="text-md text-gray-400 max-w-2xl leading-relaxed">
            Identifying real-world vulnerabilities in modern web applications
            through offensive security testing and bug bounty research.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-2">
            
            {/* Primary */}
            <Link
              to="/projects"
              className="px-6 py-3 bg-[#33FF33] text-[#0A192F]
              hover:bg-opacity-80 transition-all duration-300 rounded-lg
              flex items-center space-x-2 shadow-md"
            >
              <FaRocket />
              <span>Projects</span>
            </Link>

            {/* Secondary */}
            <a
              href="/Anil_Tadvi_Offensive_Security_Resume.pdf"
              download
              className="px-6 py-3 border border-[#33FF33] text-[#33FF33]
              hover:bg-[#33FF33] hover:text-[#0A192F]
              transition-all duration-300 rounded-lg
              flex items-center space-x-2"
            >
              <FaDownload />
              <span>Download Resume</span>
            </a>

            {/* Tertiary (FIXED) */}
            <Link
              to="/contact"
              className="px-6 py-3 border border-gray-500 text-gray-300
              hover:border-white hover:text-white
              transition-all duration-300 rounded-lg
              flex items-center space-x-2"
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
      </div>
    </div>
  );
};

export default HeroSection;
