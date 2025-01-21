import { useState } from "react";
import { motion } from "framer-motion";

const DashedBorderAnimation = ({ img, text }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <motion.div
      className={`map-container w-[300px] h-[300px] ${isAnimating ? "animate-border" : ""}`}
      onMouseEnter={() => setIsAnimating(true)} // Start animation on hover
      onMouseLeave={() => setIsAnimating(false)} // Pause animation on hover out
    >
      {text && <p className="centered-text">{text}</p>}
      {
        img && <img
          src={img} // Replace with your actual image path
          alt="Map"
          className="map-image"
        />
      }

    </motion.div>
  );
};

export default DashedBorderAnimation;
