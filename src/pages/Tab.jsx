import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "./About";
import Food from "./Food";
import Retail from "./Retail";
import Community from "./Community";

const tabs = [
  { id: 1, label: "", color: "bg-white", content: <About /> },
  { id: 2, p: '餐饮', label: "Food", color: "bg-[#5EA3EC]", content: <Food /> },
  { id: 3, p: '購物', label: "Retail", color: "bg-[#F64444]", content: <Retail /> },
  { id: 4, p: '文化', label: "Community", color: "bg-[#FFB400]", content: <Community /> },
];

const SlidingTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab((prev) => (prev === id ? null : id)); // Toggle active tab
  };

  const handleContentClick = (e) => {
    e.stopPropagation(); // Prevent triggering tab container click
  };

  return (
    <div className="flex w-full ">
      <div className="flex">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            initial={{ width: "50px" }}
            animate={{
              width: activeTab === tab.id ? "1340px" : "60px",
            }}
            transition={{
              duration: activeTab === tab.id ? 0 : 1, // No animation when active
              type: "spring",
            }}
            className={`cursor-pointer ${tab.color} flex items-center justify-center text-white`}
            onClick={() => handleTabClick(tab.id)}
          >
            <div className="flex flex-col items-center justify-center w-full">
              {/* Hide the label if the tab is active */}
              {activeTab !== tab.id ? (
                <div className={`transform fixed top-[20%] flex justify-center items-center flex-col `}>
                  <p>
                    {tab.p}
                  </p>
                  <p className="mt-[250px] text-xl font-semibold rotate-90 ">
                    {tab.label}
                  </p>

                </div>
              ) : (
                <div className="absolute text-4xl font-bold transform"></div>
              )}

              {/* Show the content of the active tab */}
              <div
                className="flex w-full h-full p-10"
                onClick={handleContentClick} // Prevent sliding when clicking on content
              >
                <AnimatePresence>
                  {activeTab === tab.id && (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="w-full "
                    >
                      <p className="mt-4">{tab.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SlidingTabs;
