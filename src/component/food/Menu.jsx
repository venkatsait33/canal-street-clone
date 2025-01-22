import React, { useState } from "react";
import "./Menu.css";
import { menuItems } from "../../pages/Food";





const Menu = () => {
    const [hoveredImage, setHoveredImage] = useState("");
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (image, index) => {
        setHoveredImage(image);
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredImage("");
        setHoveredIndex(null);
    };

    return (
        <div className="w-full h-full mt-10">
            <div className="relative flex items-center justify-between ">
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className="menu-item "
                        onMouseEnter={() => handleMouseEnter(item.image, index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="relative flex flex-col">
                            <span>  {item.title}</span>
                            <span> {item.name}</span>
                      </div>
                        {hoveredImage && hoveredIndex === index && (
                            <div
                                className={`image-container ${index % 2 === 0 ? "image-right" : "image-left"
                                    }`}
                            >
                                <img src={hoveredImage} alt="Dish Preview" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;


