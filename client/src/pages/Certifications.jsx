import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCertificate,
  FaAward,
  FaCheckCircle,
  FaLink,
  FaShieldAlt,
  FaTimes,
} from "react-icons/fa";

const Certifications = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);

  const certifications = [
    // ======================
    // OSCP (Pursuing)
    // ======================
    {
      title: "Offensive Security Certified Professional (OSCP)",
      issuer: "Offensive Security",
      date: "In Progress",
      description:
        "Advanced hands-on penetration testing certification focused on real-world attack techniques, exploitation, privilege escalation, and professional security methodology.",
      icon: <FaShieldAlt />,
      status: "Pursuing",
      badgeColor: "bg-yellow-500",
      details: [
        "Hands-on penetration testing methodology",
        "Linux and Windows privilege escalation",
        "Web application exploitation",
        "Real-world attack simulation",
      ],
      verificationLink: "https://www.offensive-security.com/verify",
    },

    // ======================
    // CCEP (COMPLETED)
    // ======================
    {
      title: "Certified Cybersecurity Educator Professional (CCEP)",
      issuer: "Red Team Leaders",
      date: "November 2025",
      description:
        "Professional cybersecurity certification validating strong understanding of security fundamentals, offensive security concepts, attack techniques, and structured cybersecurity knowledge.",
      icon: <FaCertificate />,
      status: "Completed",
      badgeColor: "bg-green-600",
      details: [
        "Strong foundation in cybersecurity principles",
        "Understanding of offensive and defensive security concepts",
        "Structured approach to security learning and methodology",
        "Recognition of professional cybersecurity competency",
      ],
      verificationLink:
        "https://courses.redteamleaders.com/exam-completion/2c70d277a29cc072",
    },

    // ======================
    // GOOGLE / COURSERA
    // ======================
    {
      title: "Foundations of Cybersecurity",
      issuer: "Google / Coursera",
      date: "2025",
      description:
        "Foundational cybersecurity certificate covering core security concepts, attack types, security ethics, and commonly used analyst tools.",
      icon: <FaAward />,
      status: "Completed",
      badgeColor: "bg-blue-600",
      details: [
        "Cybersecurity fundamentals and concepts",
        "Common attack techniques and threat types",
        "Security ethics and responsibilities",
        "Introduction to security tools and workflows",
      ],
      verificationLink:
        "https://coursera.org/share/a9182085a884e6daf4fccd1c10c138cb",
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
            Professional Certifications
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Verified certifications demonstrating structured cybersecurity knowledge and professional growth
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              onClick={() => setSelectedCertification(cert)}
              className="cursor-pointer bg-[#112240] rounded-xl p-6 hover:scale-105 transition transform hover:shadow-lg hover:shadow-[#33FF33]/20"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl text-green-500 opacity-80">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-400">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-500">{cert.issuer}</p>
                </div>
              </div>

              <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                {cert.description}
              </p>

              <div className="flex justify-end">
                <span
                  className={`px-3 py-1 text-xs rounded-full font-bold text-white ${cert.badgeColor}`}
                >
                  {cert.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCertification && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
              onClick={() => setSelectedCertification(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-gray-800 rounded-xl max-w-2xl w-full p-8 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCertification(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  <FaTimes size={22} />
                </button>

                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-green-400">
                      {selectedCertification.title}
                    </h2>
                    <p className="text-gray-500">
                      {selectedCertification.issuer} ·{" "}
                      {selectedCertification.date}
                    </p>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-full text-white font-bold ${selectedCertification.badgeColor}`}
                  >
                    {selectedCertification.status}
                  </span>
                </div>

                <p className="text-gray-300 mb-6">
                  {selectedCertification.description}
                </p>

                <h4 className="text-lg font-semibold text-green-400 mb-3">
                  Key Highlights
                </h4>
                <ul className="space-y-3 mb-6">
                  {selectedCertification.details.map((detail, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <FaCheckCircle className="text-green-500" />
                      <span className="text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={selectedCertification.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300"
                >
                  <FaLink />
                  <span>Verify Certification</span>
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Certifications;
