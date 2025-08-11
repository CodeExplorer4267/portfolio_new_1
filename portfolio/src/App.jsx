import { useState,useEffect,useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Particles from "./components/Animations/Particles";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Achivement from "./components/Achivements/Achivement";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/ContactMe/Contact";
import Footer from "./components/Footer/Footer";
import Lenis from "@studio-freight/lenis";

function App() {
  const lenis = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 1.5, // Control the duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
      smooth: true,
      smoothTouch: true, // Enable smooth scrolling on touch devices
    });

    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenis.current.destroy();
    };
  }, []);

  
  return (
    <>
      <div className=" bg-[#050414] pt-[20px] min-h-screen w-full flex flex-col justify-center items-center gap-15">
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={500}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achivement />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
