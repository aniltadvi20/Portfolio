import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaShieldAlt,
  FaBug,
} from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />,
      href: "https://github.com/aniltadvi20",
      aria: "GitHub",
    },
    {
      icon: <FaLinkedin className="w-6 h-6 text-blue-500 hover:text-blue-400 transition-colors" />,
      href: "https://www.linkedin.com/in/anil-tadvi-238b592a7",
      aria: "LinkedIn",
    },
    {
      icon: <FaTwitter className="w-6 h-6 text-sky-400 hover:text-sky-300 transition-colors" />,
      href: "https://x.com/AnilTadviSec",
      aria: "X (Twitter)",
    },
    {
      icon: <SiTryhackme className="w-6 h-6 text-red-500 hover:text-red-400 transition-colors" />,
      href: "https://tryhackme.com/p/stackraid",
      aria: "TryHackMe",
    },
  ];

  return (
    <footer className="bg-[#0A192F] text-[#8892B0] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Identity */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-[#33FF33]">
              Anil Tadvi
            </h3>

            <p className="text-sm text-[#64ffda]">
              Red Team | Web Application Security
            </p>

            <p className="text-sm leading-relaxed">
              Focused on real-world web application vulnerabilities and offensive security testing.
            </p>

            <Link
              to="/contact"
              className="inline-block mt-2 px-4 py-2 border border-[#33FF33] 
              text-[#33FF33] hover:bg-[#33FF33] hover:text-[#0A192F]
              transition-all duration-300 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Focus Areas */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-[#33FF33]">
              Focus Areas
            </h4>

            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaShieldAlt className="text-green-500" />
                <span className="text-sm">Offensive Security</span>
              </li>

              <li className="flex items-center space-x-3">
                <FaBug className="text-red-500" />
                <span className="text-sm">Web Application Security</span>
              </li>

              <li className="flex items-center space-x-3">
                <FaBug className="text-yellow-500" />
                <span className="text-sm">Bug Bounty Research</span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-[#33FF33]">
              Connect
            </h4>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.aria}
                  className="transform hover:scale-110 transition-transform"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="bg-[#112240] p-4 rounded-md">
              <p className="text-xs">
                Public profiles listed for verification and professional contact.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#112240] text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Anil Tadvi
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
