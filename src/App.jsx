import {Navbar} from "./Components/Navbar"
import {Home} from "./Components/Home"
import {About} from "./Components/About"
import {Skills} from "./Components/Skills"
import Projects from "./Components/Projects"
import ResumeSection from "./Components/ResumeSection"
import Contact from "./Components/Contact.jsx"
function App() {
  return (
    <div className="bg-white text-black dark:bg-[#1a1a1a] dark:text-white transition-colors duration-300 min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ResumeSection/>
      <Contact />
    </div>
  );
}

export default App;
