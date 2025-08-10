import React from "react";
import MagicBento from "../Animations/Magic-bento";
import GradientText from "../Animations/Gradient-Text";
const Achivement = () => {
  return (
    <section id="Achive">
    <div className="flex flex-col justify-center items-center w-[100%] pt-[30px] pb-[30px]">
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class"
      >
        <h1 className="text-4xl font-bold mb-[40px]">Achievements</h1>
      </GradientText>
      <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={20}
        glowColor="132, 0, 255"
      />
    </div>
    </section>
  );
};

export default Achivement;
