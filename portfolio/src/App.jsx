import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Spline from "@splinetool/react-spline";


function App() {
  return (
    <>
      <div className="bg-[#050414] h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_2px),linear-gradient(to_bottom,#4f4f4f2e_2px,transparent_2px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        {/* Navbar (z-20 so it appears on top) */}
        <div className="relative z-20 pt-6">
          <Navbar />
        </div>

        {/* Spline animation (behind grid)
        <div className="absolute z-5">
          <Spline scene="https://prod.spline.design/ZqYTqHG7i1JEyTCc/scene.splinecode" />
        </div> */}

      </div>
    </>
  );
}

export default App;
