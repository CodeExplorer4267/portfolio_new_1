import { useState, useEffect, useRef } from "react";
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
import { SkillsInfo } from "./constants";

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

  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / 30; // lower number = bigger movement
    const y = (e.clientY - innerHeight / 2) / 30;
    setOffset({ x, y });
  };
  const positions = [
  // Row 1
  { top: "5%", left: "10%", opacity: 0.4, icon: SkillsInfo[0].skills[0].logo },
  { top: "8%", left: "45%", opacity: 0.4, icon: SkillsInfo[0].skills[1].logo },
  { top: "6%", left: "75%", opacity: 0.4, icon: SkillsInfo[0].skills[2].logo },

  // Row 2
  { top: "18%", left: "20%", opacity: 0.4, icon: SkillsInfo[0].skills[3].logo },
  { top: "15%", left: "60%", opacity: 0.4, icon: SkillsInfo[0].skills[4].logo },
  { top: "22%", left: "85%", opacity: 0.4, icon: SkillsInfo[0].skills[5].logo },

  // Row 3
  { top: "30%", left: "12%", opacity: 0.4, icon: SkillsInfo[0].skills[6].logo },
  { top: "28%", left: "50%", opacity: 0.4, icon: SkillsInfo[0].skills[7].logo },
  { top: "35%", left: "78%", opacity: 0.4, icon: SkillsInfo[0].skills[8].logo },

  // Row 4
  { top: "45%", left: "15%", opacity: 0.4, icon: SkillsInfo[0].skills[9].logo },
  { top: "42%", left: "55%", opacity: 0.4, icon: SkillsInfo[0].skills[10].logo },
  { top: "48%", left: "82%", opacity: 0.4, icon: SkillsInfo[0].skills[11].logo },

  // Row 5
  { top: "58%", left: "10%", opacity: 0.4, icon: SkillsInfo[1].skills[0].logo },
  { top: "55%", left: "48%", opacity: 0.4, icon: SkillsInfo[1].skills[1].logo },
  { top: "60%", left: "80%", opacity: 0.4, icon: SkillsInfo[1].skills[2].logo },

  // Row 6
  { top: "70%", left: "18%", opacity: 0.4, icon: SkillsInfo[1].skills[3].logo },
  { top: "68%", left: "52%", opacity: 0.4, icon: SkillsInfo[1].skills[4].logo },
  { top: "73%", left: "85%", opacity: 0.4, icon: SkillsInfo[1].skills[5].logo },

  // Row 7
  { top: "83%", left: "14%", opacity: 0.4, icon: SkillsInfo[2].skills[0].logo },
  { top: "80%", left: "46%", opacity: 0.4, icon: SkillsInfo[2].skills[1].logo },
  { top: "86%", left: "78%", opacity: 0.4, icon: SkillsInfo[2].skills[2].logo },

  // Row 8
  { top: "93%", left: "22%", opacity: 0.4, icon: SkillsInfo[2].skills[3].logo },
  { top: "90%", left: "54%", opacity: 0.4, icon: SkillsInfo[2].skills[4].logo },
  { top: "96%", left: "82%", opacity: 0.4, icon: SkillsInfo[2].skills[5].logo },
  { top: "100%", left: "85%", opacity: 0.4, icon: SkillsInfo[2].skills[6].logo },

  { top: "93%", left: "22%", opacity: 0.4, icon: SkillsInfo[3].skills[0].logo },
  { top: "90%", left: "54%", opacity: 0.4, icon: SkillsInfo[3].skills[1].logo },
  { top: "96%", left: "82%", opacity: 0.4, icon: SkillsInfo[3].skills[2].logo },
  { top: "100%", left: "85%", opacity: 0.4, icon: SkillsInfo[3].skills[3].logo },

  { top: "93%", left: "22%", opacity: 0.4, icon: SkillsInfo[3].skills[4].logo },
  { top: "90%", left: "54%", opacity: 0.4, icon: SkillsInfo[3].skills[5].logo },
  { top: "96%", left: "82%", opacity: 0.4, icon: SkillsInfo[3].skills[6].logo },
  { top: "100%", left: "85%", opacity: 0.4, icon: SkillsInfo[3].skills[7].logo },
];


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
        <div
          className="pointer-events-none"
          onMouseMove={handleMouseMove}
          style={{
            zIndex: 0,
            position: "absolute",
            top: "400%",
            height: "500vh",
            width: "100vw",
          }} // in front of particles, behind content
        >
          {positions.map((pos, i) => (
            <img
              key={i}
              src={pos.icon}
              alt=""
              className="h-[50px] absolute transition-transform duration-75 ease-linear glow-icon"
              style={{
                top: pos.top,
                left: pos.left,
                opacity: pos.opacity,
                transform: `translate(${offset.x}px, ${offset.y}px)`,
              }}
            />
          ))}
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
