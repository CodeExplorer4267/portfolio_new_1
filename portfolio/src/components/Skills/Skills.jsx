import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ChromaGrid from "../Animations/Skills-grid";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import GradientText from "../Animations/Gradient-Text";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <section id="Skills">
        <div className="flex flex-col justify-center items-center pt-[30px] pb-[30px] gap-[30px] w-[100%]">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            <h1 className="text-4xl font-bold">Skills</h1>
          </GradientText>
          <p className="text-1xl font-semibold text-white w-1/2">
            As a passionate full stack developer, I have honed a diverse set of
            skills across frontend and backend technologies. From crafting
            responsive, user-friendly interfaces to building robust server-side
            logic and APIs, I leverage modern tools and frameworks to deliver
            efficient, scalable, and high-performance web applications.
          </p>
          <div className="w-[60%] flex flex-row justify-center items-center flex-wrap gap-15 mt-[15px] text-white">
            <Tilt>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                }}
                drag="x"
                dragSnapToOrigin
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1.4,
                    ease: "easeInOut",
                  },
                }}
                className="card-animation "
              >
                <div className="w-[100%] h-[100%] bg-[#232129] rounded-[40px] p-5 z-99 relative">
                  <h2 className="text-center text-2xl mb-[20px] font-semibold">
                    {SkillsInfo[0].title}
                  </h2>
                  <div className="flex flex-row flex-wrap gap-[10px]">
                    {SkillsInfo[0].skills.map((skill, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-row justify-start items-center p-[8px] gap-[5px] border-2 border-purple-600 rounded-[20px]"
                        >
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="h-5 w-5"
                          />
                          <span className="text-white text-[13px]">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </Tilt>
            <Tilt>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                }}
                drag="x"
                dragSnapToOrigin
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1.4,
                    ease: "easeInOut",
                  },
                }}
                className="card-animation"
              >
                <div className="w-[100%] h-[100%] bg-[#232129] rounded-[40px] p-5 z-99 relative">
                  <h2 className="text-center text-2xl mb-[20px] font-semibold">
                    {SkillsInfo[1].title}
                  </h2>
                  <div className="flex flex-row flex-wrap gap-[10px]">
                    {SkillsInfo[1].skills.map((skill, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-row justify-start items-center p-[8px] gap-[5px] border-2 border-purple-600 rounded-[20px]"
                        >
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="h-5 w-5"
                          />
                          <span className="text-white text-[13px]">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </Tilt>
            <Tilt>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                }}
                drag="x"
                dragSnapToOrigin
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1.4,
                    ease: "easeInOut",
                  },
                }}
                className="card-animation"
              >
                <div className="w-[100%] h-[100%] bg-[#232129] rounded-[40px] p-5 z-99 relative">
                  <h2 className="text-center text-2xl mb-[20px] font-semibold">
                    {SkillsInfo[2].title}
                  </h2>
                  <div className="flex flex-row flex-wrap gap-[10px]">
                    {SkillsInfo[2].skills.map((skill, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-row justify-start items-center p-[8px] gap-[5px] border-2 border-purple-600 rounded-[20px]"
                        >
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="h-5 w-5"
                          />
                          <span className="text-white text-[13px]">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </Tilt>
            <Tilt>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                }}
                drag="x"
                dragSnapToOrigin
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1.4,
                    ease: "easeInOut",
                  },
                }}
                className="card-animation"
              >
                <div className="w-[100%] h-[100%] bg-[#232129] rounded-[40px] p-5 z-99 relative">
                  <h2 className="text-center text-2xl mb-[20px] font-semibold">
                    {SkillsInfo[3].title}
                  </h2>
                  <div className="flex flex-row flex-wrap gap-[10px]">
                    {SkillsInfo[3].skills.map((skill, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-row justify-start items-center p-[8px] gap-[5px] border-2 border-purple-600 rounded-[20px]"
                        >
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="h-5 w-5"
                          />
                          <span className="text-white text-[13px]">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </Tilt>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
