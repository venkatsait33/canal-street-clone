import  { useRef } from 'react'
import DashedBorderAnimation from '../component/DashedBorderAnimation'
import DashedBorder from '../component/DashedBorder'
import Footer from '../component/Footer'
import { motion, useInView } from 'framer-motion'

const cardData = [
    {
        image: "https://images.prismic.io/canalstreetmarket/8f74dfabde9ebd66d0d078ba6cf794c77dc8ac5b_home_page_one.jpg?auto=compress,format",
        title: "Merging retail, food, art, and culture, Canal Street Market highlights top retail and design concepts, restaurants, and up-and-coming players in the downtown New York City community."

    }, {
        image: "https://images.prismic.io/canalstreetmarket/20c7997073b456fda0e6de872d23b6183892bdde_home_page_two.jpg?auto=compress,format",
        title: "Retail Market Hours:",
        time: "Thursday - Sun: 11:00AM - 7:00PM"
    }, {
        image: "https://images.prismic.io/canalstreetmarket/13a988aff3e9c672350fe8330eb7386c3a85eeb9_home_page_three.jpg?auto=compress,format",
        title: "Food Hall Hours:",
        time: "Mon - Sun: 11:00AM - 8:00PM"
    }
]

const About = () => {
    const ref = useRef(null);

    // Check if the image is in the viewport
    const isInView = useInView(ref, { once: true });
    return (
        <>
            <div className='flex'>
                <div className='relative flex flex-col justify-center h-full gap-2 '>
                    <h1 className='flex flex-col ml-20 justify-center mt-[150px] max-md:text-3xl lg:text-[75px] text-black  font-semibold mb-10 leading-[86px] tracking-normal  '>

                        Canal Street Market is a carefully curated retail market, food hall & community space space open year-round at 265 Canal Street.

                        <a className=''>
                            <span
                                className='home-hero_text' >Support Small Business</span>
                        </a>
                        this weekend!


                    </h1>
                    <motion.div ref={ref}
                        initial={{ opacity: 0, y: 100 }} // Initial off-screen position
                        animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
                        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
                        className='flex ml-1'>
                        <picture>
                            <img src="https://images.prismic.io/canalstreetmarket/1d99cf0e3a0144c1229f92ee5b3c63b0eaae893c_home-hero.jpg?auto=compress,format" alt="" className='w-[80%]  object-cover ' />
                        </picture>
                    </motion.div>

                    <div className='relative flex flex-col items-start justify-center bg-white'>
                        <h1 className='text-[130px] tracking-tighter text-black '>A New Kind of Market</h1>
                        <div className='grid lg:gap-10 max-sm:grid-cols-1 max-md:grid-cols-2 lg:grid-cols-3'>
                            {cardData.map((item, index) => {
                                return (
                                    <div className='flex flex-col gap-2' key={index}>
                                        <picture>
                                            <img className='lg:w-[420px] h-[500px] aspect-video  ' src={item.image} alt="" />
                                        </picture>
                                        <h2>{item.title}</h2>
                                        {item.time && <p>{item.time}</p>}
                                    </div>
                                )
                            }
                            )}
                        </div>
                        <div className='flex items-center justify-center ml-10 gap-[100px] mt-10 mb-10'>
                            <div>
                                <svg width="116px" height="60px" viewBox="0 12 116 58" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <defs></defs>
                                    <g id="R2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontFamily="PingFangSC-Semibold, PingFang SC" fontSize="60" fontWeight="500" lineSpacing="60">
                                        <g id="1440_HP_v2-1-Copy-3" transform="translate(-172.000000, -3219.000000)" fill="none" stroke="#000000" strokeWidth="0.75">
                                            <text id="事件">
                                                <tspan x="170" y="3282">活動</tspan>
                                            </text>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <p className='text-[80px] font-semibold text-black'>Market Events</p>
                            </div>
                            <div><svg width="116px" height="60px" viewBox="0 12 116 58" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                <defs></defs>
                                <g id="R2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontFamily="PingFangSC-Semibold, PingFang SC" fontSize="60" fontWeight="500" lineSpacing="60">
                                    <g id="1440_HP_v2-1-Copy-3" transform="translate(-172.000000, -3219.000000)" fill="none" stroke="#000000" strokeWidth="0.75">
                                        <text id="事件">
                                            <tspan x="170" y="3282">活動</tspan>
                                        </text>
                                    </g>
                                </g>
                            </svg></div>
                        </div>

                        <div className='flex flex-col items-center justify-center w-full h-[300px]'>
                            <DashedBorder />
                        </div>

                        <div className='flex items-center justify-evenly w-full h-[300px]'>
                            <div className=''>
                                <DashedBorderAnimation text="265 Canal St.New York, NY" />

                            </div>
                            <div className=''>

                                <DashedBorderAnimation img="https://images.prismic.io/canalstreetmarket/74921c6bf0abf767666c52a6af3c001c58643587_group-11.jpg?auto=compress,format" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
              
            </div >
        </>
    )
}

export default About