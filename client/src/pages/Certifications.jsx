import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCertificate,
  FaAward,
  FaCheckCircle,
  FaLink,
  FaShieldAlt,
  FaTimes,
  FaTools,
  FaBrain,
} from "react-icons/fa";

const Certifications = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [activeTab, setActiveTab] = useState("cert");

  // ======================
  // CERTIFICATIONS
  // ======================
  const certifications = [
    {
      title: "Offensive Security Certified Professional (OSCP)",
      issuer: "Offensive Security",
      date: "In Progress",
      description:
        "Advanced hands-on penetration testing certification focused on real-world attack techniques.",
      icon: <FaShieldAlt />,
      status: "Pursuing",
      badgeColor: "bg-yellow-500",
      details: [
        "Hands-on penetration testing",
        "Privilege escalation",
        "Web exploitation",
      ],
      skills: ["Buffer Overflow", "Privilege Escalation", "AD", "Web Exploitation"],
      verificationLink: "https://www.offensive-security.com/verify",
    },
    {
      title: "Certified Cybersecurity Educator Professional (CCEP)",
      issuer: "Red Team Leaders",
      date: "2025",
      description:
        "Professional cybersecurity certification validating strong understanding.",
      icon: <FaCertificate />,
      status: "Completed",
      badgeColor: "bg-green-600",
      details: [
        "Security fundamentals",
        "Offensive & defensive concepts",
      ],
      skills: ["Red Teaming", "Threat Modeling", "Attack Techniques"],
      verificationLink:
        "https://courses.redteamleaders.com/exam-completion/2c70d277a29cc072",
    },
    {
      title: "Foundations of Cybersecurity",
      issuer: "Google / Coursera",
      date: "2025",
      description:
        "Foundational cybersecurity certificate covering core concepts.",
      icon: <FaAward />,
      status: "Completed",
      badgeColor: "bg-blue-600",
      details: [
        "Cybersecurity basics",
        "Attack techniques",
      ],
      skills: ["Network Security", "Security Ethics"],
      verificationLink:
        "https://coursera.org/share/a9182085a884e6daf4fccd1c10c138cb",
    },
  ];

  // ======================
  // GLOBAL SKILLS
  // ======================
  const skills = [
    "Web Security",
    "Penetration Testing",
    "Bug Bounty Hunting",
    "Network Security",
    "API Security",
    "Active Directory",
  ];

  // ======================
  // TOOLS
  // ======================
  const tools = [
    "Burp Suite",
    "Nmap",
    "Wireshark",
    "Metasploit",
    "Gobuster",
    "SQLMap",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#33FF33] mb-10 text-center">
          Professional Certifications
        </h1>

        {/* ================= TABS ================= */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("cert")}
            className={`px-5 py-2 rounded-lg border ${
              activeTab === "cert"
                ? "bg-green-500 text-black"
                : "border-green-500 text-green-400"
            }`}
          >
            <FaCertificate className="inline mr-2" />
            Certifications
          </button>

          <button
            onClick={() => setActiveTab("skills")}
            className={`px-5 py-2 rounded-lg border ${
              activeTab === "skills"
                ? "bg-green-500 text-black"
                : "border-green-500 text-green-400"
            }`}
          >
            <FaBrain className="inline mr-2" />
            Skills
          </button>

          <button
            onClick={() => setActiveTab("tools")}
            className={`px-5 py-2 rounded-lg border ${
              activeTab === "tools"
                ? "bg-green-500 text-black"
                : "border-green-500 text-green-400"
            }`}
          >
            <FaTools className="inline mr-2" />
            Tools
          </button>
        </div>

        {/* ================= CONTENT ================= */}

        {/* CERTIFICATIONS */}
        {activeTab === "cert" && (
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={i}
                onClick={() => setSelectedCertification(cert)}
                className="bg-[#112240] p-6 rounded-xl cursor-pointer hover:scale-105 transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-green-400 text-xl">{cert.icon}</div>
                  <h3 className="text-green-400 font-semibold">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm">{cert.issuer}</p>

                <p className="text-gray-500 text-sm mt-2">
                  {cert.description}
                </p>

                <div className="mt-4 text-right">
                  <span
                    className={`px-3 py-1 text-xs rounded-full text-white ${cert.badgeColor}`}
                  >
                    {cert.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SKILLS */}
        {activeTab === "skills" && (
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="bg-green-900 text-green-300 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* TOOLS */}
        {activeTab === "tools" && (
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool, i) => (
              <span
                key={i}
                className="bg-blue-900 text-blue-300 px-4 py-2 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        )}

        {/* ================= MODAL ================= */}
        <AnimatePresence>
          {selectedCertification && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex items-center justify-center p-4"
              onClick={() => setSelectedCertification(null)}
            >
              <motion.div
                className="bg-gray-800 rounded-xl p-6 max-w-xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCertification(null)}
                  className="float-right"
                >
                  <FaTimes />
                </button>

                <h2 className="text-green-400 text-xl font-bold mb-2">
                  {selectedCertification.title}
                </h2>

                <p className="text-gray-400 mb-4">
                  {selectedCertification.issuer}
                </p>

                <ul className="mb-4">
                  {selectedCertification.details.map((d, i) => (
                    <li key={i} className="flex gap-2">
                      <FaCheckCircle className="text-green-400" />
                      {d}
                    </li>
                  ))}
                </ul>

                <a
                  href={selectedCertification.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 flex gap-2"
                >
                  <FaLink />
                  Verify
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
