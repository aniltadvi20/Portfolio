import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-[#0A192F] text-[#CCD6F6] px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-[#33FF33] mb-6">
          About
        </h1>

        <p className="text-[#8892B0] leading-relaxed mb-6">
          I focus on offensive security testing of web applications with an emphasis
          on identifying real-world vulnerabilities. My work includes manual testing,
          attack surface analysis, and responsible vulnerability disclosure through
          public bug bounty platforms.
        </p>

        <p className="text-[#8892B0] leading-relaxed mb-6">
          My primary areas of interest include authentication and authorization flaws,
          account takeover scenarios, access control issues, and logic-based
          vulnerabilities commonly missed by automated tools.
        </p>

        <p className="text-[#8892B0] leading-relaxed">
          I maintain a continuous learning mindset and focus on improving exploitation
          methodology, reporting quality, and technical depth in offensive security.
        </p>

      </div>
    </section>
  );
};

export default About;

