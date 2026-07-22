import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
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
const ProjectDetail = lazy(() => import("./components/ProjectDetail"));

const sectionsFallback = (
  <div className="flex items-center justify-center min-h-screen text-gray-500">
    Loading portfolio…
  </div>
);

function Home() {
  return (
    <main>
      <Suspense fallback={sectionsFallback}>
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
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <Routes>
        <Route
          path="/project/:id"
          element={
            <Suspense fallback={sectionsFallback}>
              <ProjectDetail />
            </Suspense>
          }
        />
        {/* Any other path (including plain #about/#skills anchor links, which
            aren't react-router Links and don't otherwise match a route) falls
            through to the same Home route, so in-page anchor nav keeps working. */}
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
