import { motion } from "framer-motion";
import { useState } from "react"; import { TbArrowRightDashed } from "react-icons/tb";
const NewsLetter = () => {
    const [isAnimating, setIsAnimating] = useState(false);
  return (
      <div className=''>
          <motion.div
              className={`map-container h-[200px] w-full  ${isAnimating ? "animate-border" : ""}`}
              onMouseEnter={() => setIsAnimating(true)} // Start animation on hover
              onMouseLeave={() => setIsAnimating(false)}// Pause animation on hover out
          >
              <div className="flex items-center justify-between w-full h-full gap-32 mx-auto ml-10">
                  <div>
                      <p className="text-[24px] font-semibold text-black">Stay up to date with our newsletter</p>
                  </div>
                  <div className='flex justify-between w-full px-4 py-2 bg-transparent border border-black focus:border-transparent'>
                      <input type="email" className='bg-transparent outline-none placeholder:text-black ' placeholder='Email' />
                      <TbArrowRightDashed className="text-3xl text-black"/>
                  </div>

              </div>
          </motion.div>
          
    </div>
  )
}

export default NewsLetter