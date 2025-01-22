import { motion } from "framer-motion";

const CommunityDoted = () => {
    return (
        <div className="w-full "><div className="container ">
            {/* Top dashed line animation */}
            <motion.div
                className="dashed-line "
                animate={{ backgroundPosition: ["0% 0", "100% 0"] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            >


            </motion.div>

            {/* Content Section */}
            <div className="content">
                <div className="event">
                    <p className="date">09/21</p>
                    <p>Small Business Retail Pop Up Weekend!</p>
                </div>
                <div className="event">
                    <p className="date">02/07</p>
                    <p>New Balance x Paperboy Paris by Greenhouse @ Canal Street Market</p>
                </div>
                <div className="event">
                    <p className="date">12/11</p>
                    <p>Hack City 12/11</p>
                </div>
            </div>

            <div className="see-all-container top-[85%]" >
                <button className="see-all-button bg-[#FFB400] lg:text-2xl text-center flex items-center" style={{
                    padding: "25px 20px",

                }}>See All</button>
            </div>
            {/* Bottom dashed line animation */}
            <motion.div
                className="dashed-line"
                animate={{ backgroundPosition: ["0% 0", "-100% 0"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            ></motion.div>

            {/* See All Button */}

        </div></div>
    )
}

export default CommunityDoted