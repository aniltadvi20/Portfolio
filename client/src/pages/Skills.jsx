import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaShieldAlt,
  FaNetworkWired,
  FaDatabase,
  FaTerminal,
  FaTools,
  FaServer,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const skillCategories = [
    "All",
    "Programming",
    "Security Tools",
    "Security Domains",
    "Frameworks & Stack",
    "OS & Dev Tools",
    "Methodologies",
    "Soft Skills",
  ];

  const skills = [
    // ======================
    // Programming
    // ======================
    {
      name: "Python",
      level: "Advanced",
      category: "Programming",
      icon: <FaCode className="text-blue-400" />,
      proficiency: 90,
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      category: "Programming",
      icon: <FaCode className="text-yellow-400" />,
      proficiency: 80,
    },
    {
      name: "Bash Scripting",
      level: "Advanced",
      category: "Programming",
      icon: <FaTerminal className="text-green-400" />,
      proficiency: 85,
    },
    {
      name: "Go",
      level: "Intermediate",
      category: "Programming",
      icon: <FaCode className="text-cyan-400" />,
      proficiency: 75,
    },
    {
      name: "PHP",
      level: "Beginner",
      category: "Programming",
      icon: <FaCode className="text-purple-400" />,
      proficiency: 60,
    },

    // ======================
    // Security Tools
    // ======================
    {
      name: "Burp Suite",
      level: "Advanced",
      category: "Security Tools",
      icon: <FaTools className="text-pink-400" />,
      proficiency: 90,
    },
    {
      name: "Nmap",
      level: "Advanced",
      category: "Security Tools",
      icon: <FaNetworkWired className="text-green-400" />,
      proficiency: 88,
    },
    {
      name: "Metasploit",
      level: "Intermediate",
      category: "Security Tools",
      icon: <FaShieldAlt className="text-red-400" />,
      proficiency: 75,
    },
    {
      name: "Nuclei",
      level: "Advanced",
      category: "Security Tools",
      icon: <FaShieldAlt className="text-orange-400" />,
      proficiency: 90,
    },
    {
      name: "SQLmap",
      level: "Intermediate",
      category: "Security Tools",
      icon: <FaDatabase className="text-blue-400" />,
      proficiency: 70,
    },
    {
      name: "Amass / Subfinder / Httpx",
      level: "Advanced",
      category: "Security Tools",
      icon: <FaNetworkWired className="text-teal-400" />,
      proficiency: 90,
    },
    {
      name: "FFUF / Dirsearch / Gobuster",
      level: "Advanced",
      category: "Security Tools",
      icon: <FaTools className="text-yellow-400" />,
      proficiency: 85,
    },

    // ======================
    // Security Domains
    // ======================
    {
      name: "Web Application Security",
      level: "Advanced",
      category: "Security Domains",
      icon: <FaShieldAlt className="text-green-400" />,
      proficiency: 95,
    },
    {
      name: "API Security",
      level: "Advanced",
      category: "Security Domains",
      icon: <FaServer className="text-blue-400" />,
      proficiency: 90,
    },
    {
      name: "Account Takeover (ATO)",
      level: "Advanced",
      category: "Security Domains",
      icon: <FaShieldAlt className="text-red-400" />,
      proficiency: 95,
    },
    {
      name: "IDOR & Access Control",
      level: "Advanced",
      category: "Security Domains",
      icon: <FaProjectDiagram className="text-purple-400" />,
      proficiency: 92,
    },
    {
      name: "Rate Limiting & Abuse",
      level: "Advanced",
      category: "Security Domains",
      icon: <FaNetworkWired className="text-yellow-400" />,
      proficiency: 90,
    },
    {
      name: "Business Logic Flaws",
      level: "Advanced",
      category: "Security Domains",
      icon: <FaShieldAlt className="text-orange-400" />,
      proficiency: 93,
    },

    // ======================
    // Frameworks & Stack
    // ======================
    {
      name: "React.js",
      level: "Intermediate",
      category: "Frameworks & Stack",
      icon: <FaCode className="text-blue-400" />,
      proficiency: 80,
    },
    {
      name: "Node.js / Express",
      level: "Intermediate",
      category: "Frameworks & Stack",
      icon: <FaServer className="text-green-400" />,
      proficiency: 75,
    },
    {
      name: "FastAPI",
      level: "Intermediate",
      category: "Frameworks & Stack",
      icon: <FaServer className="text-teal-400" />,
      proficiency: 75,
    },
    {
      name: "PostgreSQL / SQLite",
      level: "Intermediate",
      category: "Frameworks & Stack",
      icon: <FaDatabase className="text-purple-400" />,
      proficiency: 70,
    },

    // ======================
    // OS & Dev Tools
    // ======================
    {
      name: "Linux",
      level: "Advanced",
      category: "OS & Dev Tools",
      icon: <FaTerminal className="text-green-400" />,
      proficiency: 90,
    },
    {
      name: "macOS",
      level: "Advanced",
      category: "OS & Dev Tools",
      icon: <FaTerminal className="text-gray-300" />,
      proficiency: 85,
    },
    {
      name: "Git & GitHub",
      level: "Advanced",
      category: "OS & Dev Tools",
      icon: <FaTools className="text-orange-400" />,
      proficiency: 85,
    },
    {
      name: "Docker (Basic)",
      level: "Basic",
      category: "OS & Dev Tools",
      icon: <FaServer className="text-blue-400" />,
      proficiency: 60,
    },

    // ======================
    // Methodologies
    // ======================
    {
      name: "OWASP Top 10",
      level: "Advanced",
      category: "Methodologies",
      icon: <FaShieldAlt className="text-red-400" />,
      proficiency: 95,
    },
    {
      name: "OWASP API Top 10",
      level: "Advanced",
      category: "Methodologies",
      icon: <FaShieldAlt className="text-orange-400" />,
      proficiency: 90,
    },
    {
      name: "PTES",
      level: "Strong",
      category: "Methodologies",
      icon: <FaProjectDiagram className="text-blue-400" />,
      proficiency: 85,
    },
    {
      name: "Threat Modeling",
      level: "Strong",
      category: "Methodologies",
      icon: <FaProjectDiagram className="text-purple-400" />,
      proficiency: 88,
    },

    // ======================
    // Soft Skills
    // ======================
    {
      name: "Analytical Thinking",
      level: "Strong",
      category: "Soft Skills",
      icon: <FaUsers className="text-green-400" />,
      proficiency: 90,
    },
    {
      name: "Security Reporting & Documentation",
      level: "Strong",
      category: "Soft Skills",
      icon: <FaUsers className="text-blue-400" />,
      proficiency: 88,
    },
    {
      name: "Remote Collaboration",
      level: "Strong",
      category: "Soft Skills",
      icon: <FaUsers className="text-purple-400" />,
      proficiency: 85,
    },
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#33FF33] mb-3">
            Skills & Expertise
          </h1>
          <p className="text-gray-400">
            Senior-level application security and engineering skillset
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                activeCategory === category
                  ? "bg-[#33FF33] text-black"
                  : "border border-[#33FF33] text-[#33FF33] hover:bg-[#33FF33] hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#112240] p-6 rounded-xl shadow hover:shadow-[#33FF33]/20"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="text-3xl">{skill.icon}</div>
                <span className="text-[#33FF33] text-sm">{skill.level}</span>
              </div>
              <h3 className="text-lg font-semibold text-[#33FF33]">
                {skill.name}
              </h3>

              <div className="w-full bg-[#0A192F] rounded-full h-2 mt-4">
                <div
                  className="bg-[#33FF33] h-2 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
