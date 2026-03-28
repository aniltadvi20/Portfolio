import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCertificate,
  FaAward,
  FaCheckCircle,
  FaLink,
  FaShieldAlt,
  FaTimes,
  FaCode,
  FaTerminal,
  FaTools,
} from "react-icons/fa";

const Certifications = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);

  // ======================
  // SKILLS
  // ======================
  const skills = [
    { name: "Python", level: "Advanced", proficiency: 90 },
    { name: "Burp Suite", level: "Advanced", proficiency: 90 },
    { name: "Web App Security", level: "Advanced", proficiency: 95 },
    { name: "Linux", level: "Advanced", proficiency: 90 },
    { name: "OWASP Top 10", level: "Advanced", proficiency: 95 },
  ];

  // ======================
  // CERTIFICATIONS (YOUR DATA)
  // ======================
  const certifications = [
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
        "Structured approach to security learning",
        "Recognition of professional competency",
      ],
      verificationLink:
        "https://courses.redteamleaders.com/exam-completion/2c70d277a29cc072",
    },
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
        "Cybersecurity fundamentals",
        "Common attack techniques",
        "Security ethics",
        "Security tools overview",
      ],
      verificationLink:
        "https://coursera.org/share/a9182085a884e6daf4fccd1c10c138cb",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= SKILLS ================= */}
        <h1 className="text-4xl font-bold text-[#33FF33] mb-10 text-center">
          Skills & Certifications
        </h1>

        <h2 className="text-2xl font-semibold text-[#33FF33] mb-6">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, i) => (
            <div key={i} className="bg-[#112240] p-5 rounded-xl">
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div className="h-2 bg-black rounded">
                <div
                  className="bg-[#33FF33] h-2 rounded"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ================= CERTIFICATIONS ================= */}
        <h2 className="text-2xl font-semibold text-[#33FF33] mb-8">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={i}
              onClick={() => setSelectedCertification(cert)}
              className="bg-[#112240] p-6 rounded-xl cursor-pointer hover:scale-105 transition transform hover:shadow-lg hover:shadow-[#33FF33]/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl text-green-400">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-semibold text-green-400">
                  {cert.title}
                </h3>
              </div>

              <p className="text-sm text-gray-400 mb-2">
                {cert.issuer}
              </p>

              <p className="text-sm text-gray-500 line-clamp-2">
                {cert.description}
              </p>

              <div className="mt-4 text-right">
                <span className={`px-3 py-1 text-xs rounded-full text-white ${cert.badgeColor}`}>
                  {cert.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ================= MODAL ================= */}
        <AnimatePresence>
          {selectedCertification && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedCertification(null)}
            >
              <motion.div
                className="bg-gray-800 rounded-xl max-w-2xl w-full p-8 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCertification(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  <FaTimes size={20} />
                </button>

                <h2 className="text-2xl font-bold text-green-400 mb-2">
                  {selectedCertification.title}
                </h2>

                <p className="text-gray-500 mb-4">
                  {selectedCertification.issuer} · {selectedCertification.date}
                </p>

                <p className="text-gray-300 mb-6">
                  {selectedCertification.description}
                </p>

                <h4 className="text-lg font-semibold text-green-400 mb-3">
                  Key Highlights
                </h4>

                <ul className="space-y-2 mb-6">
                  {selectedCertification.details.map((d, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-400" />
                      {d}
                    </li>
                  ))}
                </ul>

                <a
                  href={selectedCertification.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline flex items-center gap-2"
                >
                  <FaLink />
                  Verify Certification
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
