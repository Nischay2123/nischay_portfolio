import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-white text-gray-800 dark:bg-[#1a1a1a] dark:text-gray-300 transition-colors duration-500 px-4 py-4 pt-20 pb-24"
    >
      <div className="max-w-[1100px] mx-auto flex flex-col justify-start max-h-full">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate Software Developer with expertise in full-stack
            development, currently pursuing Computer Science and gaining
            hands-on experience as an SDE Intern.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <div className="flex items-center">
            <div className="w-full min-h-3/4 bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  Education
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Bachelor of Technology
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2 text-sm">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Noida Institue of Engineering and Technology
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2 text-sm">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 0 002-2V7a2 0 00-2-2H5a2 0 00-2 2v12a2 0 002 2z"
                      />
                    </svg>
                    2022 - 2026
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg p-4 mt-5">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Current CGPA
                  </p>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    8/10
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg mb-8">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                My Journey
              </h2>

              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                <p>
                  I’m a Computer Science undergraduate with a strong interest in
                  software development and problem-solving. With a foundation in
                  data structures, algorithms, and core computer science
                  principles, I continuously strive to build efficient and
                  maintainable solutions.
                </p>

                <p>
                  Through hands-on experience in full-stack development and
                  consistent practice on platforms like LeetCode, I’ve developed
                  a mindset focused on clean code and real-world application.
                  I’m always exploring new technologies and refining my skills
                  to grow as a software engineer.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-5 text-white text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold mb-1">200+</div>
                <p className="text-sm md:text-base opacity-90">
                  LeetCode Problems
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-5 text-white text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold mb-1">5+</div>
                <p className="text-sm md:text-base opacity-90">
                  Major Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
