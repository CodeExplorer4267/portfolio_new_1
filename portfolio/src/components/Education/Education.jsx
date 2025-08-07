import React from "react";
import "./Education.css";
import GradientText from "../Animations/Gradient-Text";
const Education = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-[20px] pb-[30px] w-[100%]">
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class"
      >
        <h1 className="text-4xl font-bold mb-[30px]">Education</h1>
      </GradientText>
      <div className="flex flex-row justify-center items-center w-[90%] gap-[30px] h-[350px]">
        <div className="flex flex-row justify-center items-center h-[100%] w-[40%] p-[10px]">
          <img
            src="./school_logo.png"
            alt=""
            className="h-[180px] rounded-full"
          />
        </div>
        <div className="h-[100%] w-[5px] bg-purple-700"></div>
        <div className="flex flex-col justify-center items-center gap-[30px] h-[100%] w-[40%] p-[15px]">
          <h2 className="text-3xl bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent font-bold text-center">
            Barasat Mahatma Gandhi Memorial High School
          </h2>
          <p className="text-[16px] text-white ">(Jan 2014 - Mar 2022)</p>
          <p className="text-[16px] text-white">
            Completed my schooling with a focus on science and mathematics,
            laying the foundation for my future studies in computer science.
          </p>
          <div className="flex flex-row justify-between items-center w-[50%] text-white text-[18px] ">
            <p className="font-semibold">10th - 93.28%</p>
            <p className="font-semibold">12th - 90%</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-[90%] gap-[30px] h-[350px]">
        <div className="flex flex-col justify-center items-center gap-[30px] h-[100%] w-[40%] p-[15px]">
          <h2 className="text-3xl bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent font-bold text-center">
           Maulana Abul Kalam Azad University Of Technology
          </h2>
          <p className="text-[16px] text-white ">(Oct 2022 - Present)</p>
          <p className="text-[16px] text-white">
            Currently pursuing a Bachelor of Technology in Information Technology, where I am deepening my knowledge in software development, algorithms, and data structures.
          </p>
          <div className="flex flex-row justify-between items-center w-[80%] text-white text-[16px] ">
            <p className="font-semibold">B.Tech. in Information Technology</p>
            <p className="font-semibold">CGPA - 9.04</p>
          </div>
        </div>
        <div className="h-[100%] w-[5px] bg-purple-700"></div>
        <div className="flex flex-row justify-center items-center h-[100%] w-[40%] p-[10px]">
          <img
            src="./makaut_logo.jpeg"
            alt=""
            className="h-[180px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
