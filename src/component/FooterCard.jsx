import { motion } from "framer-motion";
import { useState } from "react";

const FooterCard = (item) => {
    const [isAnimating, setIsAnimating] = useState(false);
    
    const { title, icon, link } = item
    return (
        <div className="">
            <div className="mt-10" >
                <motion.div
                    className={`map-container h-[200px] w-[300px]  ${isAnimating ? "animate-border" : ""}`}
                    onMouseEnter={() => setIsAnimating(true)} // Start animation on hover
                    onMouseLeave={() => setIsAnimating(false)}// Pause animation on hover out
                >
                    <div className="flex flex-col items-center justify-center h-full mx-auto">
                        <div>
                            <a href={link} target="_blank" rel="noreferrer"><span className="text-2xl font-semibold text-black">{icon}</span></a></div>
                        <p>{title}</p>

                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default FooterCard