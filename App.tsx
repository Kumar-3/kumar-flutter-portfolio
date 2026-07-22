import { Suspense, lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { use3DCapability } from "./components/hooks/use3DCapability";
import LoadingAnimation from "./components/LoadingAnimation";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";

const PortfolioBackground = lazy(
  () => import("./components/3D/PortfolioBackground"),
);

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

const sectionsFallback = <LoadingAnimation />;

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
  const [showLoading, setShowLoading] = useState(true);
  const show3D = use3DCapability();

  return (
    <>
      {show3D && (
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <Suspense fallback={null}>
            <PortfolioBackground />
          </Suspense>
        </div>
      )}

      {showLoading && (
        <LoadingScreen onLoadingComplete={() => setShowLoading(false)} />
      )}

      <div
        className={`min-h-screen text-white transition-opacity duration-[800ms] ${
          showLoading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
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
    </>
  );
}

export default App;
