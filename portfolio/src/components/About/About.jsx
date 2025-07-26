import React from "react";
import TextType from "../../components/Animations/TextType";
const About = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly items-center">
        <div className="text-white flex flex-col items-center w-[500px]">
          <h1>I am <span style={{color:'rgb(130, 4, 255)'}}>Rupam Bhadra</span></h1>
          <TextType
            text={["I am a coder", "I am a full stack web developer", "Happy coding!"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
          <p>I am a full stack developer with over 2 years of experience in building scalable web applications. Skiller in both frontend and backend development, i specialize in MERN stack and other modern technologies to create seamless user experience and efficient solutions.</p>
        </div>
        <div className="second">
          <img src='/mypic.jpg' alt="Rupam Bhadra" className="rounded-full w-[300px] h-[300px] border-3 border-purple-700" />
        </div>
      </div>
    </>
  );
};

export default About;
