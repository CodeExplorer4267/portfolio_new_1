import React from "react";
import "./Education.css";
import GradientText from "../Animations/Gradient-Text";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { SkillsInfo } from "../../constants";
import { motion } from "framer-motion";
const Education = () => {
  return (
    <section id="Education">
      <div className="flex flex-col justify-center items-center pt-[20px] pb-[30px] w-[100%]">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          <h1 className="text-4xl font-bold mb-[30px]">Education</h1>
        </GradientText>
        <div className="flex flex-row justify-center items-center w-[90%] gap-[30px] h-[500px]">
          <div className="flex flex-row justify-center items-center h-[100%] w-[40%] p-[10px]">
            <img
              src="./school_logo.png"
              alt=""
              className="h-[180px] rounded-full float-animation"
            />
          </div>
          <FaArrowAltCircleRight className="text-purple-700 text-[50px] absolute right-[48%] top-[474%] z-10" />
          <div className="h-[100%] w-[5px] bg-purple-700"></div>
          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1, // stretches fully
              transition: {
                duration: 1.4,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: true, amount: 0.3 }}
            style={{
              transformOrigin: "left",
            }}
            className="flex flex-col justify-center items-center gap-[30px] h-[100%] w-[40%] pl-[20px]"
          >
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
            <div className="flex flex-row gap-[40px] justify-center items-center w-[100%] text-white ">
              <h2 className="text-[18px] font-semibold">Subjects:</h2>
              <div className="flex flex-col justify-center items-center">
                <img
                  src="./physics_log.jpg"
                  alt=""
                  className="h-[40px] w-auto rounded-full"
                />
                <p>Physics</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src="./chemistry_logo.jpg"
                  alt=""
                  className="h-[40px] w-auto rounded-full"
                />
                <p>Chemistry</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src="./math_logo.jpg"
                  alt=""
                  className="h-[40px] w-auto rounded-full"
                />
                <p>Maths</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-row justify-center items-center w-[90%] gap-[30px] h-[600px]">
          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1, // stretches fully
              transition: {
                duration: 1.4,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: true, amount: 0.3 }}
            style={{
              transformOrigin: "right",
            }}
            className="flex flex-col justify-center items-center gap-[30px] h-[100%] w-[40%] p-[15px]"
          >
            <h2 className="text-3xl bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent font-bold text-center">
              Maulana Abul Kalam Azad University Of Technology
            </h2>
            <p className="text-[16px] text-white ">(Oct 2022 - Present)</p>
            <p className="text-[16px] text-white">
              Currently pursuing a Bachelor of Technology in Information
              Technology, where I am deepening my knowledge in software
              development, algorithms, and data structures.
            </p>
            <div className="flex flex-row justify-center gap-[35px] items-center w-[80%] text-white text-[16px] ">
              <p className="font-semibold">B.Tech. in Information Technology</p>
              <p className="font-semibold">CGPA - 9.04</p>
            </div>
            <div className="flex flex-row justify-center items-center gap-[10px] p-[5px] text-white text-1xl w-[100%] flex-wrap text-center">
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <img
                  src={SkillsInfo[0].skills[0].logo}
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p>HTML</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <img
                  src={SkillsInfo[0].skills[1].logo}
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p>CSS</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <img
                  src={SkillsInfo[0].skills[3].logo}
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p>Java Script</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <img
                  src={SkillsInfo[0].skills[4].logo}
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p>React</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <img
                  src={SkillsInfo[0].skills[8].logo}
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p>Tailwind CSS</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <img
                  src={SkillsInfo[0].skills[2].logo}
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p>SASS</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <img
                  src="./framer_motion_logo.png"
                  alt=""
                  className="h-[35px] w-auto"
                />
                <p>Framer Motion</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <img
                  src={SkillsInfo[0].skills[9].logo}
                  alt=""
                  className="h-[40px] w-auto"
                />
                <p>GSAP</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <img
                  src={SkillsInfo[0].skills[10].logo}
                  alt=""
                  className="h-[30px] w-auto"
                />
                <p>Material UI</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <img
                  src={SkillsInfo[1].skills[1].logo}
                  alt=""
                  className="h-[30px] w-auto"
                />
                <p>Node Js</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <img
                  src={SkillsInfo[1].skills[2].logo}
                  alt=""
                  className="h-[30px] w-auto"
                />
                <p>Express Js</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <img
                  src={SkillsInfo[1].skills[4].logo}
                  alt=""
                  className="h-[30px] w-auto"
                />
                <p>MongoDB</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <img
                  src={SkillsInfo[1].skills[3].logo}
                  alt=""
                  className="h-[30px] w-auto"
                />
                <p>My SQL </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <img
                  src="cloudinary_logo.png"
                  alt=""
                  className="h-[30px] w-auto"
                />
                <p>Cloudinary</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <img
                  src={SkillsInfo[0].skills[6].logo}
                  alt=""
                  className="h-[30px] w-auto"
                />
                <p>Redux</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <img
                  src="socket_Io_logo.png"
                  alt=""
                  className="h-[30px] w-auto"
                />
                <p>Socket IO</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <img src="os_logo.webp" alt="" className="h-[30px] w-auto" />
                <p>Operating System</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <img
                  src="network_logo.jpg"
                  alt=""
                  className="h-[30px] w-auto"
                />
                <p>Networks</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <img
                  src="database_logo.avif"
                  alt=""
                  className="h-[30px] w-auto"
                />
                <p>Database Management</p>
              </div>
            </div>
          </motion.div>
          <FaArrowAltCircleLeft className="text-purple-700 text-[50px] absolute right-[48.5%] top-[540%] z-10" />
          <div className="h-[100%] w-[5px] bg-purple-700"></div>
          <div className="flex flex-row justify-center items-center h-[100%] w-[40%] p-[10px]">
            <img
              src="./makaut_logo.jpeg"
              alt=""
              className="h-[180px] rounded-full float-animation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
