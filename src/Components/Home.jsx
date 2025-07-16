// import React from 'react';
// import { HiArrowNarrowRight } from 'react-icons/hi';
// import { Link } from 'react-scroll'; // Assuming you have react-scroll installed

// export const Home = () => {
//   return (
//     <div name='home' className='w-full min-h-screen bg-white dark:bg-[#0a192f] transition-colors duration-500 flex items-center'>
//       {/* Container */}
//       <div className='max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-20'> {/* Adjusted main container padding */}
//         <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

//           {/* Left Content */}
//           <div className='space-y-8'>
//             {/* Greeting */}
//             <div className='space-y-2'>
//               {/* === FIX FOR "HELLO THERE!" CLIPPING === */}
//               <p className='text-pink-600 text-lg font-medium tracking-wide uppercase pt-4 sm:pl-0'> {/* Added pl-4 for very small screens, sm:pl-0 to reset for larger */}
//                 Hello there! 👋
//               </p>
//               {/* ======================================= */}
//               <div className='space-y-4'>
//                 <h1 className='text-5xl sm:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white leading-tight'>
//                   Hi! I'm{' '}
//                   <span className='bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent'>
//                     Nischay
//                   </span>
//                 </h1>
//                 <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-gray-400'>
//                   Fullstack Developer
//                 </h2>
//               </div>
//             </div>

//             {/* Description */}
//             <div className='space-y-4'>
//               <p className='text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-[600px]'>
//                 I'm a passionate fullstack developer who specializes in building scalable web applications
//                 from concept to deployment. With expertise in both frontend and backend technologies,
//                 I create seamless user experiences backed by robust server-side solutions.
//               </p>
//               <p className='text-gray-500 dark:text-gray-400 text-base'>
//                 Transforming ideas into digital reality through clean code and innovative problem-solving.
//               </p>
//             </div>

//             {/* CTA Buttons */}
//             <div className='flex flex-col sm:flex-row gap-4 pt-4'>
//               <Link to="work" smooth={true} duration={500}>
//                 <button className='group bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center'>
//                   View My Work
//                   <span className='group-hover:translate-x-1 duration-300'>
//                     <HiArrowNarrowRight className='ml-2' />
//                   </span>
//                 </button>
//               </Link>

//               <Link to="contact" smooth={true} duration={500}>
//                 <button className='group border-2 border-pink-600 text-pink-600 dark:text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-600 hover:text-white transition-all duration-300 flex items-center justify-center'>
//                   Let's Connect
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Right Content - Stats/Info Card */}
//           <div className='flex justify-center lg:justify-end'>
//             <div className='bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 max-w-[400px] w-full'>
//               {/* Header */}
//               <div className='text-center mb-8'>
//                 <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
//                   Nischay Sharma
//                 </h3>
//                 <p className='text-gray-600 dark:text-gray-400'>
//                   Fullstack Developer
//                 </p>
//               </div>

//               {/* Stats Grid */}
//               <div className='grid grid-cols-2 gap-6 mb-8'>
//                 <div className='text-center'>
//                   <div className='text-3xl font-bold text-pink-600 mb-2'>3+</div>
//                   <div className='text-gray-600 dark:text-gray-400 text-sm'>Years Experience</div>
//                 </div>
//                 <div className='text-center'>
//                   <div className='text-3xl font-bold text-purple-600 mb-2'>50+</div>
//                   <div className='text-gray-600 dark:text-gray-400 text-sm'>Projects Done</div>
//                 </div>
//                 <div className='text-center'>
//                   <div className='text-3xl font-bold text-pink-600 mb-2'>10+</div>
//                   <div className='text-gray-600 dark:text-gray-400 text-sm'>Technologies</div>
//                 </div>
//                 <div className='text-center'>
//                   <div className='text-3xl font-bold text-purple-600 mb-2'>24/7</div>
//                   <div className='text-gray-600 dark:text-gray-400 text-sm'>Support</div>
//                 </div>
//               </div>

//               {/* Current Focus */}
//               <div className='bg-gray-50 dark:bg-gray-700 p-4 rounded-xl mb-6'>
//                 <h4 className='font-semibold text-gray-900 dark:text-white mb-2'>Current Focus</h4>
//                 <p className='text-gray-600 dark:text-gray-400 text-sm'>
//                   Building scalable web applications with modern technologies and best practices.
//                 </p>
//               </div>

//               {/* Status */}
//               <div className='flex items-center justify-center space-x-2'>
//                 <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
//                 <span className='text-gray-600 dark:text-gray-400 text-sm'>
//                   Available for new projects
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className='flex justify-center mt-16 lg:mt-20'>
//           <div className='flex flex-col items-center space-y-2 animate-bounce'>
//             <span className='text-gray-400 dark:text-gray-500 text-sm'>Scroll to explore</span>
//             <div className='w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center'>
//               <div className='w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse'></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

export const Home = () => {
  return (
    <div name='home' className='w-full min-h-screen bg-white dark:bg-[#1a1a1a] transition-colors duration-500 flex items-center'>
      <div className='max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-20'>
        <div className='grid grid-cols-1 gap-12 items-center'>

          {/* Main Content */}
          <div className='space-y-12'>
            {/* Greeting */}
            <div className='space-y-4'>
              <p className='text-pink-600 text-lg font-medium tracking-wide uppercase pt-4'>
                Hello there! 👋
              </p>
              <h1 className='text-5xl sm:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white leading-tight'>
                Hi! I'm{' '}
                <span className='bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent'>
                  Nischay
                </span>
              </h1>
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-gray-400'>
                Fullstack Developer
              </h2>
            </div>

            {/* Description */}
            <div className='space-y-4'>
              <p className='text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-[600px]'>
                I'm a passionate fullstack developer who specializes in building scalable web applications
                from concept to deployment. With expertise in both frontend and backend technologies,
                I create seamless user experiences backed by robust server-side solutions.
              </p>
              <p className='text-gray-500 dark:text-gray-400 text-base'>
                Transforming ideas into digital reality through clean code and innovative problem-solving.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <Link to="work" smooth={true} duration={500}>
                <button className='group bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center'>
                  View My Work
                  <span className='group-hover:translate-x-1 duration-300'>
                    <HiArrowNarrowRight className='ml-2' />
                  </span>
                </button>
              </Link>

              <Link to="contact" smooth={true} duration={500}>
                <button className='group border-2 border-pink-600 text-pink-600 dark:text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-600 hover:text-white transition-all duration-300 flex items-center justify-center'>
                  Let's Connect
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='flex justify-center mt-16 lg:mt-20'>
          <div className='flex flex-col items-center space-y-2 animate-bounce'>
            <span className='text-gray-400 dark:text-gray-500 text-sm'>Scroll to explore</span>
            <div className='w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center'>
              <div className='w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
