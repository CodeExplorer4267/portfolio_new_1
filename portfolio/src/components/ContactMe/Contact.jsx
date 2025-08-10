import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import GradientText from "../Animations/Gradient-Text";
const Contact = () => {
  return (
    <div className="h-[500px] w-[100%] flex flex-col items-center pb-[20px] ">
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class"
      >
        <h1 className="text-4xl font-bold mb-[40px]">Let's Talk</h1>
      </GradientText>
      <div className="flex flex-row justify-evenly items-center gap-[40px]">
        <div className="w-[60%]">
          <DotLottieReact
            src="./mainscene.json"
            loop
            autoplay
            height={"400px"}
          />
        </div>
        <div className=" flex flex-col gap-[20px]">
          <h2 className="bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent font-bold">
            Let's Connect
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
