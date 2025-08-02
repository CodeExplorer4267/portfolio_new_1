import React from "react";
import "./Projects.css";
import GradientText from "../Animations/Gradient-Text";
const Projects = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-[30px] pb-[30px] gap-[30px] w-[100%]">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          <h1 className="text-4xl font-bold">Projects</h1>
        </GradientText>
        <div className="first w-[80%] h-[400px] flex flex-row justify-evenly items-center">
          <img src="./laptop_img.png" alt="" className="h-auto w-[35%]"/>
          <div className="w-[5px] h-[100%] bg-purple-700"></div>
          <div className="flex flex-col items-center gap-[20px] w-[38%]">
             <h2 className="text-2xl text-white font-semibold">Online Examination Website</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
