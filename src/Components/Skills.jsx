import React from 'react';
import {
  Code,
  FileCode,
  Palette,
  Settings2,
  GitBranch,
  Database,
  Server,
  FolderGit2,
  TerminalSquare,
  Blocks,
  Atom,
  Braces,
  ChevronRightSquare
} from 'lucide-react';

const skills = [
  { Icon: FileCode, label: 'HTML', desc: 'Markup language for structuring web content.' },
  { Icon: Palette, label: 'CSS', desc: 'Style sheet language for designing user interfaces.' },
  { Icon: Code, label: 'JavaScript', desc: 'Core scripting language of the web.' },
  { Icon: ChevronRightSquare, label: 'TypeScript', desc: 'Typed superset of JavaScript for scalable development.' },
  { Icon: Atom, label: 'React.js', desc: 'Library for building dynamic UIs.' },
  { Icon: Blocks, label: 'Redux Toolkit', desc: 'State management for complex applications.' },
  { Icon: Palette, label: 'Tailwind CSS', desc: 'Utility-first CSS framework for styling.' },
  { Icon: FolderGit2, label: 'Git & GitHub', desc: 'Version control & code collaboration tools.' },
  { Icon: Server, label: 'Node.js', desc: 'JavaScript runtime for backend development.' },
  { Icon: Settings2, label: 'Express.js', desc: 'Minimal backend framework for Node.js.' },
  { Icon: Database, label: 'MongoDB', desc: 'NoSQL database for scalable data storage.' },
  { Icon: Database, label: 'MySQL', desc: 'Relational database management system.' },
  { Icon: Braces, label: 'Java', desc: 'Object-oriented programming language.' },
  { Icon: TerminalSquare, label: 'Python', desc: 'High-level language for scripting and automation.' },
];

export const Skills = () => {
  return (
    <section name='skills' className='w-full min-h-screen px-4 py-20 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white transition-colors duration-500'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-5xl lg:text-7xl font-bold text-center mb-12'>
          MY SKILLS &{' '}
          <span className='text-gray-500 dark:text-zinc-500 text-4xl lg:text-6xl block'>
            TOOLKIT <span className='inline-block ml-2'>🛠️</span>
          </span>
        </h2>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skills.map(({ Icon, label, desc }) => (
            <div
              key={label}
              className='bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-white/10 group'
            >
              <div className='flex items-center gap-4 mb-4'>
                <Icon className='w-10 h-10 text-pink-500 dark:text-pink-400' />
                <h3 className='text-xl font-semibold group-hover:text-pink-600 transition-colors'>
                  {label}
                </h3>
              </div>
              <p className='text-sm text-gray-600 dark:text-gray-400'>{desc}</p>
            </div>
          ))}
        </div>

        <div className='flex justify-center mt-16 lg:mt-20'>
          <div className='flex flex-col items-center space-y-2 animate-bounce'>
            <span className='text-gray-400 dark:text-gray-500 text-sm'>Scroll to explore</span>
            <div className='w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center'>
              <div className='w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
