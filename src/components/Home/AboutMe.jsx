import React from "react";

const AboutMe = () => {
  return (
    <div className="container text-white">
      <div className="flex items-center gap-3 mb-10">
        <h2 className="lg:text-3xl text-2xl font-semibold">
          <span className="text-cyan-500 mr-1">#</span>about-me
        </h2>
        <div className="hidden lg:block flex-1 h-[1px] bg-cyan-400"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <h3 className="text-xl font-semibold text-cyan-400">
            Frontend Developer
          </h3>

          <p className="text-white/70 leading-relaxed">
            I am a passionate frontend developer with a strong academic
            background in Business and Information Technology (BBIT). I have
            developed a solid understanding of web technologies including HTML,
            CSS, JavaScript, and React.
          </p>

          <p className="text-white/70 leading-relaxed">
            During my internship and professional experience, I have worked on
            multiple projects that enhanced my problem-solving skills and gave
            me hands-on experience in building responsive and user-friendly web
            applications.
          </p>

          <p className="text-white/70 leading-relaxed">
            I enjoy learning new technologies and continuously improving my
            skills to stay updated with modern development trends.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "React",
              "JavaScript",
              "HTML",
              "CSS",
              "Tailwind",
              "WordPress",
            ].map((skill, i) => (
              <span
                key={i}
                className="text-xs border border-cyan-400/40 text-cyan-300 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">
            Quick Info
          </h3>

          <div className="space-y-3 text-sm text-white/70">
            <p>
              <span className="text-white font-medium">Education:</span> BBIT
              Graduate
            </p>
            <p>
              <span className="text-white font-medium">Field:</span> Frontend
              Development
            </p>
            <p>
              <span className="text-white font-medium">Experience:</span>{" "}
              Internship + Job
            </p>
            <p>
              <span className="text-white font-medium">Focus:</span> Frontend
              Development & Interactive Web Applications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
