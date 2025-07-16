import React, { useState, useEffect } from "react";
import { Home, User, Wrench, Briefcase, Mail, Sun, Moon, Github, Linkedin, FileText } from "lucide-react";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showBottomNav, setShowBottomNav] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (!prefersDark) {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBottomNav(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navLinks = [
    { title: "Home", to: "home", icon: <Home size={20} /> },
    { title: "About", to: "about", icon: <User size={20} /> },
    { title: "Skills", to: "skills", icon: <Wrench size={20} /> },
    { title: "Work", to: "work", icon: <Briefcase size={20} /> },
    { title: "Resume", to: "resume", icon: <FileText size={20} /> },
    { title: "Contact", to: "contact", icon: <Mail size={20} /> },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/nischay-sharma/", icon: <Linkedin size={30} />, bgColor: "bg-blue-600" },
    { name: "Github", href: "https://github.com/Nischay2123", icon: <Github size={30} />, bgColor: "bg-[#333333]" },
    { name: "Mail", href: "mailto:nischaysharma04@gmail.com",icon: <Mail size={30} />,  bgColor: "bg-[#6fc2b0]" }
  ];

  return (
    <>
      {/* Top Navigation */}
      <nav
        id="top-nav"
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center py-4 transition-all duration-300 ${
          showBottomNav
            ? "opacity-0 -translate-y-full pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl mt-4 px-6 py-3.5 flex gap-6 items-center shadow-lg">
          {navLinks.map((link) => (
            <div key={link.to} className="relative group">
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="text-gray-700 dark:text-white hover:text-orange-500 transition-colors cursor-pointer"
              >
                {link.icon}
              </Link>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {link.title}
              </div>
            </div>
          ))}

          <div className="w-px h-5 bg-gray-300 dark:bg-gray-600"></div>

          {/* Theme toggle button with overlapping Sun and Moon icons */}
          <div className="relative group">
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-white hover:text-orange-500 transition-all duration-300 transform hover:scale-110"
            >
              <div className="relative w-5 h-5">
                <Sun
                  size={20}
                  className={`absolute inset-0 transition-all duration-500 ${
                    darkMode ? "opacity-0 rotate-180 scale-0" : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <Moon
                  size={20}
                  className={`absolute inset-0 transition-all duration-500 ${
                    darkMode ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-0"
                  }`}
                />
              </div>
            </button>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          showBottomNav
            ? "opacity-90 translate-y-0"
            : "opacity-0 translate-y-full pointer-events-none"
        }`}
      >
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl px-6 py-3.5 flex gap-6 shadow-lg shadow-black/50 items-center">
          {navLinks.map((link) => (
            <div key={`bottom-${link.to}`} className="relative group">
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="text-gray-700 dark:text-white hover:text-orange-500 transition-colors cursor-pointer"
              >
                {link.icon}
              </Link>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {link.title}
              </div>
            </div>
          ))}

          <div className="w-px h-5 bg-gray-300 dark:bg-gray-600"></div>

          {/* Theme toggle button on bottom nav */}
          <div className="relative group">
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-white hover:text-orange-500 transition-all duration-300 transform hover:scale-110"
            >
              <div className="relative w-5 h-5">
                <Sun
                  size={20}
                  className={`absolute inset-0 transition-all duration-500 ${
                    darkMode ? "opacity-0 rotate-180 scale-0" : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <Moon
                  size={20}
                  className={`absolute inset-0 transition-all duration-500 ${
                    darkMode ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-0"
                  }`}
                />
              </div>
            </button>
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </div>
          </div>
        </div>
      </div>

      {/* Social Sidebar */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-40">
        <ul>
          {socialLinks.map((social) => (
            <li
              key={social.name}
              className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${social.bgColor} group`}
            >
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="pl-4">{social.name}</span>
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </>
  );
};
