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
      <div className="flex flex-row justify-center items-center w-[90%] gap-[30px]">

      </div>
    </div>
  );
};

export default Education;
