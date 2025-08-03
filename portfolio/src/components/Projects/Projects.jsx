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
        <div className="first w-[90%] h-[400px] flex flex-row justify-evenly items-center">
          <div className="w-[40%] flex flex-row justify-center items-center">
            <img src="./laptop_img.png" alt="" className="h-auto w-[300px]" />
          </div>
          <div className="w-[5px] h-[100%] bg-purple-700"></div>
          <div className="flex flex-col items-center gap-[20px] w-[40%] p-[5px]">
            <h2 className="text-3xl bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent font-bold">
              Online Examination Website
            </h2>
            <p className="text-white text-[14px] block">
              My online examination website is a full-stack platform built using
              (MySQL, Express.js, React.js, Node.js).It includes separate
              portals for teachers and students, allowing teachers to create
              exams , add SAQs, and view detailed results. Students can join
              exams, answer questions within a timer, and view their results.
              The platform supports real-time chat via WebSockets and integrates
              AI to generate exam questions. It ensures secure and efficient
              online assessments with features like result uploads, and answer
              reviews.Teachers can also upload materials for students.
            </p>
            <div className="flex flex-row gap-[1px]">
              <img src="./skills.png" alt="" className="h-[110px] w-auto"/>
              <img src="./skills.png" alt="" className="h-[110px] w-auto"/>
              <img src="./skills.png" alt="" className="h-[110px] w-auto"/>
              <img src="./skills.png" alt="" className="h-[110px] w-auto"/>
              <img src="./skills.png" alt="" className="h-[110px] w-auto"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
