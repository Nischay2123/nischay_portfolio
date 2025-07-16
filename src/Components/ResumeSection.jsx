import React from 'react';
import { Download } from 'lucide-react'; // Assuming lucide-react is installed
import { resumeUrl } from '../data/data'; // Ensure this path is correct and resumeUrl is a valid string URL to your PDF

export default function ResumeSection({ sectionRef }) {
  return (
    <section
      name='resume'
      // Section spans full width, with responsive padding
      className="min-h-screen flex flex-col px-4 py-8 mb-16 lg:py-16 w-full" // Changed min-h-fit to min-h-screen for full viewport height
    >
      {/* Header - Remains at the top, aligned within its max-width container */}
      <div className="mb-6 max-w-6xl mx-auto w-fit">
        <h2 className="text-5xl text-center lg:text-8xl lg:text-left font-bold text-gray-900 dark:text-white">
          RESUME
        </h2>
      </div>

      {/* Main Content Area (Download Button + PDF Viewer) - This block will be vertically centered */}
      <div className="flex-grow flex flex-col justify-center items-center w-full"> {/* Added justify-center and items-center */}
        {/* Download Button - Centered horizontally within its max-width container */}
        <div className="mb-10 text-center lg:text-left max-w-6xl mx-auto w-fit">
          <a
            href={resumeUrl}
            download={resumeUrl.substring(resumeUrl.lastIndexOf('/') + 1)}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm shadow-md hover:shadow-lg"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>

        {/* PDF Viewer Container - Centered horizontally */}
        <div className="w-full max-w-4xl h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[60vh] bg-gray-100 dark:bg-zinc-900 rounded-lg overflow-hidden border border-gray-300 dark:border-zinc-800 shadow-xl mx-auto">
          <iframe
            src={resumeUrl}
            title="Nischay's resume"
            className="w-full h-full"
            style={{
              border: "none",
            }}
          >
            <p className="text-red-500 p-4">
              Sorry, your browser does not support embedded PDFs. Please download the resume directly!
              <a href={resumeUrl} className="text-orange-500 ml-2 underline">
                Download PDF
              </a>
            </p>
          </iframe>
        </div>
      </div>

      {/* Scroll Indicator - Will be pushed to the bottom if there's enough space */}
      <div className='flex justify-center mt-16 lg:mt-20'>
        <div className='flex flex-col items-center space-y-2 animate-bounce'>
          <span className='text-gray-400 dark:text-gray-500 text-sm'>Scroll to explore</span>
          <div className='w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center'>
            <div className='w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse'></div>
          </div>
        </div>
      </div>
    </section>
  );
}
