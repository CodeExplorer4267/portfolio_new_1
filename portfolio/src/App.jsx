import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Particles from "./components/Animations/Particles"
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Achivement from "./components/Achivements/Achivement";

function App() {
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
        <Skills/>
        <Projects/>
        <Education/>
        <Achivement/>
      </div>
    </>
  );
}

export default App;
