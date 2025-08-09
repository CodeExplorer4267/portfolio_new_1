import React from "react";
import MagicBento from "../Animations/Magic-bento";

const Achivement = () => {
  return (
    <div>
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
  );
};

export default Achivement;
