import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import GradientText from "../Animations/Gradient-Text";
const Contact = () => {
  return (
    <section id="Connect">
    <div className="h-[500px] w-[100%] flex flex-col items-center pb-[20px] ">
        <h1 className="text-4xl font-bold mb-[40px] bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Let's Talk</h1>
      <div className="flex flex-row justify-center items-center gap-[250px] mb-[20px]">
        <div className="w-[60%]">
          <DotLottieReact
            src="./mainscene.json"
            loop
            autoplay
            height={"400px"}
          />
        </div>
        <div className=" flex flex-col gap-[20px] justify-center items-center">
          <h2 className="bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent font-bold text-2xl">
            Let's Connect
          </h2>
          <input type="text" name="" id="" placeholder="Enter name" className="w-[400px] border border-purple-500 p-[15px] rounded-2xl"/>
          <input type="text" name="" id="" placeholder="Enter email" className="w-[400px] border border-purple-500 p-[15px] rounded-2xl"/>
          <textarea type="text" name="" id="" rows={4} placeholder="Enter Your Thoughts" className="w-[400px] border border-purple-500 p-[15px] rounded-2xl"/>
          <button className="h-[40px] w-[120px] p-[5px] rounded-2xl bg-linear-to-bl from-violet-500 to-fuchsia-500 text-black font-bold">Submit</button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
