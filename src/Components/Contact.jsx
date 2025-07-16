import React from 'react';

const Contact = () => {
  return (
    <div
      name="contact"
      // Updated background and text colors to match the About section's theme, and adjusted vertical padding
      className="w-full min-h-screen bg-white text-gray-800 dark:bg-[#1a1a1a] dark:text-gray-300 flex justify-center items-center px-4 py-20 transition-colors duration-500"
    >
      <form
        method="POST"
        action="https://getform.io/f/lbjkdzga" 
        className="flex flex-col max-w-[800px] w-full transform transition-all duration-500 ease-in-out"
      >
        <div className="pb-8 text-left">
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-2"> 
            LET'S WORK
            <span className="block text-gray-500">TOGETHER</span> 
          </h2>
          <p className="py-4 text-gray-600 dark:text-gray-400 text-lg">
            Let's catch up for a coffee? ☕ (virtually probably?)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"> 
          <input
            className="bg-gray-100 dark:bg-[#3a3a3a] text-gray-900 dark:text-white p-3 rounded-lg placeholder-gray-500 dark:placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300" // Adjusted bg/text colors for light mode
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="bg-gray-100 dark:bg-[#3a3a3a] text-gray-900 dark:text-white p-3 rounded-lg placeholder-gray-500 dark:placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300" // Adjusted bg/text colors for light mode
            type="email"
            placeholder="Your Email"
            name="email"
            required
          />
        </div>

        <textarea
          className="bg-gray-100 dark:bg-[#3a3a3a] text-gray-900 dark:text-white p-3 rounded-lg placeholder-gray-500 dark:placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 resize-y mb-4" // Adjusted bg/text colors for light mode
          name="message"
          rows="6"
          placeholder="Your Message"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white px-8 py-3 mt-4 rounded-lg font-semibold
                     hover:bg-orange-600 transform hover:scale-[1.01]
                     transition-all duration-300 shadow-lg hover:shadow-xl" 
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
