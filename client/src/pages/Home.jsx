import React from "react";
import { FaShieldAlt, FaCode, FaBug } from "react-icons/fa";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";

const Home = () => {
  const expertiseAreas = [
    {
      icon: <FaShieldAlt className="text-green-500 w-12 h-12" />,
      title: "Red Team Operations",
      description:
        "Advanced offensive security techniques and adversarial simulations",
    },
    {
      icon: <FaBug className="text-red-500 w-12 h-12" />,
      title: "Bug Bounty",
      description:
        "Identifying and reporting critical vulnerabilities across platforms",
    },
    {
      icon: <FaCode className="text-blue-500 w-12 h-12" />,
      title: "Web Security",
      description: "Comprehensive web application security assessments",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-[#0A192F] text-[#8892B0] w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Penetration Testing CTA */}
      <div className="w-full py-16 bg-[#0A192F] text-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#112240] border border-[#233554] rounded-xl p-8 text-center"
          >
            <FaShieldAlt className="text-[#33FF33] w-12 h-12 mx-auto mb-4" />

            <h2 className="text-2xl md:text-3xl font-bold text-[#33FF33] mb-4">
              Security Assessment & Penetration Testing
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              Professional web application security assessments focused on
              identifying real-world vulnerabilities and improving overall
              security posture.
            </p>

            <div className="text-sm text-gray-400 mb-6">
              For legitimate and authorized security testing requests only.
            </div>

            <a
              href="mailto:contact@aniltadvi.com"
              className="inline-block px-6 py-3 border border-[#33FF33] text-[#33FF33]
              hover:bg-[#33FF33] hover:text-[#0A192F]
              transition-all duration-300 rounded-lg font-medium"
            >
              Request Security Assessment
            </a>
          </motion.div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="w-full py-16 bg-gradient-to-br from-black to-gray-900 text-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#0A192F] p-6 rounded-lg text-center 
                transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-[#33FF33] mb-3">
                  {area.title}
                </h3>
                <p className="text-sm">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
