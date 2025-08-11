import React from "react";
import TextType from "../../components/Animations/TextType";
import { TbCloudDownload } from "react-icons/tb";
import Tilt from "react-parallax-tilt";
import "./About.css";
import { motion } from "framer-motion";
import GradientText from "../../components/Animations/Gradient-Text";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};
const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/Myresume.pdf";
  link.download = "Resume";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const About = () => {
  return (
    <>
      <div className="flex flex-row w-[100%] justify-evenly items-center pt-[30px] pb-[30px]">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white flex gap-7 flex-col items-start w-[500px]"
        >
          <h1 className="text-5xl font-bold">
            I am{" "}
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              Rupam Bhadra
            </GradientText>
          </h1>
          <div className="text-2xl font-semibold text-white-400">
            <TextType
              text={[
                "I am a coder",
                "I am a full stack web developer",
                "Happy coding!",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>
          <p className="text-1xl font-semibold text-white-400 backdrop-blur-2xl">
            I am a full stack developer with over 2 years of experience in
            building scalable web applications. Skilled in both frontend and
            backend development, i specialize in MERN stack and other modern
            technologies to create seamless user experience and efficient
            solutions.
          </p>
          <button
            className="w-[200px] h-[50px] bg-purple-600 text-white rounded-[20px] font-semibold floatEffect mt-1.5 cursor-pointer"
            onClick={handleDownload}
          >
            Download CV
            <TbCloudDownload className="inline ml-2 text-2xl" />
          </button>
        </motion.div>
        <Tilt>
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.3, ease: "easeOut" }}
            className="second"
          >
            <img
              src="/mypic.jpg"
              alt="Rupam Bhadra"
              className="rounded-full w-[275px] h-[275px] border-3 border-purple-700 floatEffect"
            />
          </motion.div>
        </Tilt>
      </div>
    </>
  );
};

export default About;
