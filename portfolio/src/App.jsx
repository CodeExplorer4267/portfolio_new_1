import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
function App() {
  return (
    <>
      <div className="bg-[#050414] h-screen w-screen flex flex-col items-center justify-center">
        <Navbar/>
        <About/>
      </div>
    </>
  );
}

export default App;
