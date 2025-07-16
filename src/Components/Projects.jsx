import { HiArrowNarrowRight } from "react-icons/hi";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import pos from "../assets/pos.png";
import school from "../assets/school.png";
import ecommerce from "../assets/ecommerce.png";
import admin from "../assets/admin.png";

const Projects = () => {
  const data = [
    {
      name: "POS Software for Dairy",
      description:
        "A real-time POS system for dairy stores featuring billing, slip printing, inventory tracking, and transaction analytics.",
      image: pos,
      github: "",
      live: "https://order.teejay26.com/",
    },
    {
      name: "School Website – Shadman English Medium School",
      description:
        "A multi-page responsive school website with smooth routing and SEO-friendly structure.",
      image: school,
      github: "",
      live: "https://www.shadmanenglishmediumschool.com/",
    },
    {
      name: "Full-Stack E-commerce Web App",
      description:
        "MERN-based e-commerce platform with admin panel, Firebase Auth, product management, image uploads, and caching.",
      image: ecommerce,
      github: "https://github.com/Nischay2123", // replace with actual repo if available
      live: "https://ecommerce-frontend-rho-ten.vercel.app",
    },
    {
      name: "Admin Dashboard – BWorth Technologies",
      description:
        "Built a responsive admin dashboard using React, Redux Toolkit, and RTK Query. Integrated REST APIs, dynamic charts, and tables.",
      image: admin,
      github: "", // replace with actual repo if available
      live: "#", // no live link mentioned in resume
    },
  ];

  return (
    <div
      name="work"
      className="w-full min-h-screen bg-white dark:bg-[#1a1a1a] transition-colors duration-500 text-gray-900 dark:text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-20">
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight">
              FEATURED
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-gray-400">
              PROJECTS
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-[600px]">
            Here are some of my recent projects that showcase my skills in
            fullstack development and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {data.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
                {/* Project Icon */}
                <div className="flex-shrink-0">
                  <img
                    src={
                      typeof project.image === "string"
                        ? project.image
                        : project.image.default || project.image
                    }
                    alt={project.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-contain shadow-lg bg-gray-100 dark:bg-gray-700"
                  />
                </div>

                {/* Project Content */}
                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-pink-600 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                    {/* GitHub Button */}
                    <button
                      onClick={() =>
                        project.github && window.open(project.github, "_blank")
                      }
                      disabled={!project.github}
                      className={`group/btn flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform ${
                        project.github
                          ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-pink-600 hover:text-white hover:scale-105"
                          : "bg-gray-200 dark:bg-gray-600 text-gray-400 cursor-not-allowed"
                      }`}
                      title={
                        project.github
                          ? "View Code"
                          : "Source code not available"
                      }
                    >
                      <FiGithub className="text-lg" />
                      <span>View Code</span>
                      {project.github && (
                        <span className="group-hover/btn:translate-x-1 duration-300">
                          <HiArrowNarrowRight className="text-lg" />
                        </span>
                      )}
                    </button>

                    {/* Live Demo Button */}
                    <button
                      onClick={() =>
                        project.live && window.open(project.live, "_blank")
                      }
                      disabled={!project.live}
                      className={`group/btn flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 transition-all duration-300 transform ${
                        project.live
                          ? "border-pink-600 text-pink-600 dark:text-pink-400 hover:bg-pink-600 hover:text-white hover:scale-105"
                          : "border-gray-300 text-gray-400 dark:border-gray-500 cursor-not-allowed"
                      }`}
                      title={
                        project.live ? "Live Demo" : "Live demo not available"
                      }
                    >
                      <FiExternalLink className="text-lg" />
                      <span>Live Demo</span>
                      {project.live && (
                        <span className="group-hover/btn:translate-x-1 duration-300">
                          <HiArrowNarrowRight className="text-lg" />
                        </span>
                      )}
                    </button>
                  </div>
                </div>

                {/* Hover Arrow Indicator */}
                <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <HiArrowNarrowRight className="text-2xl text-pink-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 lg:mt-20">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-gray-400 dark:text-gray-500 text-sm">
              Continue exploring
            </span>
            <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
