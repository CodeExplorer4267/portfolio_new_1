import React from "react";
import { motion } from "framer-motion";
import ChromaGrid from "../Animations/Skills-grid";
import { SkillsInfo } from "../../constants";
const Skills = () => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        className="flex flex-col justify-center items-center pt-[30px] pb-[30px] gap-[30px] w-[100%]"
      >
        <h1 className="text-white text-4xl font-bold">Skills</h1>
        <p className="text-1xl font-semibold text-white w-1/2">
          As a passionate full stack developer, I have honed a diverse set of
          skills across frontend and backend technologies. From crafting
          responsive, user-friendly interfaces to building robust server-side
          logic and APIs, I leverage modern tools and frameworks to deliver
          efficient, scalable, and high-performance web applications.
        </p>
        <div className="w-[60%] flex flex-row justify-center items-center flex-wrap gap-15 mt-[15px] text-white">
          <div className="w-[350px] h-[300px] bg-[#050414] border-3 border-amber-300 rounded-[40px] p-5">
            <h2 className="text-center text-2xl mb-[20px] font-semibold">{SkillsInfo[0].title}</h2>
            <div className="flex flex-row flex-wrap gap-[10px]">
              {SkillsInfo[0].skills.map((skill, index) => {
                return (
                  <div key={index} className="flex flex-row justify-start items-center p-[8px] gap-[5px] border-2 border-amber-300 rounded-[20px]">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="h-5 w-5"
                    />
                    <span className="text-white text-[13px]">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-[350px] h-[300px] bg-[#050414] border-3 border-amber-300 rounded-[40px] p-5">
            <h2 className="text-center text-2xl mb-[20px] font-semibold">{SkillsInfo[1].title}</h2>
            <div className="flex flex-row flex-wrap gap-[10px]">
                {
                  SkillsInfo[1].skills.map((skill,index)=>{
                    return (
                      <div key={index} className="flex flex-row justify-start items-center p-[8px] gap-[5px] border-2 border-amber-300 rounded-[20px]">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="h-5 w-5"
                        />
                        <span className="text-white text-[13px]">{skill.name}</span>
                      </div>
                    )
                  })
                }
            </div>
          </div>
          <div className="w-[350px] h-[300px] bg-[#050414] border-3 border-amber-300 rounded-[40px] p-5">
            <h2 className="text-center text-2xl mb-[20px] font-semibold">{SkillsInfo[2].title}</h2>
            <div className="flex flex-row flex-wrap gap-[10px]">
              {
                SkillsInfo[2].skills.map((skill,index)=>{
                  return (
                    <div key={index} className="flex flex-row justify-start items-center p-[8px] gap-[5px] border-2 border-amber-300 rounded-[20px]">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="h-5 w-5"
                      />
                      <span className="text-white text-[13px]">{skill.name}</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="w-[350px] h-[300px] bg-[#050414] border-3 border-amber-300 rounded-[40px] p-5">
            <h2 className="text-center text-2xl mb-[20px] font-semibold">{SkillsInfo[3].title}</h2>
            <div className="flex flex-row flex-wrap gap-[10px]">
              {
                SkillsInfo[3].skills.map((skill,index)=>{
                  return (
                    <div key={index} className="flex flex-row justify-start items-center p-[8px] gap-[5px] border-2 border-amber-300 rounded-[20px]">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="h-5 w-5"
                      />
                      <span className="text-white text-[13px]">{skill.name}</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
