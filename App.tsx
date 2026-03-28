import { Suspense, lazy } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Lazy-loaded sections
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Education = lazy(() => import("./components/Education"));
const Awards = lazy(() => import("./components/Awards"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen text-gray-500">
              Loading portfolio…
            </div>
          }
        >
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Awards />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
