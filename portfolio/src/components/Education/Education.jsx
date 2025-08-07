import React from "react";
import "./Education.css";
import GradientText from "../Animations/Gradient-Text";
const Education = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-[20px] pb-[30px] gap-[30px] w-[100%]">
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class"
      >
        <h1 className="text-4xl font-bold">Education</h1>
      </GradientText>
      <div className="flex flex-row justify-center items-center w-[90%] gap-[30px] h-[300px]">
        <div className="flex flex-row justify-center items-center ">
          <img src="./school_logo.png" alt="" className="h-[180px] rounded-full" />
        </div>
        <div className="h-[100%] w-[5px] bg-purple-700"></div>
        <div></div>
      </div>
    </div>
  );
};

export default Education;
