import React from "react";
import {motion} from "framer-motion";
const Skills = () => {
  return (
    <>
      <motion.div initial={{
        opacity:0
      }} whileInView={{
        opacity:1
      }} className="flex flex-col justify-center items-center pt-[30px] pb-[30px] gap-[30px]">
        <h1 className="text-white text-4xl font-bold">Skills</h1>
        <p className="text-1xl font-semibold text-white w-1/2">
          As a passionate full stack developer, I have honed a diverse set of
          skills across frontend and backend technologies. From crafting
          responsive, user-friendly interfaces to building robust server-side
          logic and APIs, I leverage modern tools and frameworks to deliver
          efficient, scalable, and high-performance web applications.
        </p>
        <div className="grid grid-rows-3 grid-cols-2 row-gap-4 col-gap-4 p-10">
          <div className="h-30 w-auto border-red-500 text-white">Hello</div>
          <div className="h-30 w-auto border-red-500 text-white">Hello</div>
          <div className="h-30 w-auto border-red-500 text-white">Hello</div>
          <div className="h-30 w-auto border-red-500 text-white">Hello</div>
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
